"use client"

import Link from "next/link"
import { navigationConfig } from "@/lib/site-config"
import { Mail, Heart, MessageCircle, QrCode } from "lucide-react"
import { useState } from "react"

// 微信二维码组件
const WeChatQRCode = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        console.log('微信图标悬停触发');
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        console.log('微信图标悬停离开');
        setIsHovered(false);
      }}
    >
      <button
        className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
        aria-label="微信二维码"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="sr-only">微信</span>
      </button>

      {/* 二维码弹窗 */}
      {isHovered && (
        <div className="absolute bottom-full left-0 mb-2 p-4 bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] transition-all duration-200">
          <div className="text-center">
            {/* 真实二维码图片 - 带圆角白色外边框 */}
            <div className="w-40 h-40 p-4 bg-white rounded-xl shadow-lg border border-gray-100 mb-3 inline-block">
              <img
                src="/images/wechat-qr.png"
                alt="微信二维码"
                className="w-full h-full object-contain rounded-lg"
                onLoad={(e) => console.log('二维码图片加载成功')}
                onError={(e) => console.error('二维码图片加载失败', e)}
              />
            </div>
            <p className="text-sm text-gray-700 font-medium">扫码添加微信</p>
          </div>
          {/* 小三角形 */}
          <div className="absolute top-full left-6 -mt-2">
            <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-t-white"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-supabase shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="h-6 w-6 bg-white/90 rounded-sm" />
              </div>
              <span className="font-bold text-xl text-foreground">GEO 生成式引擎优化</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              专业的生成式引擎优化服务平台，让AI像人类一样理解您的内容。
              致力于帮助企业在AI时代建立权威性和可见性。
            </p>
            <div className="flex items-center space-x-4">
              <WeChatQRCode />
              <Link
                href="mailto:service@yinhang.org"
                className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
                aria-label="邮件联系"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">产品服务</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  关于GEO
                </Link>
              </li>
              <li>
                <Link
                  href="/methods"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  方法框架
                </Link>
              </li>
              <li>
                <Link
                  href="/cases"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  案例研究
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  咨询服务
                </Link>
              </li>
            </ul>
          </div>

          {/* Knowledge Hub */}
          <div>
            <h3 className="font-semibold mb-4">知识中心</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/knowledge/guides"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  操作指南
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge/research"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  深度报告
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge/prompt-lab"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  提示词实验室
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge/tools"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  工具索引
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">资源库</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources/glossary"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  术语库
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/templates"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  结构模板
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/checklist"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  优化清单
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  月度报告
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} GEO Optimization Institute. 保留所有权利。
          </p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-4 sm:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for AI era</span>
          </div>
        </div>
      </div>
    </footer>
  )
}