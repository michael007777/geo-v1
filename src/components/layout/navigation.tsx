"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigationConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Layers,
  FolderOpen,
  Library,
  Mail,
  User,
} from "lucide-react"
import { LoginModalSimple } from "@/components/auth/login-modal-simple"
import { googleOAuthService } from "@/lib/auth/google-oauth"

const getIcon = (title: string) => {
  switch (title) {
    case "操作教程":
    case "深度报告":
    case "提示词实验室":
    case "工具索引":
      return <BookOpen className="h-4 w-4" />
    case "术语库":
    case "结构模板":
    case "优化清单":
      return <Library className="h-4 w-4" />
    default:
      return null
  }
}

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="h-9 w-9"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed top-16 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 animate-fade-in-up">
          <div className="container mx-auto px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
            {navigationConfig.mainNav.map((item) => (
              <div key={item.href || item.title} className="rounded-lg">
                {!item.children ? (
                  <Link
                    href={item.href!}
                    className="block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:scale-[1.02]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div className="space-y-2">
                    <div className="px-4 py-3 text-sm font-semibold text-foreground bg-muted/30 rounded-lg">{item.title}</div>
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href!}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-muted-foreground rounded-lg transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:scale-[1.02]"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                            {getIcon(child.title)}
                          </div>
                          <span>{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const DesktopNav = () => {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
      {navigationConfig.mainNav.map((item) => {
        if (!item.children) {
          return (
            <Link
              key={item.href}
              href={item.href!}
              className={cn(
                "relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105",
                pathname === item.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.title}
              {pathname === item.href && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
              )}
            </Link>
          )
        }

        return (
          <DropdownNavItem
            key={item.title}
            item={item}
            pathname={pathname}
          />
        )
      })}
    </nav>
  )
}

const DropdownNavItem = ({
  item,
  pathname,
}: {
  item: any
  pathname: string
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const isActive = item.children?.some((child: any) => pathname === child.href)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105",
          isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
        )}
      >
        <span>{item.title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 rounded-xl border border-border/50 bg-popover/95 backdrop-blur-md p-2 text-popover-foreground shadow-lg z-50 animate-fade-in-up">
          {item.children?.map((child: any) => (
            <Link
              key={child.href}
              href={child.href!}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-4 py-3 text-sm transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02]",
                pathname === child.href && "bg-accent/50 text-accent-foreground font-medium"
              )}
              onClick={() => setIsOpen(false)}
            >
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {getIcon(child.title)}
              </div>
              <span>{child.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export const Navigation = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false)
  const [user, setUser] = React.useState<{ email: string; name: string } | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  // 检查是否已登录
  React.useEffect(() => {
    const storedUser = localStorage.getItem('geo_user')
    const isAuthenticated = localStorage.getItem('isAuthenticated')

    if (storedUser && isAuthenticated === 'true') {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error('Failed to parse stored user:', error)
      }
    }
  }, [])

  const handleLogin = () => {
    setIsLoginModalOpen(true)
  }

  const handleLogout = () => {
    setUser(null)
    // 使用Google OAuth服务登出
    googleOAuthService().signOut()
  }

  const handleLoginSuccess = (userData: { email: string; name: string }) => {
    setUser(userData)
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="h-10 w-10 rounded-xl bg-gradient-supabase shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Layers className="h-6 w-6 text-white relative z-10" />
                </div>
                <span className="hidden font-bold text-xl sm:inline-block text-foreground group-hover:text-primary transition-colors duration-300">
                  GEO Institute
                </span>
              </Link>

              <DesktopNav />
            </div>

            <div className="flex items-center space-x-4">
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary" />
              ) : user ? (
                <div className="flex items-center space-x-3">
                  <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-all duration-300">
                    <User className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">{user.email}</span>
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleLogout} className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    退出
                  </Button>
                </div>
              ) : (
                <Button
                  size="sm"
                  onClick={handleLogin}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <User className="h-4 w-4 mr-2" />
                  登录
                </Button>
              )}
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      <LoginModalSimple
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  )
}