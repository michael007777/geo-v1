import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, TrendingUp, Search, Bot, Users, BarChart3, Eye, Target, Globe, Zap, Shield, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "SEO vs GEO 详细对比 - 传统搜索优化 vs 生成式AI优化",
  description: "深入分析传统SEO与GEO的根本差异、优化策略、技术要求和成功指标。了解如何在AI搜索时代保持竞争优势。",
  keywords: ["SEO对比", "GEO差异", "搜索优化演进", "AI搜索vs传统搜索", "搜索营销策略", "ChatGPT优化"],
}

export default function ComparisonPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">深度对比分析</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              SEO vs
              <GradientText>GEO 根本区别</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              从搜索优化的历史演进到AI时代的全新范式，理解两种方法的核心差异、适用场景和未来趋势
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/methods">
                  了解GEO方法论
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/cases">
                  查看实际案例
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 核心范式转变 */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>
              搜索范式
              <GradientText>根本转变</GradientText>
            </SectionTitle>
            <SectionSubtitle>
              从"链接争夺"到"答案贡献"的思维模式升级
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Search className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">传统SEO思维</CardTitle>
                    <p className="text-sm text-muted-foreground">2000s-2020s</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">目标：流量获取</h4>
                      <p className="text-sm text-muted-foreground">
                        争取用户点击，提升网站访问量和转化率
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">用户行为：点击浏览</h4>
                      <p className="text-sm text-muted-foreground">
                        用户点击链接，进入网站寻找信息
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">成功指标：排名位置</h4>
                      <p className="text-sm text-muted-foreground">
                        关键词排名、点击率、页面停留时间
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Bot className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">GEO思维</CardTitle>
                    <p className="text-sm text-muted-foreground">2020s-未来</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">目标：答案贡献</h4>
                      <p className="text-sm text-muted-foreground">
                        成为AI生成回答的权威来源，建立认知权威
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">用户行为：直接获取</h4>
                      <p className="text-sm text-muted-foreground">
                        用户直接从AI回答中获得信息，零点击体验
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">成功指标：引用质量</h4>
                      <p className="text-sm text-muted-foreground">
                        AI引用率、答案准确性、权威性评分
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* 详细对比表格 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>全面对比</SectionTitle>
            <SectionSubtitle>
              从多个维度深入理解SEO与GEO的差异
            </SectionSubtitle>
          </SectionHeader>

          <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-xl shadow-lg">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left py-4 px-6 font-semibold">对比维度</th>
                    <th className="text-left py-4 px-6 font-semibold">传统SEO</th>
                    <th className="text-left py-4 px-6 font-semibold">GEO优化</th>
                    <th className="text-left py-4 px-6 font-semibold">影响程度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">核心目标</td>
                    <td className="py-4 px-6">获取网站流量和转化</td>
                    <td className="py-4 px-6">成为AI答案的权威来源</td>
                    <td className="py-4 px-6">
                      <Badge variant="destructive">根本性改变</Badge>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">优化重点</td>
                    <td className="py-4 px-6">关键词密度、标题标签、Meta描述</td>
                    <td className="py-4 px-6">内容权威性、事实准确性、结构化数据</td>
                    <td className="py-4 px-6">
                      <Badge variant="destructive">策略重构</Badge>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">技术要求</td>
                    <td className="py-4 px-6">页面加载速度、移动适配、站点架构</td>
                    <td className="py-4 px-6">Schema标记、实体图谱、API集成</td>
                    <td className="py-4 px-6">
                      <Badge variant="secondary">技术升级</Badge>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">内容策略</td>
                    <td className="py-4 px-6">关键词优化、内容长度、更新频率</td>
                    <td className="py-4 px-6">专业深度、独特观点、实时准确性</td>
                    <td className="py-4 px-6">
                      <Badge variant="secondary">质量提升</Badge>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">链接建设</td>
                    <td className="py-4 px-6">外部链接数量和质量、内链结构</td>
                    <td className="py-4 px-6">权威引用、实体关联、知识图谱地位</td>
                    <td className="py-4 px-6">
                      <Badge variant="default">概念演进</Badge>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">用户体验</td>
                    <td className="py-4 px-6">页面体验、导航便捷、信息架构</td>
                    <td className="py-4 px-6">AI可理解性、结构清晰度、事实可验证</td>
                    <td className="py-4 px-6">
                      <Badge variant="default">标准提升</Badge>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">竞争环境</td>
                    <td className="py-4 px-6">有限的排名位置（10个蓝色链接）</td>
                    <td className="py-4 px-6">开放的答案贡献生态</td>
                    <td className="py-4 px-6">
                      <Badge variant="outline">机会扩展</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">长期价值</td>
                    <td className="py-4 px-6">流量获取能力、品牌曝光</td>
                    <td className="py-4 px-6">AI权威性、认知领导力、思想影响</td>
                    <td className="py-4 px-6">
                      <Badge variant="outline">价值跃升</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 用户旅程对比 */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>用户旅程对比</SectionTitle>
            <SectionSubtitle>
              不同搜索范式下用户行为的根本差异
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader className="bg-blue-50/50">
                <CardTitle className="text-xl flex items-center">
                  <Search className="h-6 w-6 mr-2 text-blue-600" />
                  传统搜索用户旅程
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-semibold text-blue-600">1</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">产生需求</h4>
                      <p className="text-sm text-muted-foreground">用户产生信息需求，准备搜索</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-semibold text-blue-600">2</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">输入关键词</h4>
                      <p className="text-sm text-muted-foreground">在搜索引擎输入相关关键词</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-semibold text-blue-600">3</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">浏览结果</h4>
                      <p className="text-sm text-muted-foreground">浏览搜索结果页面，评估标题和描述</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-semibold text-blue-600">4</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">点击链接</h4>
                      <p className="text-sm text-muted-foreground">点击最相关的链接，访问网站</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-semibold text-blue-600">5</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">获取信息</h4>
                      <p className="text-sm text-muted-foreground">在目标网站上查找所需信息</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-50/50">
                <CardTitle className="text-xl flex items-center">
                  <Bot className="h-6 w-6 mr-2 text-green-600" />
                  AI搜索用户旅程
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-sm font-semibold text-green-600">1</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">产生需求</h4>
                      <p className="text-sm text-muted-foreground">用户产生复杂问题或需求</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-sm font-semibold text-green-600">2</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">对话式查询</h4>
                      <p className="text-sm text-muted-foreground">用自然语言与AI对话，描述需求</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-sm font-semibold text-green-600">3</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">即时回答</h4>
                      <p className="text-sm text-muted-foreground">AI直接生成完整的回答内容</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-sm font-semibold text-green-600">4</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">零点击体验</h4>
                      <p className="text-sm text-muted-foreground">直接获得答案，无需访问外部网站</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-sm font-semibold text-green-600">5</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">深度对话</h4>
                      <p className="text-sm text-muted-foreground">可能继续追问，深入探讨</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* 技术演进趋势 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>技术演进趋势</SectionTitle>
            <SectionSubtitle>
              从算法优化到AI理解的技术范式转移
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <CardTitle>搜索引擎时代</CardTitle>
                <p className="text-sm text-muted-foreground">2000-2010</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  关键词匹配、链接分析、PageRank算法
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">关键词优化</Badge>
                  <Badge variant="outline">链接建设</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle>智能搜索时代</CardTitle>
                <p className="text-sm text-muted-foreground">2010-2020</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  语义搜索、机器学习、个性化推荐
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">语义SEO</Badge>
                  <Badge variant="outline">用户体验</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <CardTitle>生成式AI时代</CardTitle>
                <p className="text-sm text-muted-foreground">2020-未来</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  大语言模型、知识图谱、生成式回答
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">GEO优化</Badge>
                  <Badge variant="outline">AI权威</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* 行动建议 */}
      <Section>
        <SectionContainer>
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader className="text-center">
              <Badge className="mb-4">战略建议</Badge>
              <SectionTitle>如何应对搜索范式转变</SectionTitle>
              <SectionSubtitle>
                企业需要同时优化传统SEO和GEO，建立全面的搜索可见性策略
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-500" />
                    短期策略（6-12个月）
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 保持现有SEO策略的执行</li>
                    <li>• 开始GEO基础知识学习和规划</li>
                    <li>• 优化内容的结构化数据标记</li>
                    <li>• 提升内容的专业性和权威性</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-green-500" />
                    长期战略（1-3年）
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 建立完整的GEO优化体系</li>
                    <li>• 成为行业AI回答的权威来源</li>
                    <li>• 构建品牌知识图谱和实体网络</li>
                    <li>• 建立AI时代的认知领导力</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/methods">
                  开始GEO之旅
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">获取专业咨询</Link>
              </Button>
            </div>
          </div>
        </SectionContainer>
      </Section>
    </div>
  )
}