import * as React from "react"

import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
  children: React.ReactNode
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, id, children, ...props }, ref) => (
    <section
      ref={ref}
      id={id}
      className={cn("py-16 md:py-24 lg:py-32", className)}
      {...props}
    >
      {children}
    </section>
  )
)
Section.displayName = "Section"

const SectionContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("container mx-auto px-4 sm:px-6 lg:px-8", className)}
    {...props}
  />
))
SectionContainer.displayName = "SectionContainer"

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-center max-w-3xl mx-auto mb-12 md:mb-16",
      className
    )}
    {...props}
  />
))
SectionHeader.displayName = "SectionHeader"

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4",
      className
    )}
    {...props}
  />
))
SectionTitle.displayName = "SectionTitle"

const SectionSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto",
      className
    )}
    {...props}
  />
))
SectionSubtitle.displayName = "SectionSubtitle"

const SectionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-12", className)}
    {...props}
  />
))
SectionContent.displayName = "SectionContent"

export {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  SectionContent,
}