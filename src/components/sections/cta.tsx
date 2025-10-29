import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, Calendar } from "lucide-react"

export const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6">开始行动</Badge>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            准备好在AI时代
            <br />
            建立您的权威了吗？
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI搜索已经成为新的标准。不要等待竞争对手抢占先机。
            让我们一起制定您的GEO优化策略，成为AI推荐的首选来源。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="xl" className="gradient group" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                预约咨询
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="/about">
                <Calendar className="mr-2 h-5 w-5" />
                了解GEO方法
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">免费评估</h3>
              <p className="text-sm text-muted-foreground">
                专业团队评估您当前的AI可见性
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">定制方案</h3>
              <p className="text-sm text-muted-foreground">
                根据业务需求制定专属GEO策略
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">持续优化</h3>
              <p className="text-sm text-muted-foreground">
                监测效果并持续改进优化策略
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}