import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, BookOpen, Users, Target, Zap, Clock, TrendingUp, Award, Lightbulb, Search, BarChart3, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO操作教程 - 从入门到精通的实战指南",
  description: "详细的GEO优化操作教程，包括实体映射、提示词优化、结构化数据等技术要点。适合不同水平的学习者。",
  keywords: ["GEO教程", "AI优化指南", "实体映射教程", "提示词优化", "结构化数据", "AI搜索优化实战"],
}

const guides = [
  {
    id: "getting-started",
    title: "GEO入门指南",
    description: "从零开始学习GEO优化的基础知识，了解与SEO的区别和核心概念。",
    level: "入门",
    duration: "30分钟",
    icon: BookOpen,
    topics: ["GEO基本概念", "与SEO的区别", "AI搜索原理", "优化目标设定"],
    difficulty: "初级",
    popularity: "热门"
  },
  {
    id: "entity-mapping-basics",
    title: "实体映射基础教程",
    description: "学习如何识别和定义核心实体，建立AI可以理解的知识图谱。",
    level: "基础",
    duration: "45分钟",
    icon: Target,
    topics: ["实体识别方法", "Schema.org基础", "关系映射技巧", "数据结构设计"],
    difficulty: "初级",
    popularity: "推荐"
  },
  {
    id: "prompt-optimization",
    title: "提示词优化实战",
    description: "深入理解AI处理逻辑，优化内容结构和表述方式以提高AI引用率。",
    level: "进阶",
    duration: "60分钟",
    icon: Lightbulb,
    topics: ["AI查询意图分析", "内容结构优化", "语言表述技巧", "测试与调优"],
    difficulty: "中级",
    popularity: "进阶必学"
  },
  {
    id: "schema-implementation",
    title: "结构化数据完整指南",
    description: "从理论到实践，全面掌握Schema.org标记的实施技巧和最佳实践。",
    level: "技术",
    duration: "90分钟",
    icon: Shield,
    topics: ["Schema.org选择", "JSON-LD编写", "验证工具使用", "常见问题解决"],
    difficulty: "中级",
    popularity: "技术必备"
  },
  {
    id: "content-strategy",
    title: "GEO内容策略制定",
    description: "学习如何制定全面的GEO内容策略，平衡用户价值和AI可理解性。",
    level: "策略",
    duration: "75分钟",
    icon: TrendingUp,
    topics: ["内容规划方法", "质量评估标准", "更新维护策略", "效果监测体系"],
    difficulty: "高级",
    popularity: "管理者必读"
  },
  {
    id: "measurement-analytics",
    title: "GEO效果测量与分析",
    description: "建立完整的GEO效果评估体系，掌握数据驱动的优化决策方法。",
    level: "分析",
    duration: "50分钟",
    icon: BarChart3,
    topics: ["关键指标定义", "数据收集方法", "分析工具使用", "报告制作技巧"],
    difficulty: "中级",
    popularity: "数据驱动"
  }
]

const learningPaths = [
  {
    name: "企业管理者路径",
    description: "适合企业主、市场总监，重点理解GEO的商业价值和实施策略",
    guides: ["getting-started", "content-strategy", "measurement-analytics"],
    estimatedTime: "2.5小时",
    icon: Users
  },
  {
    name: "技术实施路径",
    description: "适合开发者、SEO专家，深入学习技术实施细节和代码优化",
    guides: ["entity-mapping-basics", "schema-implementation", "prompt-optimization"],
    estimatedTime: "3小时",
    icon: Zap
  },
  {
    name: "内容创作者路径",
    description: "适合内容团队、编辑，学习如何在内容创作中融入GEO思维",
    guides: ["getting-started", "prompt-optimization", "content-strategy"],
    estimatedTime: "2小时",
    icon: BookOpen
  }
]

