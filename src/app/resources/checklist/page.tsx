import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, CheckCircle, AlertTriangle, Download, Printer, Share2, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO优化清单 - 完整的检查表和评估工具",
  description: "提供全面的GEO优化检查清单，涵盖内容质量、技术实施、效果评估等各个方面。",
  keywords: ["GEO清单", "优化检查表", "SEO评估", "GEO实施指南", "质量评估"],
}

const checklistCategories = [
  {
    id: "content-quality",
    title: "内容质量检查",
    description: "确保内容符合AI优化标准的基础检查",
    icon: FileText,
    color: "blue",
    items: [
      {
        category: "基础要素",
        points: [
          { task: "标题清晰准确，反映核心内容", weight: 2, mandatory: true },
          { task: "开头直接回答用户核心问题", weight: 3, mandatory: true },
          { task: "内容结构逻辑清晰，层次分明", weight: 2, mandatory: true },
          { task: "信息准确，有可靠来源支撑", weight: 3, mandatory: true },
          { task: "语言自然流畅，避免关键词堆砌", weight: 2, mandatory: false }
        ]
      },
      {
        category: "结构优化",
        points: [
          { task: "使用合适的标题层级（H1-H6）", weight: 2, mandatory: true },
          { task: "重要概念和关键词适当加粗", weight: 1, mandatory: false },
          { task: "使用列表展示要点信息", weight: 1, mandatory: false },
          { task: "段落长度适中（2-4句话）", weight: 1, mandatory: false },
          { task: "包含总结性或结论性内容", weight: 2, mandatory: true }
        ]
      },
      {
        category: "权威信号",
        points: [
          { task: "作者信息清晰可信", weight: 2, mandatory: true },
          { task: "发布和更新时间明确", weight: 1, mandatory: false },
          { task: "引用权威来源和数据", weight: 2, mandatory: true },
          { task: "包含实际案例或例子", weight: 1, mandatory: false },
          { task: "专业术语使用准确", weight: 1, mandatory: false }
        ]
      }
    ]
  },
  {
    id: "technical-implementation",
    title: "技术实施检查",
    description: "结构化数据和技术要素的实施验证",
    icon: CheckCircle,
    color: "green",
    items: [
      {
        category: "Schema.org标记",
        points: [
          { task: "选择最合适的Schema类型", weight: 3, mandatory: true },
          { task: "所有必需属性已正确填写", weight: 3, mandatory: true },
          { task: "使用Google结构化数据测试工具验证通过", weight: 2, mandatory: true },
          { task: "Schema内容与页面内容一致", weight: 2, mandatory: true },
          { task: "无语法错误或格式问题", weight: 1, mandatory: false }
        ]
      },
      {
        category: "页面性能",
        points: [
          { task: "页面加载速度符合标准（<3秒）", weight: 2, mandatory: true },
          { task: "移动端适配良好，响应式设计", weight: 2, mandatory: true },
          { task: "图片优化，有合适的alt标签", weight: 1, mandatory: false },
          { task: "内部链接结构合理", weight: 1, mandatory: false },
          { task: "URL结构清晰简洁", weight: 1, mandatory: false }
        ]
      },
      {
        category: "元数据优化",
        points: [
          { task: "页面标题（title）优化合理", weight: 2, mandatory: true },
          { task: "元描述（description）准确吸引人", weight: 1, mandatory: false },
          { task: "合适的H1标签使用", weight: 2, mandatory: true },
          { task: "重要的meta标签完整", weight: 1, mandatory: false },
          { task: "社交媒体标签（OG标签）设置", weight: 1, mandatory: false }
        ]
      }
    ]
  },
  {
    id: "geo-effectiveness",
    title: "GEO效果评估",
    description: "评估GEO实施效果和优化空间的检查",
    icon: AlertTriangle,
    color: "orange",
    items: [
      {
        category: "AI可见性",
        points: [
          { task: "在相关AI查询中出现品牌提及", weight: 3, mandatory: false },
          { task: "AI回答引用内容准确正面", weight: 3, mandatory: false },
          { task: "品牌在AI搜索中的权威性提升", weight: 2, mandatory: false },
          { task: "用户通过AI了解品牌的比例增加", weight: 2, mandatory: false },
          { task: "AI生成的回答包含推荐意向", weight: 2, mandatory: false }
        ]
      },
      {
        category: "用户行为",
        points: [
          { task: "品牌搜索量有所增长", weight: 2, mandatory: false },
          { task: "直接访问流量质量提升", weight: 2, mandatory: false },
          { task: "用户停留时间和互动率增加", weight: 1, mandatory: false },
          { task: "转化率或咨询质量提升", weight: 2, mandatory: false },
          { task: "品牌知名度和信任度提高", weight: 1, mandatory: false }
        ]
      },
      {
        category: "持续优化",
        points: [
          { task: "定期监测AI搜索表现", weight: 2, mandatory: false },
          { task: "根据数据反馈调整内容策略", weight: 2, mandatory: false },
          { task: "持续更新和维护核心内容", weight: 2, mandatory: false },
          { task: "关注AI算法和趋势变化", weight: 1, mandatory: false },
          { task: "建立长期的GEO优化计划", weight: 1, mandatory: false }
        ]
      }
    ]
  }
]

