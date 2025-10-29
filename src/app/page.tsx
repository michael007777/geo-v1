import { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { CaseStudiesSection } from "@/components/sections/case-studies"
import { CTASection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "GEO Optimization Institute - 让AI像人类一样理解您的内容",
  description: "专业的生成式引擎优化(GEO)服务平台。我们帮助企业在ChatGPT、Gemini、Perplexity等AI平台建立权威性，成为AI推荐的首选来源。",
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
    "AI内容营销",
    "对话式搜索",
    "AI生成内容"
  ],
  openGraph: {
    title: "GEO Optimization Institute - AI时代的搜索引擎优化",
    description: "专业的生成式引擎优化(GEO)服务平台，让AI像人类一样理解您的内容",
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "GEO Optimization Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Optimization Institute - AI时代的搜索引擎优化",
    description: "专业的生成式引擎优化(GEO)服务平台，让AI像人类一样理解您的内容",
    images: ["/og-home.jpg"],
  },
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <CaseStudiesSection />
      <CTASection />
    </div>
  )
}