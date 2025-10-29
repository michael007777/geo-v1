export interface NavigationItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: string
  label?: string
  description?: string
  children?: NavigationItem[]
}

export interface MainNavItem extends NavigationItem {}

export interface SidebarNavItem extends NavigationItem {}

export interface Doc {
  title: string
  description?: string
  content: string
  slug: string
  lastModified: string
  authors: string[]
  tags: string[]
  category: string
  readingTime: string
  featured?: boolean
}

export interface CaseStudy {
  id: string
  title: string
  description: string
  category: string
  context: string
  method: string
  result: string
  keyTakeaway: string
  promptUsed: string
  metrics?: {
    improvement: string
    before: string
    after: string
  }
  author: string
  publishedAt: string
  featured: boolean
  tags: string[]
}

export interface Tool {
  id: string
  name: string
  description: string
  category: string
  url: string
  features: string[]
  pricing: 'free' | 'freemium' | 'paid'
  rating: number
  tags: string[]
  lastVerified: string
}

export interface PromptTemplate {
  id: string
  title: string
  description: string
  category: string
  template: string
  variables: PromptVariable[]
  examples: PromptExample[]
  tags: string[]
  author: string
  createdAt: string
}

export interface PromptVariable {
  name: string
  description: string
  type: 'text' | 'number' | 'boolean' | 'select'
  options?: string[]
  required: boolean
}

export interface PromptExample {
  input: Record<string, any>
  output: string
  notes?: string
}

export interface Metadata {
  title?: string
  description?: string
  keywords?: string[]
  authors?: string[]
  openGraph?: {
    title?: string
    description?: string
    type?: string
    locale?: string
    url?: string
    siteName?: string
    images?: {
      url: string
      width?: number
      height?: number
      alt?: string
    }[]
  }
  twitter?: {
    card?: 'summary' | 'summary_large_image'
    title?: string
    description?: string
    images?: string[]
    creator?: string
  }
  robots?: {
    index?: boolean
    follow?: boolean
    googleBot?: {
      index?: boolean
      follow?: boolean
      noimageindex?: boolean
      'max-video-preview'?: number
      'max-image-preview'?: 'large' | 'standard' | 'none'
      'max-snippet'?: number
    }
  }
  verification?: {
    google?: string
    yandex?: string
    yahoo?: string
  }
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    email: string
    github: string
    twitter: string
  }
}