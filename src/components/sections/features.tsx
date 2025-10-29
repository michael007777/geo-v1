import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Brain,
  Target,
  Database,
  Link2,
  Users,
  FileText
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "实体映射",
    description: "建立完整的知识图谱，让AI准确理解您的品牌、产品和服务在行业中的位置和关系。",
    badge: "GEO核心",
  },
  {
    icon: Target,
    title: "提示词分层",
    description: "设计多层级的提示词策略，确保在不同查询场景下都能获得最佳的AI呈现效果。",
    badge: "高级策略",
  },
  {
    icon: Database,
    title: "结构化架构",
    description: "优化Schema标记和结构化数据，提升AI对内容的理解和索引效率。",
    badge: "技术基础",
  },
  {
    icon: Link2,
    title: "交叉链接",
    description: "构建权威的内外链接网络，增强品牌在AI知识图谱中的可信度和权威性。",
    badge: "权威建设",
  },
  {
    icon: Users,
    title: "人机评估",
    description: "结合人类专业判断和AI数据分析，持续优化内容策略和执行方案。",
    badge: "持续优化",
  },
  {
    icon: FileText,
    title: "内容适配",
    description: "针对AI对话特性优化内容结构，提升在生成式搜索中的引用概率。",
    badge: "内容策略",
  },
]

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">GEO五步法框架</Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            系统化的AI时代
            <br />
            内容优化方法论
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            基于深度研究和实践总结，我们建立了完整的GEO优化体系，
            帮助企业在AI搜索新时代建立持续的竞争优势。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={feature.title} className="bg-card/50 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}