import Link from "next/link"
import { navigationConfig } from "@/lib/site-config"
import { Github, Twitter, Mail, Heart } from "lucide-react"

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
              <span className="font-bold text-xl text-foreground">GEO Institute</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              专业的生成式引擎优化服务平台，让AI像人类一样理解您的内容。
              致力于帮助企业在AI时代建立权威性和可见性。
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/geo-institute"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/geo_institute"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:contact@yinhang.org"
                className="text-muted-foreground hover:text-primary transition-colors"
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