"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Mail, Shield, Star, CheckCircle, AlertCircle } from "lucide-react"
import { googleOAuthService, type GoogleUser } from "@/lib/auth/google-oauth"
import { fallbackAuthService, type FallbackUser } from "@/lib/auth/fallback-auth"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLoginSuccess?: (user: { email: string; name: string }) => void
}

export const LoginModalSimple = ({ isOpen, onClose, onLoginSuccess }: LoginModalProps) => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [isInitialized, setIsInitialized] = React.useState(false)
  const [showFallback, setShowFallback] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')

  // 初始化Google OAuth
  React.useEffect(() => {
    if (isOpen && !isInitialized) {
      googleOAuthService().initGoogleOAuth()
        .then(() => setIsInitialized(true))
        .catch((error) => {
          console.error('Failed to initialize Google OAuth:', error)
          setError('无法初始化Google登录，请刷新页面重试')
        })
    }
  }, [isOpen, isInitialized])

  const handleGoogleLogin = async () => {
    setError(null)
    setIsLoading(true)

    try {
      // 使用真实的Google OAuth登录
      const googleUser = await googleOAuthService().signInWithGoogle()

      // 转换用户数据格式
      const userData = {
        email: googleUser.email,
        name: googleUser.name
      }

      // 通知父组件
      if (onLoginSuccess) {
        onLoginSuccess(userData)
      }

      onClose()
    } catch (error) {
      console.error("Google登录失败:", error)
      const errorMessage = error instanceof Error ? error.message : "登录失败，请重试"
      setError(errorMessage)
      // 如果Google登录失败，显示备用登录选项
      setTimeout(() => setShowFallback(true), 1000)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFallbackLogin = async () => {
    if (!email.trim() || !name.trim()) {
      setError('请填写完整的邮箱和姓名')
      return
    }

    setError(null)
    setIsLoading(true)

    try {
      const fallbackUser = await fallbackAuthService().signInWithEmail(email, name)

      const userData = {
        email: fallbackUser.email,
        name: fallbackUser.name
      }

      if (onLoginSuccess) {
        onLoginSuccess(userData)
      }

      onClose()
    } catch (error) {
      console.error("备用登录失败:", error)
      const errorMessage = error instanceof Error ? error.message : "登录失败，请重试"
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  
  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md mx-4 animate-scale-in">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-200"
        >
          <X className="h-6 w-6" />
        </Button>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">登录GEO账户</CardTitle>
            <CardDescription className="text-base">
              解锁完整的AI优化工具和分析功能
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* 错误提示 */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-3">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-red-700 dark:text-red-300">{error}</span>
                </div>
              </div>
            )}

            {/* Google登录按钮 */}
            <Button
              onClick={handleGoogleLogin}
              disabled={isLoading || !isInitialized}
              className="w-full h-12 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-lg flex items-center justify-center space-x-3 transition-all duration-300 hover:shadow-lg"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900" />
              ) : !isInitialized ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900" />
                  <span className="font-medium">正在初始化Google登录...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="font-medium">使用Google账户登录</span>
                </>
              )}
            </Button>

            {(showFallback || error) && (
              <>
                {/* 分隔线 */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-4 text-muted-foreground">备用登录方式</span>
                  </div>
                </div>

                {/* 备用登录表单 */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      姓名
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="请输入您的姓名"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      邮箱
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="请输入您的邮箱地址"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={isLoading}
                    />
                  </div>
                  <Button
                    onClick={handleFallbackLogin}
                    disabled={isLoading}
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mx-auto" />
                    ) : (
                      <span className="font-medium">快速登录</span>
                    )}
                  </Button>
                </div>
              </>
            )}

  
            {/* 功能特性 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-sm mb-3 flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                登录后解锁的功能
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "多次GEO查询",
                  "AI模型排名报告",
                  "个性化优化建议",
                  "数据导出和历史",
                  "优先客户支持",
                  "定期更新功能"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 服务条款 */}
            <div className="text-center text-xs text-muted-foreground">
              <p>
                登录即表示您同意我们的
                <Button variant="link" className="h-auto p-0 text-xs hover:text-primary">
                  服务条款
                </Button>
                和
                <Button variant="link" className="h-auto p-0 text-xs hover:text-primary">
                  隐私政策
                </Button>
              </p>
            </div>

            {/* 安全提示 */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <Shield className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-green-700 dark:text-green-300">
                  <p className="font-medium mb-1">安全保护</p>
                  <p>我们使用行业标准的加密技术保护您的数据安全，绝不分享您的个人信息。</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}