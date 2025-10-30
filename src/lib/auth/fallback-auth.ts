"use client"

// 备用认证方案，用于Google OAuth失败时
export interface FallbackUser {
  email: string
  name: string
  id: string
}

export class FallbackAuthService {
  // 生成简单的用户ID
  private generateUserId(): string {
    return 'user_' + Math.random().toString(36).substr(2, 9) + Date.now()
  }

  // 模拟登录流程
  async signInWithEmail(email: string, name: string): Promise<FallbackUser> {
    // 简单的邮箱验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw new Error('请输入有效的邮箱地址')
    }

    if (!name || name.trim().length < 2) {
      throw new Error('请输入有效的姓名')
    }

    const user: FallbackUser = {
      email: email.trim(),
      name: name.trim(),
      id: this.generateUserId()
    }

    // 保存到localStorage
    localStorage.setItem('geo_user', JSON.stringify(user))
    localStorage.setItem('geo_fallback_auth', 'true')
    localStorage.setItem('isAuthenticated', 'true')

    return user
  }

  // 检查是否使用备用认证
  isFallbackAuth(): boolean {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('geo_fallback_auth') === 'true'
  }

  // 获取当前用户
  getCurrentUser(): FallbackUser | null {
    if (typeof window === 'undefined') return null

    const userStr = localStorage.getItem('geo_user')
    if (!userStr) return null

    try {
      const user = JSON.parse(userStr)
      // 如果是备用认证用户，返回FallbackUser格式
      if (this.isFallbackAuth() && user.email && user.name) {
        return {
          id: user.id || this.generateUserId(),
          email: user.email,
          name: user.name
        }
      }
    } catch (error) {
      console.error('Failed to parse user:', error)
    }

    return null
  }

  // 登出
  signOut(): void {
    if (typeof window === 'undefined') return

    localStorage.removeItem('geo_user')
    localStorage.removeItem('geo_access_token')
    localStorage.removeItem('geo_fallback_auth')
    localStorage.removeItem('isAuthenticated')

    // 触发登出事件
    window.dispatchEvent(new CustomEvent('auth-logout', {
      detail: { message: 'User logged out' }
    }))
  }

  // 检查认证状态
  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('isAuthenticated') === 'true' &&
           (localStorage.getItem('geo_access_token') || localStorage.getItem('geo_fallback_auth')) !== null
  }
}

// 创建实例
export const fallbackAuthService = (): FallbackAuthService => {
  return new FallbackAuthService()
}