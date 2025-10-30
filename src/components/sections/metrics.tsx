import { Badge } from "@/components/ui/badge"
import { TrendingUp, Target, Shield, BarChart3 } from "lucide-react"

const metrics = [
  {
    value: "300%",
    label: "AI引用率提升",
    description: "通过GEO优化，内容在AI生成结果中的引用率平均提升3倍",
    icon: TrendingUp,
    trend: "+45%"
  },
  {
    value: "85%",
    label: "零点击搜索捕获",
    description: "在零点击搜索场景中获得直接回答展示",
    icon: Target,
    trend: "+62%"
  },
  {
    value: "24/7",
    label: "AI可见性保障",
    description: "全天候在各大AI平台保持高度可见性和权威性",
    icon: Shield,
    trend: "稳定"
  }
]

export const MetricsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">真实数据</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            GEO优化带来的
            <span className="text-primary">显著效果</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            基于我们对数百家企业的GEO优化实践，以下是客户平均获得的改进效果
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <div
                key={metric.label}
                className="group relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

                <div className="relative bg-card/80 backdrop-blur-md rounded-3xl p-8 border border-border/20 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  {/* 顶部指标 */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    {metric.trend !== "稳定" && (
                      <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">
                        {metric.trend}
                      </Badge>
                    )}
                  </div>

                  {/* 主要数据 */}
                  <div className="mb-4">
                    <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                      {metric.value}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {metric.label}
                    </h3>
                  </div>

                  {/* 描述 */}
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {metric.description}
                  </p>

                  {/* 装饰性元素 */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            )
          })}
        </div>

        {/* 底部说明 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-6 py-3">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              基于过去12个月优化客户数据的统计分析
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}