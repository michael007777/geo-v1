import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, Sparkles } from "lucide-react"

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
      {/* 简化背景 - 只保留一个主要渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/3" />
      <div className="absolute top-0 left-1/4 h-96 w-96 bg-gradient-supabase rounded-full blur-3xl opacity-6" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* 简化公告徽章 */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm mb-8 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-foreground font-medium">
              2025年AI搜索趋势：GEO成为新标准
            </span>
          </div>

          {/* 主标题 - 使用新的字体系统 */}
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            <span className="block mb-2">让AI像人类一样</span>
            <GradientText className="block">理解您的内容</GradientText>
          </h1>

          {/* 副标题 - 优化字重和大小 */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            生成式引擎优化(GEO)新纪元已经到来。我们帮助企业在ChatGPT、Gemini、Perplexity等AI平台建立权威性，
            <span className="text-foreground font-semibold">成为AI推荐的首选来源</span>。
          </p>

          {/* CTA按钮 - 简化样式 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="supabase group shadow-lg hover:shadow-xl">
              <Link href="/about">
                了解GEO优化
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 hover:bg-primary hover:text-primary-foreground transition-all">
              <Link href="/cases">
                查看案例
              </Link>
            </Button>
          </div>

          {/* 核心指标 - 简化设计 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">300%</div>
              <div className="text-sm text-muted-foreground">AI引用率提升</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">85%</div>
              <div className="text-sm text-muted-foreground">零点击搜索捕获</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">AI可见性保障</div>
            </div>
          </div>
        </div>

        {/* 简化的核心价值对比 */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">传统SEO</h3>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-muted-foreground">争取点击 → 链接排名 → 流量获取</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">GEO优化</h3>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">成为答案 → 影响输出 → 建立权威</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}