const actionSteps = [
  {
    title: "快速检查",
    description: "30分钟内的基础GEO检查",
    duration: "30分钟",
    priority: "高",
    steps: [
      "检查页面标题和描述",
      "验证内容结构是否清晰",
      "测试Schema.org标记",
      "检查页面加载速度"
    ]
  },
  {
    title: "完整评估",
    description: "全面的GEO效果评估",
    duration: "2小时",
    priority: "中",
    steps: [
      "执行所有检查清单项目",
      "进行AI搜索测试",
      "分析竞争对手表现",
      "制定优化计划"
    ]
  },
  {
    title: "专业审计",
    description: "深度的专业GEO审计",
    duration: "1天",
    priority: "低",
    steps: [
      "全面内容和技术审计",
      "用户调研和反馈收集",
      "数据分析和趋势研究",
      "长期战略规划制定"
    ]
  }
]

export default function ChecklistPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">资源库</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <GradientText>GEO优化清单</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              系统化的GEO检查清单，涵盖内容质量、技术实施、效果评估等关键环节，
              确保您的GEO策略全面有效。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#checklists">
                  开始检查
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resources/templates">查看模板</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 使用指南 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader className="text-center">
              <SectionTitle>如何使用检查清单</SectionTitle>
              <SectionSubtitle>
                选择适合的检查深度和频率
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {actionSteps.map((step) => (
                <Card key={step.title} className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <Badge variant={step.priority === "高" ? "default" : step.priority === "中" ? "secondary" : "outline"}>
                        {step.priority}优先级
                      </Badge>
                    </div>
                    <CardDescription>{step.description}</CardDescription>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-1">⏱️</span>
                      {step.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      {step.steps.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 检查清单内容 */}
      <Section id="checklists">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>详细检查清单</SectionTitle>
            <SectionSubtitle>
              系统化的GEO优化检查项目
            </SectionSubtitle>
          </SectionHeader>

          <div className="space-y-12 max-w-6xl mx-auto">
            {checklistCategories.map((category) => (
              <div key={category.id} className="scroll-mt-24" id={category.id}>
                <Card className="overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r from-${category.color}-500/5 to-${category.color}-600/5`}>
                    <div className="flex items-center space-x-3">
                      <div className={`h-12 w-12 rounded-xl bg-${category.color}-500/10 flex items-center justify-center`}>
                        <category.icon className={`h-6 w-6 text-${category.color}-500`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl">{category.title}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {category.description}
                        </CardDescription>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge variant="outline">
                            {category.items.reduce((total, item) => total + item.points.length, 0)} 个检查项
                          </Badge>
                          <Badge variant="outline">
                            {category.items.reduce((total, item) => total + item.points.filter(p => p.mandatory).length, 0)} 个必需项
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          下载
                        </Button>
                        <Button variant="outline" size="sm">
                          <Printer className="h-4 w-4 mr-2" />
                          打印
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      {category.items.map((item) => (
                        <div key={item.category}>
                          <h3 className="text-lg font-semibold mb-4 pb-2 border-b">
                            {item.category}
                            <span className="text-sm font-normal text-muted-foreground ml-2">
                              ({item.points.length} 项检查)
                            </span>
                          </h3>
                          <div className="space-y-3">
                            {item.points.map((point, index) => (
                              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                <input
                                  type="checkbox"
                                  className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                                  id={`${category.id}-${item.category}-${index}`}
                                />
                                <div className="flex-1">
                                  <label
                                    htmlFor={`${category.id}-${item.category}-${index}`}
                                    className="text-sm font-medium cursor-pointer flex items-center"
                                  >
                                    {point.task}
                                    {point.mandatory && (
                                      <Badge variant="destructive" className="ml-2 text-xs">
                                        必需
                                      </Badge>
                                    )}
                                    <Badge variant="outline" className="ml-2 text-xs">
                                      {point.weight}分
                                    </Badge>
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}

                      {/* 评分区域 */}
                      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">评分统计</h4>
                            <p className="text-sm text-muted-foreground">
                              总分: {category.items.reduce((total, item) => total + item.points.reduce((sum, point) => sum + point.weight, 0), 0)} 分
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">0</div>
                            <div className="text-sm text-muted-foreground">当前得分</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "0%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </SectionContainer>
      </Section>

      {/* 评分指南 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader>
              <SectionTitle>评分指南</SectionTitle>
              <SectionSubtitle>
                如何理解和评估检查结果
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-red-500 mb-2">0-40%</div>
                  <h3 className="font-semibold mb-1">需要改进</h3>
                  <p className="text-xs text-muted-foreground">
                    存在较多问题，需要立即优化
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-orange-500 mb-2">41-70%</div>
                  <h3 className="font-semibold mb-1">中等水平</h3>
                  <p className="text-xs text-muted-foreground">
                    有改进空间，建议逐步优化
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-blue-500 mb-2">71-90%</div>
                  <h3 className="font-semibold mb-1">良好水平</h3>
                  <p className="text-xs text-muted-foreground">
                    基础扎实，可继续精细化优化
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-green-500 mb-2">91-100%</div>
                  <h3 className="font-semibold mb-1">优秀水平</h3>
                  <p className="text-xs text-muted-foreground">
                    GEO优化效果显著，保持维护
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 工具和资源 */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>辅助工具</SectionTitle>
            <SectionSubtitle>
              提高检查效率的推荐工具
          </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">Google结构化数据测试</CardTitle>
                <CardDescription>验证Schema.org标记的正确性</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer">
                    访问工具
                    <Share2 className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">PageSpeed Insights</CardTitle>
                <CardDescription>测试页面加载性能</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">
                    访问工具
                    <Share2 className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">Schema.org验证器</CardTitle>
                <CardDescription>官方Schema标记验证工具</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://validator.schema.org/" target="_blank" rel="noopener noreferrer">
                    访问工具
                    <Share2 className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              需要专业的GEO审计服务？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              我们的专家团队可以为您提供全面的GEO审计和优化建议。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  预约审计
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tools">使用在线工具</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}