"use client"

// Google OAuth 2.0 配置和认证逻辑
export interface GoogleUser {
  id: string
  email: string
  name: string
  picture: string
  given_name: string
  family_name: string
}

export interface AuthState {
  user: GoogleUser | null
  isLoading: boolean
  error: string | null
}

class GoogleOAuthService {
  private clientId: string
  private isInitialized: boolean = false

  constructor() {
    // 从环境变量获取Google Client ID
    this.clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''
  }

  private get redirectUri(): string {
    if (typeof window === 'undefined') {
      return 'http://localhost:3003' // 默认值
    }
    return window.location.origin
  }

  // 初始化 Google OAuth
  async initGoogleOAuth(): Promise<void> {
    if (this.isInitialized || typeof window === 'undefined') {
      return
    }

    if (!this.clientId) {
      throw new Error('Google Client ID is not configured')
    }

    return new Promise((resolve, reject) => {
      // 检查是否已经加载了Google API
      if (window.google?.accounts?.id) {
        this.setupGoogleOAuth()
        resolve()
        return
      }

      // 加载 Google API 脚本
      const script = document.createElement('script')
      script.src = 'https://accounts.google.com/gsi/client'
      script.async = true
      script.defer = true

      script.onload = () => {
        if (window.google?.accounts?.id) {
          this.setupGoogleOAuth()
          resolve()
        } else {
          reject(new Error('Failed to load Google API'))
        }
      }

      script.onerror = () => {
        reject(new Error('Failed to load Google Auth script'))
      }

      document.head.appendChild(script)
    })
  }

  // 设置Google OAuth配置
  private setupGoogleOAuth(): void {
    if (!window.google?.accounts?.id) {
      throw new Error('Google API not loaded')
    }

    window.google.accounts.id.initialize({
      client_id: this.clientId,
      callback: this.handleCredentialResponse.bind(this),
      auto_select: false,
      cancel_on_tap_outside: false,
    })

    this.isInitialized = true
  }

  // 处理 Google 返回的凭据
  private async handleCredentialResponse(response: any) {
    try {
      const decodedToken = this.decodeJWT(response.credential)

      // 存储用户信息
      localStorage.setItem('geo_user', JSON.stringify(decodedToken))
      localStorage.setItem('geo_access_token', response.credential)
      localStorage.setItem('isAuthenticated', 'true')

      // 触发自定义事件，通知登录成功
      window.dispatchEvent(new CustomEvent('google-login-success', {
        detail: { user: decodedToken }
      }))

      return decodedToken
    } catch (error) {
      console.error('Google auth error:', error)
      // 触发错误事件
      window.dispatchEvent(new CustomEvent('google-login-error', {
        detail: { error: error instanceof Error ? error.message : 'Unknown error' }
      }))
      throw error
    }
  }

  // 解析 JWT Token
  private decodeJWT(token: string): GoogleUser {
    try {
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
      return JSON.parse(jsonPayload)
    } catch (error) {
      throw new Error('Invalid JWT token')
    }
  }

  // 弹出 Google 登录窗口
  async signInWithGoogle(): Promise<GoogleUser> {
    try {
      // 确保Google OAuth已初始化
      await this.initGoogleOAuth()

      if (!window.google?.accounts?.id) {
        throw new Error('Google Auth not initialized')
      }

      return new Promise((resolve, reject) => {
        // 监听登录成功事件
        const handleSuccess = (event: any) => {
          window.removeEventListener('google-login-success', handleSuccess)
          window.removeEventListener('google-login-error', handleError)
          resolve(event.detail.user)
        }

        const handleError = (event: any) => {
          window.removeEventListener('google-login-success', handleSuccess)
          window.removeEventListener('google-login-error', handleError)
          reject(new Error(event.detail.error || 'Google login failed'))
        }

        window.addEventListener('google-login-success', handleSuccess)
        window.addEventListener('google-login-error', handleError)

        // 设置超时
        setTimeout(() => {
          window.removeEventListener('google-login-success', handleSuccess)
          window.removeEventListener('google-login-error', handleError)
          reject(new Error('Login timeout'))
        }, 30000) // 30秒超时

        // 弹出登录窗口
        window.google.accounts.id.prompt((notification: any) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            // 如果没有显示，使用传统的登录流程
            window.google.accounts.id.renderButton(
              document.getElementById('google-signin-button')!,
              {
                theme: 'outline',
                size: 'large',
                text: 'signin_with',
                width: 300,
              }
            )
          }
        })
      })
    } catch (error) {
      console.error('Google login error:', error)
      throw error
    }
  }

  // 检查用户是否已登录
  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false
    const token = localStorage.getItem('geo_access_token')
    const user = localStorage.getItem('geo_user')
    return !!(token && user)
  }

  // 获取当前用户信息
  getCurrentUser(): GoogleUser | null {
    if (typeof window === 'undefined') return null
    const userStr = localStorage.getItem('geo_user')
    return userStr ? JSON.parse(userStr) : null
  }

  // 登出
  signOut(): void {
    if (typeof window === 'undefined') return

    localStorage.removeItem('geo_access_token')
    localStorage.removeItem('geo_user')
    localStorage.removeItem('isAuthenticated')

    // 通知登出
    window.dispatchEvent(new CustomEvent('google-logout', {
      detail: { message: 'User logged out' }
    }))

    // 撤销 Google 授权（可选）
    if (window.google?.accounts?.id) {
      window.google.accounts.id.disableAutoSelect()
    }
  }

  // 获取认证头
  getAuthHeader(): { Authorization: string } | null {
    const token = localStorage.getItem('geo_access_token')
    return token ? { Authorization: `Bearer ${token}` } : null
  }
}

// 创建全局实例（延迟实例化）
let googleOAuthServiceInstance: GoogleOAuthService | null = null

export const googleOAuthService = (): GoogleOAuthService => {
  if (!googleOAuthServiceInstance) {
    googleOAuthServiceInstance = new GoogleOAuthService()
  }
  return googleOAuthServiceInstance
}

// 扩展 Window 类型
declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: any) => void
          prompt: (callback?: (notification: any) => void) => void
          renderButton: (element: HTMLElement, config: any) => void
          disableAutoSelect: () => void
        }
      }
    }
  }
}

export default googleOAuthService