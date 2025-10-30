import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, BookOpen, Target, Brain, Users, TrendingUp, Shield, Zap, Lightbulb, CheckCircle, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO基础知识 - 生成式引擎优化核心概念",
  description: "系统学习GEO基础理论，理解生成式AI搜索原理，掌握与传统SEO的根本区别。",
  keywords: ["GEO基础", "生成式引擎优化", "AI搜索原理", "SEO vs GEO", "LLM优化"],
}

const geoBasicsSections = [
  {
    id: "geo-definition",
    title: "GEO定义与核心目标",
    description: "深入理解什么是生成式引擎优化及其核心目标",
    icon: Target,
    topics: [
      {
        title: "什么是生成式引擎优化（GEO）？",
        content: "GEO是Generative Engine Optimization的缩写，旨在创建和优化网站内容，以便生成式AI模型能够有效地理解、抓取、并将其信息呈现给用户。",
        keyPoints: [
          "针对ChatGPT、Gemini、豆包等生成式AI模型",
          "目标是成为AI答案的一部分，而非争取点击",
          "从'争取点击'转向'成为答案'"
        ]
      },
      {
        title: "GEO的核心目标",
        content: "GEO的核心目标是确保品牌信息能够被AI直接采纳并整合到生成的综合性回答中。",
        keyPoints: [
          "获得有利呈现：在AI答案中被权威引用",
          "影响AI输出：让AI将您的内容视为权威来源",
          "建立品牌权威：在用户心中建立行业专家形象",
          "保持高可见性：在零点击环境中维持品牌曝光"
        ]
      }
    ],
    difficulty: "入门",
    duration: "20分钟"
  },
  {
    id: "seo-vs-geo",
    title: "GEO与传统SEO的对比",
    description: "理解GEO和SEO在目标、方法和衡量标准上的根本区别",
    icon: Brain,
    topics: [
      {
        title: "根本差异：为算法排链接 vs 为模型喂事实",
        content: "传统SEO专注于优化网站以符合搜索引擎排名算法，而GEO专注于优化内容使LLM能够理解、信任和引用。",
        keyPoints: [
          "SEO：针对传统搜索引擎算法，追求高排名和流量",
          "GEO：针对大型语言模型，追求在AI回答中的有利呈现",
          "SEO：侧重关键词和反向链接",
          "GEO：侧重清晰度、事实准确性和结构化数据"
        ]
      },
      {
        title: "目标受众差异",
        content: "虽然最终目标都是服务人类用户，但直接目标受众不同导致策略差异。",
        keyPoints: [
          "SEO：优化给搜索引擎算法看的内容",
          "GEO：优化给AI模型理解和生成的内容",
          "SEO：以网站为中心的资产营销",
          "GEO：以影响力为中心的生态营销"
        ]
      }
    ],
    difficulty: "基础",
    duration: "25分钟"
  },
  {
    id: "business-value",
    title: "GEO的商业价值与趋势",
    description: "分析GEO对商业的长期影响和行业发展趋势",
    icon: TrendingUp,
    topics: [
      {
        title: "为什么企业必须关心GEO？",
        content: "GEO代表了用户获取信息和做出购买决策方式的根本性转变。",
        keyPoints: [
          "用户行为转变：越来越多用户直接从AI获取答案",
          "品牌声誉管理：主动管理品牌在AI中的形象",
          "竞争优势建立：早期采用者将获得显著优势",
          "未来趋势把握：为AI时代的营销做好准备"
        ]
      },
      {
        title: "行业影响与挑战",
        content: "所有行业都将受到GEO影响，但信息型搜索密集型行业首当其冲。",
        keyPoints: [
          "最受影响行业：医疗、金融、教育、电商等",
          "变革机遇：传统SEO从业者的转型机会",
          "挑战应对：如何适应新的营销范式",
          "投资回报：GEO策略的长期价值评估"
        ]
      }
    ],
    difficulty: "中级",
    duration: "30分钟"
  }
]

const relatedResources = [
  {
    title: "GEO方法论",
    description: "学习具体的GEO实施方法和技巧",
    href: "/methods",
    icon: Zap
  },
  {
    title: "案例分析",
    description: "查看真实的GEO实施案例和效果",
    href: "/cases",
    icon: CheckCircle
  },
  {
    title: "GEO问答",
    description: "快速解答常见的GEO问题",
    href: "/knowledge/faq",
    icon: Lightbulb
  }
]

export default function BasicsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">知识中心</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <GradientText>GEO基础知识</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              系统学习GEO核心理论，深入理解生成式AI搜索的工作原理，
              为掌握AI时代的搜索优化技术打下坚实基础。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#geo-basics">
                  开始学习
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/knowledge/guides">查看教程</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 学习路径建议 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader className="text-center">
              <SectionTitle>学习建议</SectionTitle>
              <SectionSubtitle>
                推荐的学习顺序和方法
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">1</span>
                  </div>
                  <CardTitle className="text-lg">理解概念</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    首先学习GEO的基本定义和与传统SEO的区别，建立正确的认知框架。
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
                  </div>
                  <CardTitle className="text-lg">掌握原理</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    深入了解AI搜索的工作机制，理解为什么GEO策略能够影响AI的回答。
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                  </div>
                  <CardTitle className="text-lg">实践应用</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    结合实际案例学习具体的GEO实施方法，并在实际项目中应用所学知识。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* GEO基础知识内容 */}
      <Section id="geo-basics">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>核心知识模块</SectionTitle>
            <SectionSubtitle>
              系统学习GEO的基础理论和核心概念
            </SectionSubtitle>
          </SectionHeader>

          <div className="space-y-12 max-w-5xl mx-auto">
            {geoBasicsSections.map((section) => (
              <div key={section.id} className="scroll-mt-24" id={section.id}>
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl">{section.title}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {section.description}
                        </CardDescription>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge variant="outline">{section.difficulty}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {section.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {section.topics.map((topic, index) => (
                        <div key={index} className="border-l-4 border-l-primary/20 pl-6">
                          <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {topic.content}
                          </p>
                          <div className="bg-muted/30 rounded-lg p-4">
                            <h4 className="font-semibold mb-3 flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                              核心要点
                            </h4>
                            <ul className="space-y-2">
                              {topic.keyPoints.map((point, pointIndex) => (
                                <li key={pointIndex} className="flex items-start space-x-2">
                                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                  <span className="text-sm">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </SectionContainer>
      </Section>

      {/* 重要提醒 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <AlertCircle className="h-6 w-6 mr-2 text-blue-500" />
                  学习重点提醒
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">✅ 正确理解</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• GEO是影响AI，而非欺骗AI</li>
                      <li>• 重点是提供高质量、准确的信息</li>
                      <li>• 需要长期持续的内容建设</li>
                      <li>• 是内容营销的新形态</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-700 dark:text-red-300">❌ 常见误区</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 试图用关键词堆砌影响AI</li>
                      <li>• 期望立竿见影的效果</li>
                      <li>• 忽视内容质量只关注技术</li>
                      <li>• 将GEO视为传统SEO的简单延伸</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* 相关资源 */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>相关学习资源</SectionTitle>
            <SectionSubtitle>
              继续深入学习GEO的相关内容
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedResources.map((resource) => (
              <Card key={resource.title} className="text-center hover-lift">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={resource.href}>
                      了解更多
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContainer>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              准备深入学习GEO？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              现在您已经了解了GEO的基础知识，继续学习具体的实施方法和技巧。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/methods">
                  学习GEO方法
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/knowledge/faq">查看常见问题</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}