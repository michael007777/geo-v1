import * as React from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  gradient?: "primary" | "secondary" | "custom"
  colors?: string[]
}

const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, children, gradient = "primary", colors, ...props }, ref) => {
    const gradientClass = React.useMemo(() => {
      if (gradient === "custom" && colors) {
        return `bg-gradient-to-r from-${colors[0]} to-${colors[1]}`
      }
      switch (gradient) {
        case "secondary":
          return "bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600"
        default:
          return "bg-gradient-supabase"
      }
    }, [gradient, colors])

    return (
      <span
        ref={ref}
        className={cn(
          `${gradientClass} bg-clip-text text-transparent`,
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)
GradientText.displayName = "GradientText"

export { GradientText }