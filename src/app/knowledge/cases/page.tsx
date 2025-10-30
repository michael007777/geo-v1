import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, Building, ShoppingCart, PenTool, Users, TrendingUp, Globe, Award, CheckCircle, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO案例研究 - 生成式引擎优化成功案例",
  description: "详细分析国内外GEO实施成功案例，学习最佳实践和经验教训。",
  keywords: ["GEO案例", "AI搜索优化案例", "生成式引擎优化实例", "GEO成功故事"],
}

const caseStudies = [
  {
    id: "b2b-tech-company",
    title: "B2B科技公司GEO转型",
    company: "TechCorp Solutions",
    industry: "B2B技术服务",
    category: "B2B企业",
    difficulty: "中级",
    duration: "6个月实施期",
    image: "/api/placeholder/400/250",
    tags: ["技术白皮书", "思想领导力", "行业权威"],
    challenge: "传统SEO流量下降30%，客户获取成本上升，需要寻找新的品牌曝光渠道。",
    solution: [
      "发布深度技术白皮书和研究报告",
      "建立公司技术专家的个人权威形象",
      "创建结构化的产品对比和解决方案指南",
      "在专业平台和媒体建立品牌存在感"
    ],
    implementation: [
      "阶段1：核心内容创作（2个月）",
      "阶段2：结构化数据优化（1个月）",
      "阶段3：权威平台建设（2个月）",
      "阶段4：效果监测与优化（1个月）"
    ],
    results: [
      "AI搜索中品牌提及增加150%",
      "通过AI了解品牌的潜在客户增长80%",
      "网站间接流量提升25%",
      "客户咨询质量显著提高"
    ],
    lessons: [
      "深度内容比广度覆盖更重要",
      "建立个人专家形象能有效提升品牌权威",
      "结构化数据对AI理解至关重要"
    ],
    quotes: [
      {
        text: "GEO帮助我们在AI时代重新建立了品牌权威，客户质量明显提升。",
        author: "张总监",
        role: "市场总监"
      }
    ]
  },
  {
    id: "ecommerce-fashion",
    title: "时尚电商GEO优化",
    company: "StyleHub Fashion",
    industry: "时尚电商",
    category: "电商平台",
    difficulty: "高级",
    duration: "4个月实施期",
    image: "/api/placeholder/400/250",
    tags: ["产品优化", "品牌故事", "用户生成内容"],
    challenge: "AI购物助手兴起，直接产品搜索下降，需要让AI推荐我们的产品。",
    solution: [
      "优化产品页面结构和详细描述",
      "创建时尚趋势分析和搭配指南",
      "建立品牌故事和设计理念内容",
      "鼓励用户生成高质量评价和内容"
    ],
    implementation: [
      "阶段1：产品信息结构化（1个月）",
      "阶段2：时尚内容创作（1.5个月）",
      "阶段3：用户激励体系（1个月）",
      "阶段4：AI推荐优化（0.5个月）"
    ],
    results: [
      "AI购物推荐中产品出现率提升200%",
      "品牌相关AI回答正面提及率提升85%",
      "通过AI渠道的间接销售增长45%",
      "品牌搜索量增长60%"
    ],
    lessons: [
      "产品信息的准确性和完整性至关重要",
      "品牌故事能显著提升AI推荐偏好",
      "用户生成内容是重要的信任信号"
    ],
    quotes: [
      {
        text: "现在当用户向AI询问时尚建议时，我们的品牌经常被推荐，这改变了游戏规则。",
        author: "李经理",
        role: "电商运营总监"
      }
    ]
  },
  {
    id: "content-creator",
    title: "内容创作者个人品牌",
    company: "王营销专家",
    industry: "内容创作/咨询",
    category: "内容创作者",
    difficulty: "初级",
    duration: "3个月实施期",
    image: "/api/placeholder/400/250",
    tags: ["个人品牌", "专业权威", "多平台布局"],
    challenge: "传统内容平台流量下降，需要在新渠道建立专业权威和个人品牌。",
    solution: [
      "创建营销领域的深度分析内容",
      "在多个专业平台建立统一形象",
      "发布原创研究和行业洞察",
      "建立专业的知识体系和框架"
    ],
    implementation: [
      "阶段1：个人定位梳理（0.5个月）",
      "阶段2：核心内容创作（1.5个月）",
      "阶段3：多平台布局（1个月）",
      "阶段4：互动和影响力建设（1个月）"
    ],
    results: [
      "AI问答中被引用为专家频率增长300%",
      "个人品牌搜索量增长150%",
      "咨询客户数量翻倍",
      "行业影响力显著提升"
    ],
    lessons: [
      "专业深度比广泛覆盖更有效",
      "一致性是建立个人品牌的关键",
      "原创研究是建立权威的最佳方式"
    ],
    quotes: [
      {
        text: "GEO让我从众多营销专家中脱颖而出，现在AI经常推荐我的观点和方法。",
        author: "王老师",
        role: "营销策略顾问"
      }
    ]
  },
  {
    id: "healthcare-provider",
    title: "医疗机构知识权威",
    company: "康健医疗集团",
    industry: "医疗健康",
    category: "专业服务",
    difficulty: "高级",
    duration: "8个月实施期",
    image: "/api/placeholder/400/250",
    tags: ["医疗权威", "患者教育", "专业知识"],
    challenge: "在线医疗信息混乱，需要建立可信赖的专业医疗权威形象。",
    solution: [
      "创建权威的医疗健康知识库",
      "发布医生专家的专业见解",
      "建立疾病预防和治疗方案指南",
      "与权威医疗机构合作背书"
    ],
    implementation: [
      "阶段1：医疗内容审核体系建立（2个月）",
      "阶段2：专业知识库建设（3个月）",
      "阶段3：权威合作推进（2个月）",
      "阶段4：患者教育和传播（1个月）"
    ],
    results: [
      "医疗相关AI问答中被引用率提升180%",
      "患者对医院的信任度显著提高",
      "在线问诊咨询量增长120%",
      "成为多个AI平台的推荐医疗信息源"
    ],
    lessons: [
      "医疗内容的准确性和权威性是生命线",
      "专业医生的个人形象很重要",
      "与其他权威机构的合作能快速建立信任"
    ],
    quotes: [
      {
        text: "通过GEO，我们成为了AI时代可信赖的医疗信息来源，这对患者和医院都有巨大价值。",
        author: "陈院长",
        role: "医疗集团院长"
      }
    ]
  }
]

