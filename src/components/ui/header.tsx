import * as React from "react"

import { cn } from "@/lib/utils"

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}
    {...props}
  />
))
Header.displayName = "Header"

const HeaderContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "container flex h-14 items-center mx-auto px-4 sm:px-6 lg:px-8",
      className
    )}
    {...props}
  />
))
HeaderContent.displayName = "HeaderContent"

const HeaderTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
HeaderTitle.displayName = "HeaderTitle"

const HeaderDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
HeaderDescription.displayName = "HeaderDescription"

export { Header, HeaderContent, HeaderTitle, HeaderDescription }