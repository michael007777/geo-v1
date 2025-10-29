import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, MapPin, MessageSquare, Box, Link as LinkIcon, Users, CheckCircle } from "lucide-react"

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
    icon: MapPin,
    details: [
      "识别核心实体和概念",
      "建立实体间的关系网络",
      "优化实体描述和属性",
      "确保实体信息的一致性"
    ],
    benefits: ["提升AI理解准确度", "建立行业权威性", "增强语义关联性"],
    complexity: "中等",
    timeframe: "2-4周"
  },
  {
    id: "prompt-layering",
    title: "提示词分层",
    description: "设计多层级的提示词策略，确保在不同查询场景下都能获得最佳的AI呈现效果。",
    icon: MessageSquare,
    details: [
      "分析用户查询意图",
      "设计分层提示词体系",
      "优化内容结构以匹配AI处理逻辑",
      "建立提示词效果监测机制"
    ],
    benefits: ["提高AI引用率", "改善呈现质量", "增强查询覆盖面"],
    complexity: "高",
    timeframe: "3-6周"
  },
  {
    id: "schema-structuring",
    title: "结构化架构",
    description: "优化Schema标记和结构化数据，提升AI对内容的理解和索引效率。",
    icon: Box,
    details: [
      "实施完整的Schema.org标记",
      "优化页面结构和层次",
      "建立内容分类体系",
      "确保数据格式标准化"
    ],
    benefits: ["提升索引效率", "改善内容解析", "增强技术SEO"],
    complexity: "中等",
    timeframe: "1-3周"
  },
  {
    id: "cross-linking",
    title: "交叉链接",
    description: "构建权威的内外链接网络，增强品牌在AI知识图谱中的可信度和权威性。",
    icon: LinkIcon,
    details: [
      "建立内部内容关联网络",
      "获取高质量外部链接",
      "优化链接锚文本和上下文",
      "建立链接权威性传递路径"
    ],
    benefits: ["提升权威性", "增强信任度", "改善内容发现"],
    complexity: "中等",
    timeframe: "4-8周"
  },
  {
    id: "human-ai-evaluation",
    title: "人机评估",
    description: "结合人类专业判断和AI数据分析，持续优化内容策略和执行方案。",
    icon: Users,
    details: [
      "建立效果监测指标体系",
      "实施AI输出质量评估",
      "收集用户反馈和行为数据",
      "持续优化策略和执行"
    ],
    benefits: ["确保优化效果", "快速适应变化", "持续改进质量"],
    complexity: "高",
    timeframe: "持续进行"
  }
]

export default function MethodsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">GEO方法论</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              GEO优化
              <GradientText>五步法框架</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              基于深度研究和实践总结的系统化方法论，帮助企业在AI时代建立持续的竞争优势和权威性。
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                预约方法咨询
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Framework Overview */}
      <Section>
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader>
              <SectionTitle>
                框架概述
              </SectionTitle>
              <SectionSubtitle>
                系统化的五步法体系，确保GEO优化的全面性和有效性
              </SectionSubtitle>
            </SectionHeader>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">为什么选择五步法框架？</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      系统性
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      涵盖从基础架构到持续优化的完整流程，确保不遗漏关键环节
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      渐进性
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      各步骤相互支撑，可根据实际情况逐步实施和调整
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      可测量
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      每个步骤都有明确的指标和评估标准，便于效果追踪
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      适应性
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      能够适应不同行业、规模和业务需求的企业
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* Method Details */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>
              详细方法
              <br />
              步骤解析
            </SectionTitle>
            <SectionSubtitle>
              深入了解每个步骤的具体内容、实施要点和预期效果
            </SectionSubtitle>
          </SectionHeader>

          <div className="space-y-12">
            {methods.map((method, index) => (
              <Card key={method.id} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="outline">步骤 {index + 1}</Badge>
                        <Badge variant={method.complexity === "高" ? "destructive" : method.complexity === "中等" ? "secondary" : "default"}>
                          复杂度: {method.complexity}
                        </Badge>
                        <Badge variant="outline">预计: {method.timeframe}</Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">{method.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {method.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">具体内容</h4>
                    <ul className="space-y-2">
                      {method.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">预期收益</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {method.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContainer>
      </Section>

      {/* Implementation Process */}
      <Section>
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader>
              <SectionTitle>
                实施流程
              </SectionTitle>
              <SectionSubtitle>
                标准化的实施路径，确保项目顺利进行和预期效果达成
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <CardTitle className="text-lg">评估诊断</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    全面评估当前AI可见性和内容状况，制定个性化优化方案
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <CardTitle className="text-lg">方案制定</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    根据五步法框架制定详细的实施计划和优先级排序
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <CardTitle className="text-lg">实施执行</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    按照计划逐步实施各项优化措施，确保质量和进度
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <CardTitle className="text-lg">监测优化</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    持续监测效果，收集反馈，不断优化策略和执行
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              准备实施GEO五步法？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              我们的专家团队将为您提供完整的实施支持，确保获得最佳效果。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  预约免费评估
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
    </div>
  )
}