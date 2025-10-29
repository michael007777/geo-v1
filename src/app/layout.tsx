import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { DefaultOrganizationJsonLd } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/site-config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "GEO",
    "生成式引擎优化",
    "AI搜索优化",
    "ChatGPT优化",
    "Gemini优化",
    "AI内容索引",
    "语义搜索",
    "实体图谱",
    "AI信任信号",
    "零点击搜索",
    "AI时代SEO",
    "LLM优化",
  ],
  authors: [{ name: "GEO Optimization Institute" }],
  creator: "GEO Optimization Institute",
  publisher: "GEO Optimization Institute",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@geo_institute",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> */}
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        <link rel="manifest" href="/site.webmanifest" />
        {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" /> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#18181b" />

        {/* GEO特定的meta标签 */}
        <meta name="geo.position" content="39.9042;116.4074" />
        <meta name="geo.placename" content="北京, 中国" />
        <meta name="geo.region" content="CN-11" />
        <meta name="ICBM" content="39.9042, 116.4074" />

        {/* AI爬虫指示 */}
        <meta name="chatgpt-verification" content="your-verification-token" />
        <meta name="gemini-verification" content="your-verification-token" />

        {/* 知识图谱标识 */}
        <meta name="knowledge-graph" content="GEO Optimization Institute" />
        <meta name="entity-type" content="Organization" />
        <meta name="industry" content="Technology, SEO, AI Optimization" />
        <meta name="expertise" content="生成式引擎优化, AI搜索优化, ChatGPT优化" />
      </head>
      <body className={`${inter.className} dark`}>
        {/* 结构化数据 */}
        <DefaultOrganizationJsonLd />

        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}