const insights = [
  {
    title: "成功要素",
    description: "从成功案例中总结的关键因素",
    icon: CheckCircle,
    points: [
      "内容质量和准确性是基础",
      "权威性需要长期持续建设",
      "结构化数据对AI理解至关重要",
      "多平台一致性强化品牌形象"
    ]
  },
  {
    title: "实施挑战",
    description: "常见问题和解决方法",
    icon: TrendingUp,
    points: [
      "效果监测需要新方法和工具",
      "ROI计算复杂，需要长期视角",
      "内容创作需要专业深度",
      "技术实施需要专业知识"
    ]
  },
  {
    title: "行业差异",
    description: "不同行业的GEO策略重点",
    icon: Building,
    points: [
      "B2B：重视专业深度和思想领导力",
      "电商：关注产品信息和用户体验",
      "服务：建立个人专家和企业权威",
      "医疗：强调准确性和可信度"
    ]
  }
]

export default function CasesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">知识中心</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <GradientText>GEO案例研究</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              深入分析真实的GEO实施案例，学习成功的经验教训，
              为您的GEO策略制定提供实用的参考和指导。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#case-studies">
                  浏览案例
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/knowledge/methodology">学习方法论</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 案例分类 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader className="text-center">
              <SectionTitle>案例分类</SectionTitle>
              <SectionSubtitle>
                按行业和应用场景分类的成功案例
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Building, label: "B2B企业", count: 1 },
                { icon: ShoppingCart, label: "电商平台", count: 1 },
                { icon: PenTool, label: "内容创作者", count: 1 },
                { icon: Users, label: "专业服务", count: 1 }
              ].map((category, index) => (
                <Card key={index} className="text-center hover-lift cursor-pointer">
                  <CardContent className="p-4">
                    <category.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">{category.label}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} 个案例</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 案例详情 */}
      <Section id="case-studies">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>详细案例分析</SectionTitle>
            <SectionSubtitle>
              深入了解每个案例的背景、实施过程和成果
            </SectionSubtitle>
          </SectionHeader>

          <div className="space-y-16 max-w-6xl mx-auto">
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="scroll-mt-24">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="outline">{caseStudy.category}</Badge>
                          <Badge variant="secondary">{caseStudy.difficulty}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Award className="h-4 w-4 mr-1" />
                            {caseStudy.duration}
                          </span>
                        </div>
                        <CardTitle className="text-2xl mb-2">{caseStudy.title}</CardTitle>
                        <CardDescription className="text-base">
                          <span className="font-semibold">{caseStudy.company}</span> • {caseStudy.industry}
                        </CardDescription>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {caseStudy.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* 左侧：挑战和解决方案 */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
                            面临挑战
                          </h3>
                          <p className="text-muted-foreground">{caseStudy.challenge}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                            解决方案
                          </h3>
                          <ul className="space-y-2">
                            {caseStudy.solution.map((item, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">实施阶段</h3>
                          <ul className="space-y-2">
                            {caseStudy.implementation.map((item, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0">
                                  {index + 1}
                                </div>
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* 右侧：结果和经验 */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center text-green-600">
                            <Award className="h-5 w-5 mr-2" />
                            实施成果
                          </h3>
                          <ul className="space-y-2">
                            {caseStudy.results.map((result, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center text-blue-600">
                            <Globe className="h-5 w-5 mr-2" />
                            关键经验
                          </h3>
                          <ul className="space-y-2">
                            {caseStudy.lessons.map((lesson, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{lesson}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 客户评价 */}
                        {caseStudy.quotes.length > 0 && (
                          <div className="bg-muted/30 rounded-lg p-4">
                            <blockquote className="text-sm italic text-muted-foreground">
                              "{caseStudy.quotes[0].text}"
                            </blockquote>
                            <cite className="text-xs font-semibold mt-2 block">
                              — {caseStudy.quotes[0].author}, {caseStudy.quotes[0].role}
                            </cite>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </SectionContainer>
      </Section>

      {/* 核心洞察 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>核心洞察</SectionTitle>
            <SectionSubtitle>
              从成功案例中总结的关键经验和规律
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {insights.map((insight) => (
              <Card key={insight.title}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <insight.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{insight.title}</CardTitle>
                  </div>
                  <CardDescription>{insight.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {insight.points.map((point, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContainer>
      </Section>

      {/* 行业对比 */}
      <Section>
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader>
              <SectionTitle>行业GEO策略对比</SectionTitle>
              <SectionSubtitle>
                不同行业的GEO实施重点和策略差异
              </SectionSubtitle>
            </SectionHeader>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">行业</th>
                    <th className="text-left p-4 font-semibold">核心策略</th>
                    <th className="text-left p-4 font-semibold">关键指标</th>
                    <th className="text-left p-4 font-semibold">实施难度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">B2B技术服务</td>
                    <td className="p-4">思想领导力、技术深度</td>
                    <td className="p-4">品牌权威、咨询质量</td>
                    <td className="p-4"><Badge variant="secondary">中级</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">电商平台</td>
                    <td className="p-4">产品信息、用户体验</td>
                    <td className="p-4">推荐频率、转化率</td>
                    <td className="p-4"><Badge variant="destructive">高级</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">内容创作</td>
                    <td className="p-4">个人品牌、专业深度</td>
                    <td className="p-4">引用率、影响力</td>
                    <td className="p-4"><Badge>初级</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-4">医疗健康</td>
                    <td className="p-4">准确性、权威性</td>
                    <td className="p-4">信任度、专业性</td>
                    <td className="p-4"><Badge variant="destructive">高级</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 行动号召 */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              准备开始您的GEO之旅？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              基于这些成功案例的经验，我们可以帮助您制定适合的GEO策略。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  获取定制方案
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tools">使用GEO工具</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}