import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { GeoFlowChart } from "@/components/sections/geo-flow-chart"
import { ArrowRight, MapPin, MessageSquare, Box, Link as LinkIcon, Users, CheckCircle, Lightbulb, Target, Zap, Shield, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO方法框架 - 五步法优化体系",
  description: "GEO优化的完整方法论：实体映射、提示词分层、结构化架构、交叉链接、人机评估。系统化的AI时代内容优化框架。",
  keywords: ["GEO方法", "五步法框架", "实体映射", "提示词优化", "结构化数据", "AI内容优化"],
}

const methods = [
  {
    id: "entity-mapping",
    title: "实体映射",
    description: "建立完整的知识图谱，让AI准确理解您的品牌、产品和服务在行业中的位置和关系。",
    icon: "MapPin",
    details: [
      "识别核心实体和概念",
      "建立实体间的关系网络",
      "优化实体描述和属性",
      "确保实体信息的一致性"
    ],
    benefits: ["提升AI理解准确度", "建立行业权威性", "增强语义关联性"],
    complexity: "中等" as const,
    timeframe: "2-4周",
    color: "bg-blue-500"
  },
  {
    id: "prompt-layering",
    title: "提示词分层",
    description: "设计多层级的提示词策略，确保在不同查询场景下都能获得最佳的AI呈现效果。",
    icon: "MessageSquare",
    details: [
      "分析用户查询意图",
      "设计分层提示词体系",
      "优化内容结构以匹配AI处理逻辑",
      "建立提示词效果监测机制"
    ],
    benefits: ["提高AI引用率", "改善呈现质量", "增强查询覆盖面"],
    complexity: "高" as const,
    timeframe: "3-6周",
    color: "bg-green-500"
  },
  {
    id: "schema-structuring",
    title: "结构化架构",
    description: "优化Schema标记和结构化数据，提升AI对内容的理解和索引效率。",
    icon: "Box",
    details: [
      "实施完整的Schema.org标记",
      "优化页面结构和层次",
      "建立内容分类体系",
      "确保数据格式标准化"
    ],
    benefits: ["提升索引效率", "改善内容解析", "增强技术SEO"],
    complexity: "中等" as const,
    timeframe: "1-3周",
    color: "bg-purple-500"
  },
  {
    id: "cross-linking",
    title: "交叉链接",
    description: "构建权威的内外链接网络，增强品牌在AI知识图谱中的可信度和权威性。",
    icon: "LinkIcon",
    details: [
      "建立内部内容关联网络",
      "获取高质量外部链接",
      "优化链接锚文本和上下文",
      "建立链接权威性传递路径"
    ],
    benefits: ["提升权威性", "增强信任度", "改善内容发现"],
    complexity: "中等" as const,
    timeframe: "4-8周",
    color: "bg-orange-500"
  },
  {
    id: "human-ai-evaluation",
    title: "人机评估",
    description: "结合人类专业判断和AI数据分析，持续优化内容策略和执行方案。",
    icon: "Users",
    details: [
      "建立效果监测指标体系",
      "实施AI输出质量评估",
      "收集用户反馈和行为数据",
      "持续优化策略和执行"
    ],
    benefits: ["确保优化效果", "快速适应变化", "持续改进质量"],
    complexity: "高" as const,
    timeframe: "持续进行",
    color: "bg-red-500"
  }
]

