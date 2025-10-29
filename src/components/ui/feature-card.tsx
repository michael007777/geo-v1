import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon
  title: string
  description: string
  badge?: string
  href?: string
  gradient?: boolean
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, icon: Icon, title, description, badge, href, gradient = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative hover-lift",
          href && "cursor-pointer",
          className
        )}
        {...props}
      >
        {href ? (
          <a href={href} className="block h-full">
            <Card className={cn(
              "h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative",
              gradient
                ? "bg-gradient-supabase-soft text-white hover:scale-[1.03] animate-gradient-shift"
                : "bg-card hover:border-primary/30 hover:scale-[1.02]"
            )}>
              {/* 背景装饰 */}
              {gradient && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}

              <CardHeader className="relative z-10">
                {Icon && (
                  <div className={cn(
                    "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                    gradient
                      ? "bg-white/20 shadow-lg"
                      : "bg-primary/10 group-hover:bg-primary/20 shadow-md"
                  )}>
                    <Icon className={cn(
                      "h-7 w-7 transition-colors duration-300",
                      gradient ? "text-white" : "text-primary group-hover:text-primary/80"
                    )} />
                  </div>
                )}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <CardTitle className={cn(
                    "text-xl font-bold transition-colors duration-300 group-hover:text-primary",
                    gradient && "text-white"
                  )}>
                    {title}
                  </CardTitle>
                  {badge && (
                    <Badge className={cn(
                      "text-xs font-semibold px-3 py-1 rounded-full animate-bounce-in",
                      gradient
                        ? "bg-white/20 text-white hover:bg-white/30"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    )}>
                      {badge}
                    </Badge>
                  )}
                </div>
                <CardDescription className={cn(
                  "text-base leading-relaxed transition-colors duration-300",
                  gradient
                    ? "text-white/90"
                    : "text-muted-foreground group-hover:text-foreground"
                )}>
                  {description}
                </CardDescription>
              </CardHeader>

              {/* 悬停效果指示器 */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Card>
          </a>
        ) : (
          <Card className={cn(
            "h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative",
            gradient
              ? "bg-gradient-supabase-soft text-white hover:scale-[1.03] animate-gradient-shift"
              : "bg-card hover:border-primary/30 hover:scale-[1.02]"
          )}>
            {/* 背景装饰 */}
            {gradient && (
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}

            <CardHeader className="relative z-10">
              {Icon && (
                <div className={cn(
                  "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                  gradient
                    ? "bg-white/20 shadow-lg"
                    : "bg-primary/10 group-hover:bg-primary/20 shadow-md"
                )}>
                  <Icon className={cn(
                    "h-7 w-7 transition-colors duration-300",
                    gradient ? "text-white" : "text-primary group-hover:text-primary/80"
                  )} />
                </div>
              )}
              <div className="flex items-start justify-between gap-3 mb-4">
                <CardTitle className={cn(
                  "text-xl font-bold transition-colors duration-300 group-hover:text-primary",
                  gradient && "text-white"
                )}>
                  {title}
                </CardTitle>
                {badge && (
                  <Badge className={cn(
                    "text-xs font-semibold px-3 py-1 rounded-full animate-bounce-in",
                    gradient
                      ? "bg-white/20 text-white hover:bg-white/30"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                  )}>
                    {badge}
                  </Badge>
                )}
              </div>
              <CardDescription className={cn(
                "text-base leading-relaxed transition-colors duration-300",
                gradient
                  ? "text-white/90"
                  : "text-muted-foreground group-hover:text-foreground"
              )}>
                {description}
              </CardDescription>
            </CardHeader>

            {/* 悬停效果指示器 */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </Card>
        )}
      </div>
    )
  }
)
FeatureCard.displayName = "FeatureCard"

export { FeatureCard }