export default function GuidesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">知识中心</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <GradientText>GEO操作教程</GradientText>
              <br />
              从入门到精通
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              系统化的学习路径，从基础概念到高级实战技巧。无论您是初学者还是有经验的从业者，
              都能找到适合自己的学习内容。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#learning-paths">
                  选择学习路径
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/knowledge/tools">查看实用工具</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 学习路径推荐 */}
      <Section id="learning-paths">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>个性化学习路径</SectionTitle>
            <SectionSubtitle>
              根据您的角色和目标，选择最适合的学习路径
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {learningPaths.map((path, index) => (
              <Card key={path.name} className="relative overflow-hidden hover-lift">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <path.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{path.name}</CardTitle>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {path.estimatedTime}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {path.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-sm mb-2">包含教程</h5>
                    <div className="space-y-1">
                      {path.guides.map((guideId) => {
                        const guide = guides.find(g => g.id === guideId)
                        return guide ? (
                          <div key={guideId} className="flex items-center space-x-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span className="text-sm">{guide.title}</span>
                            <Badge variant="outline" className="text-xs">{guide.duration}</Badge>
                          </div>
                        ) : null
                      })}
                    </div>
                  </div>

                  <Button className="w-full" asChild>
                    <Link href={`/guides/${path.guides[0]}`}>
                      开始学习
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContainer>
      </Section>

      {/* 教程列表 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>全部教程</SectionTitle>
            <SectionSubtitle>
              按难度和主题分类的完整教程目录
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {guides.map((guide) => (
              <Card key={guide.id} className="hover-lift cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                        <guide.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {guide.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant={guide.difficulty === "初级" ? "default" : guide.difficulty === "中级" ? "secondary" : "destructive"}>
                            {guide.difficulty}
                          </Badge>
                          {guide.popularity === "热门" && (
                            <Badge variant="outline" className="text-orange-600 border-orange-600">
                              🔥 {guide.popularity}
                            </Badge>
                          )}
                          {guide.popularity === "推荐" && (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              ⭐ {guide.popularity}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {guide.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{guide.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>{guide.topics.length} 个主题</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-sm mb-2">主要内容包括</h5>
                    <div className="flex flex-wrap gap-1">
                      {guide.topics.slice(0, 3).map((topic, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {guide.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{guide.topics.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button className="w-full" variant="outline" asChild>
                    <Link href={`/guides/${guide.id}`}>
                      开始学习
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContainer>
      </Section>

      {/* 学习建议 */}
      <Section>
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader className="text-center">
              <SectionTitle>学习建议</SectionTitle>
              <SectionSubtitle>
                提高学习效率的专业建议
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Award className="h-5 w-5 mr-2 text-green-500" />
                    学习最佳实践
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 按照推荐的顺序学习，循序渐进</li>
                    <li>• 理论学习与实践操作相结合</li>
                    <li>• 定期回顾和总结学习要点</li>
                    <li>• 加入学习社群，与他人交流讨论</li>
                    <li>• 将学到的知识应用到实际项目中</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Search className="h-5 w-5 mr-2 text-blue-500" />
                    学习资源推荐
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 定期查看最新的AI搜索趋势报告</li>
                    <li>• 关注相关领域的专业博客和论坛</li>
                    <li>• 参加行业会议和在线研讨会</li>
                    <li>• 订阅权威机构的邮件通讯</li>
                    <li>• 加入专业社群获取最新资讯</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 进阶学习 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>进阶学习资源</SectionTitle>
            <SectionSubtitle>
              深入学习GEO的高级内容
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle>深度研究报告</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  获取最新的GEO行业研究报告和深度分析
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/knowledge/research">查看报告</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle>提示词实验室</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  实验和测试不同的提示词优化策略
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/knowledge/prompt-lab">进入实验室</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle>实用工具集</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  提高GEO工作效率的专业工具推荐
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/knowledge/tools">浏览工具</Link>
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
              准备开始学习GEO？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              选择适合您的学习路径，或者联系我们获取个性化的学习建议。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  获取学习建议
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resources/checklist">下载学习清单</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}