export default function MethodsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-grid-primary/5 [background-image:radial-gradient(circle_at_1px_1px,rgb(var(--primary)_/_0.1)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 border-primary/30 text-primary-foreground backdrop-blur-sm">GEO方法论</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-foreground">
              GEO优化
              <GradientText>五步法框架</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              基于深度研究和实践总结的系统化方法论，帮助企业在AI时代建立持续的竞争优势和权威性。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <Link href="/contact">
                  预约方法咨询
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/cases">查看实施案例</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值展示 */}
      <Section>
        <SectionContainer>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-orange-500/10 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-yellow-500/30">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
                    <Lightbulb className="h-8 w-8 text-yellow-50" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">系统化设计</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    完整的实施体系，确保优化效果的全面性
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-sky-500/10 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-blue-500/30">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    <Target className="h-8 w-8 text-blue-50" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">目标导向</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    明确的KPI指标，让优化效果可量化追踪
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-rose-500/10 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-orange-500/30">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                    <Zap className="h-8 w-8 text-orange-50" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">快速见效</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    分阶段实施，优先处理高价值优化项目
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-green-500/20 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-green-500/30">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                    <Shield className="h-8 w-8 text-green-50" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">持续优化</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    适应性框架，确保长期稳定的优化效果
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 流程图展示 */}
      <Section>
        <SectionContainer className="px-4 sm:px-6 lg:px-8">
          <GeoFlowChart steps={methods} />
        </SectionContainer>
      </Section>

      {/* 框架优势 */}
      <Section>
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader>
              <SectionTitle>
                框架优势
              </SectionTitle>
              <SectionSubtitle>
                为什么选择GEO五步法框架
              </SectionSubtitle>
            </SectionHeader>

            <Card className="bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10 backdrop-blur-sm border-blue-400/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-card/60 hover:bg-card/80 transition-all duration-200 hover:shadow-md border border-border/50">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                        <CheckCircle className="h-6 w-6 text-blue-50" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-foreground">系统性</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          涵盖从基础架构到持续优化的完整流程，确保不遗漏关键环节
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-card/60 hover:bg-card/80 transition-all duration-200 hover:shadow-md border border-border/50">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                        <CheckCircle className="h-6 w-6 text-green-50" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-foreground">渐进性</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          各步骤相互支撑，可根据实际情况逐步实施和调整
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-card/60 hover:bg-card/80 transition-all duration-200 hover:shadow-md border border-border/50">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                        <CheckCircle className="h-6 w-6 text-purple-50" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-foreground">可测量</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          每个步骤都有明确的指标和评估标准，便于效果追踪
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-card/60 hover:bg-card/80 transition-all duration-200 hover:shadow-md border border-border/50">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                        <CheckCircle className="h-6 w-6 text-orange-50" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-foreground">适应性</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          能够适应不同行业、规模和业务需求的企业
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

  
      {/* 实施指南 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader>
              <SectionTitle>
                实施指南
              </SectionTitle>
              <SectionSubtitle>
                标准化的实施路径，确保项目顺利进行和预期效果达成
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-teal-500/15 backdrop-blur-sm border-blue-400/25 shadow-lg hover:shadow-xl hover:border-blue-400/35 transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center text-foreground">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mr-3 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                      <TrendingUp className="h-5 w-5 text-blue-50" />
                    </div>
                    实施阶段
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-card/70 hover:bg-card/90 transition-all duration-200 group border border-border/50 hover:shadow-md">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white text-sm flex items-center justify-center font-bold mt-0.5 shadow-lg group-hover:scale-110 transition-transform hover:shadow-blue-500/25">1</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-foreground">评估诊断</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">全面评估当前AI可见性和内容状况</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-card/70 hover:bg-card/90 transition-all duration-200 group border border-border/50 hover:shadow-md">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 text-white text-sm flex items-center justify-center font-bold mt-0.5 shadow-lg group-hover:scale-110 transition-transform hover:shadow-cyan-500/25">2</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-foreground">方案制定</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">根据五步法框架制定实施计划</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-card/70 hover:bg-card/90 transition-all duration-200 group border border-border/50 hover:shadow-md">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white text-sm flex items-center justify-center font-bold mt-0.5 shadow-lg group-hover:scale-110 transition-transform hover:shadow-teal-500/25">3</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-foreground">实施执行</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">按计划逐步实施优化措施</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-card/70 hover:bg-card/90 transition-all duration-200 group border border-border/50 hover:shadow-md">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white text-sm flex items-center justify-center font-bold mt-0.5 shadow-lg group-hover:scale-110 transition-transform hover:shadow-blue-600/25">4</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-foreground">监测优化</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">持续监测效果并优化策略</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/15 via-emerald-500/10 to-teal-500/15 backdrop-blur-sm border-green-400/25 shadow-lg hover:shadow-xl hover:border-green-400/35 transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center text-foreground">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-3 shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                      <Target className="h-5 w-5 text-green-50" />
                    </div>
                    成功关键
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-card/70 hover:bg-card/90 transition-all duration-200 group border border-border/50 hover:shadow-md">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform hover:shadow-green-500/25">
                      <CheckCircle className="h-6 w-6 text-green-50" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-foreground">明确目标</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">设定清晰可量化的优化目标</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-card/70 hover:bg-card/90 transition-all duration-200 group border border-border/50 hover:shadow-md">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform hover:shadow-emerald-500/25">
                      <CheckCircle className="h-6 w-6 text-emerald-50" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-foreground">循序渐进</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">按步骤顺序实施，确保基础稳固</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-card/70 hover:bg-card/90 transition-all duration-200 group border border-border/50 hover:shadow-md">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform hover:shadow-teal-500/25">
                      <CheckCircle className="h-6 w-6 text-teal-50" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-foreground">持续监测</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">建立效果监测和反馈机制</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-card/70 hover:bg-card/90 transition-all duration-200 group border border-border/50 hover:shadow-md">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform hover:shadow-blue-500/25">
                      <CheckCircle className="h-6 w-6 text-blue-50" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-foreground">专业支持</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">寻求专业团队的技术支持</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary/15 via-background to-secondary/15">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-grid-primary/5 [background-image:radial-gradient(circle_at_1px_1px,rgb(var(--primary)_/_0.1)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              准备实施GEO五步法？
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              我们的专家团队将为您提供完整的实施支持，确保获得最佳效果。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300">
                <Link href="/contact">
                  预约免费评估
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                <Link href="/cases">查看实施案例</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}