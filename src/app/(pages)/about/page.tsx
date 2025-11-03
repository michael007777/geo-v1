import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, Brain, Target, Shield, TrendingUp, Users, Sparkles, Search, Globe, Zap, BookOpen, CheckCircle, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "AI平台推荐逻辑分析 - GEO优化策略",
  description: "深入分析各大AI平台（ChatGPT、Claude、Gemini等）的推荐逻辑、选源机制和呈现方式，为GEO优化提供精准策略指导。",
  keywords: ["AI推荐逻辑", "GEO优化", "ChatGPT推荐", "Claude搜索", "Gemini算法", "文心一言优化", "豆包推荐", "AI选源机制"],
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">AI平台分析</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              各大AI平台的
              <GradientText>推荐逻辑分析</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              深入解析ChatGPT、Claude、Gemini等主流AI平台的选源机制、检索逻辑和呈现方式，为精准GEO优化提供策略指导。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/methods">
                  了解五步法框架
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/cases">
                  查看成功案例
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Platform Overview Section */}
      <Section>
        <SectionContainer>
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <Badge className="mb-4">平台分析</Badge>
              <SectionTitle className="text-3xl md:text-4xl">
                主流AI平台
                <GradientText>推荐逻辑概览</GradientText>
              </SectionTitle>
              <SectionSubtitle className="text-lg">
                深入了解各大AI平台的检索机制、选源偏好和呈现方式
              </SectionSubtitle>
            </SectionHeader>

            {/* Comparison Table */}
            <div className="mb-12">
              <div className="overflow-x-auto rounded-lg border border-border/50">
                <table className="w-full min-w-[800px] border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border/30">
                      <th className="text-left py-4 px-6 font-semibold">平台</th>
                      <th className="text-center py-4 px-6 font-semibold min-w-[100px]">默认联网</th>
                      <th className="text-center py-4 px-6 font-semibold min-w-[100px]">引用外显度</th>
                      <th className="text-left py-4 px-6 font-semibold">选源偏好</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-6 font-medium">Perplexity</td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">是</Badge></td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-blue-100 text-blue-700 border-blue-200">高</Badge></td>
                      <td className="py-4 px-6 text-muted-foreground">多源检索，偏时效与可核验</td>
                    </tr>
                    <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-6 font-medium">Claude</td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-amber-100 text-amber-700 border-amber-200">按需</Badge></td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-blue-100 text-blue-700 border-blue-200">高</Badge></td>
                      <td className="py-4 px-6 text-muted-foreground">克制检索，重可信与安全</td>
                    </tr>
                    <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-6 font-medium">ChatGPT</td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-amber-100 text-amber-700 border-amber-200">按需</Badge></td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-blue-100 text-blue-700 border-blue-200">高</Badge></td>
                      <td className="py-4 px-6 text-muted-foreground">结构化信息，权威站优先</td>
                    </tr>
                    <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-6 font-medium">Gemini</td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">是</Badge></td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-blue-100 text-blue-700 border-blue-200">高</Badge></td>
                      <td className="py-4 px-6 text-muted-foreground">Google排序+E-E-A-T</td>
                    </tr>
                    <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-6 font-medium">文心一言</td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">是</Badge></td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-gray-100 text-gray-700 border-gray-200">中</Badge></td>
                      <td className="py-4 px-6 text-muted-foreground">百度系生态，百科/百家号</td>
                    </tr>
                    <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-6 font-medium">豆包</td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">是</Badge></td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-gray-100 text-gray-700 border-gray-200">低-中</Badge></td>
                      <td className="py-4 px-6 text-muted-foreground">字节系内容，强时效性</td>
                    </tr>
                    <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-6 font-medium">通义千问</td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-sky-100 text-sky-700 border-sky-200">支持</Badge></td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-gray-100 text-gray-700 border-gray-200">中</Badge></td>
                      <td className="py-4 px-6 text-muted-foreground">结构化数据，阿里生态</td>
                    </tr>
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-6 font-medium">Kimi</td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-sky-100 text-sky-700 border-sky-200">支持</Badge></td>
                      <td className="py-4 px-6 text-center"><Badge className="bg-indigo-100 text-indigo-700 border-indigo-200">中-高</Badge></td>
                      <td className="py-4 px-6 text-muted-foreground">多步代理式检索，深度研究</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* Platform Details Section */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <SectionTitle className="text-3xl md:text-4xl">
                详细解析
                <GradientText>各平台特点</GradientText>
              </SectionTitle>
              <SectionSubtitle className="text-lg">
                针对性的GEO优化策略和实操建议
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Perplexity */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <Search className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Perplexity</CardTitle>
                      <CardDescription>实时多源聚合专家</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">检索特点</div>
                      <div className="text-xs text-muted-foreground">默认实时联网搜索，聚合多源结果</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">引用方式</div>
                      <div className="text-xs text-muted-foreground">答案段落后直接展示来源链接</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Zap className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">GEO策略</div>
                      <div className="text-xs text-muted-foreground">使用表格/清单结构，部署到权威域</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Claude */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Claude</CardTitle>
                      <CardDescription>稳健可信的内容顾问</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">检索特点</div>
                      <div className="text-xs text-muted-foreground">按需触发联网，重可信与安全</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">引用方式</div>
                      <div className="text-xs text-muted-foreground">答案处直接标注来源，强调可追溯</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Zap className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">GEO策略</div>
                      <div className="text-xs text-muted-foreground">准备自包含定义段+FAQ模块</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ChatGPT */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">ChatGPT</CardTitle>
                      <CardDescription>消费问答与购物专家</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">检索特点</div>
                      <div className="text-xs text-muted-foreground">按需联网，支持结构化购物数据</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">引用方式</div>
                      <div className="text-xs text-muted-foreground">展示相关网页链接和引用</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Zap className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">GEO策略</div>
                      <div className="text-xs text-muted-foreground">提供结构化参数/价格/对比表</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gemini */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Gemini</CardTitle>
                      <CardDescription>Google生态深度整合</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">检索特点</div>
                      <div className="text-xs text-muted-foreground">依托Google搜索和SGE深度耦合</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">引用方式</div>
                      <div className="text-xs text-muted-foreground">答案旁展示引用，来源广泛</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Zap className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">GEO策略</div>
                      <div className="text-xs text-muted-foreground">做好SEO基础+AEO片段化答案</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* Chinese Platforms Section */}
      <Section>
        <SectionContainer>
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <Badge className="mb-4">中文平台</Badge>
              <SectionTitle className="text-3xl md:text-4xl">
                中文AI平台
                <GradientText>生态特点</GradientText>
              </SectionTitle>
              <SectionSubtitle className="text-lg">
                针对中文环境的特殊优化策略
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {/* 文心一言 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">文心一言</CardTitle>
                    <Badge variant="outline">百度系</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">搜索组件</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    默认融合百度搜索，依赖百科、百家号等自家生态
                  </p>
                  <div className="bg-primary/20 backdrop-blur-sm text-primary-foreground p-3 rounded-lg border border-primary/30">
                    <div className="text-xs font-medium mb-1">优化要点</div>
                    <ul className="text-xs space-y-1">
                      <li>• 建设百家号/百科词条</li>
                      <li>• 高质量百科式定义段</li>
                      <li>• 结构化中文要点</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* 豆包 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">豆包</CardTitle>
                    <Badge variant="outline">字节系</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">强时效性</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    基于头条搜索，强调强时效问答，外显引用克制
                  </p>
                  <div className="bg-primary/20 backdrop-blur-sm text-primary-foreground p-3 rounded-lg border border-primary/30">
                    <div className="text-xs font-medium mb-1">优化要点</div>
                    <ul className="text-xs space-y-1">
                      <li>• 抖音/头条阵地建设</li>
                      <li>• 三行要点卡制作</li>
                      <li>• 高时效内容更新</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* 通义千问 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">通义千问</CardTitle>
                    <Badge variant="outline">阿里系</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium">电商友好</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    支持联网搜索，对价格/性价比等可比要素友好
                  </p>
                  <div className="bg-primary/20 backdrop-blur-sm text-primary-foreground p-3 rounded-lg border border-primary/30">
                    <div className="text-xs font-medium mb-1">优化要点</div>
                    <ul className="text-xs space-y-1">
                      <li>• 清晰价格/参数表</li>
                      <li>• 阿里生态一致口径</li>
                      <li>• 对比/适配表制作</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* GEO Strategy Section */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <Badge className="mb-4">优化策略</Badge>
              <SectionTitle className="text-3xl md:text-4xl">
                跨平台GEO
                <GradientText>优化清单</GradientText>
              </SectionTitle>
              <SectionSubtitle className="text-lg">
                适用于所有AI平台的通用优化策略
              </SectionSubtitle>
            </SectionHeader>

            <div className="max-w-6xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex justify-center items-center space-x-8">
                    <div className="h-16 w-16 rounded-xl bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="h-px bg-border flex-1 max-w-sm" />
                    <div className="h-16 w-16 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Target className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* 跨平台共性策略 */}
                    <div className="space-y-6">
                      <div className="pb-4 border-b border-border/30">
                        <h3 className="text-lg font-semibold text-center text-green-600">跨平台共性策略</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/60 transition-colors border border-border/30">
                          <div className="h-3 w-3 rounded-full bg-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-base mb-1 text-green-600">页面结构模块化</div>
                            <div className="text-sm text-muted-foreground">
                              H2/H3、要点列表、FAQ块、对比表
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/60 transition-colors border border-border/30">
                          <div className="h-3 w-3 rounded-full bg-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-base mb-1 text-blue-600">权威引文+出处链接</div>
                            <div className="text-sm text-muted-foreground">
                              媒体/报告/标准/学术来源
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/60 transition-colors border border-border/30">
                          <div className="h-3 w-3 rounded-full bg-purple-500 mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-base mb-1 text-purple-600">机器可读格式</div>
                            <div className="text-sm text-muted-foreground">
                              Schema/表格/清单/参数矩阵
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/60 transition-colors border border-border/30">
                          <div className="h-3 w-3 rounded-full bg-amber-500 mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-base mb-1 text-amber-600">多生态分发</div>
                            <div className="text-sm text-muted-foreground">
                              站内权威页+社区/媒体/百科
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 平台定向策略 */}
                    <div className="space-y-6">
                      <div className="pb-4 border-b border-border/30">
                        <h3 className="text-lg font-semibold text-center text-blue-600">平台定向策略</h3>
                      </div>
                      <div className="space-y-4 h-full">
                        <div className="bg-muted/50 backdrop-blur-sm p-5 rounded-xl border border-border/50 hover:bg-muted/60 transition-colors">
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                            <div className="font-semibold text-sm text-blue-600">国际平台</div>
                          </div>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>对比/榜单页面+核心参数表</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>2-3句标准定义段</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>重要结论紧邻权威来源</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-muted/50 backdrop-blur-sm p-5 py-8 rounded-xl border border-border/50 hover:bg-muted/60 transition-colors flex flex-col justify-center">
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="h-2 w-2 rounded-full bg-purple-500" />
                            <div className="font-semibold text-sm text-purple-600">实施建议</div>
                          </div>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>定期更新内容保持时效性</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>建立多平台分发渠道</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>持续监控AI引用表现</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>多增加流程化内容（流程图/步骤清单），有利于 Agent 型检索综合</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* Core Goals Section */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <SectionHeader>
            <Badge className="mb-4">核心目标</Badge>
            <SectionTitle>
              GEO优化的
              <GradientText>五个核心目标</GradientText>
            </SectionTitle>
            <SectionSubtitle>
              通过系统化策略实现品牌在AI时代的持续可见性和权威性
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>获得有利呈现</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  在AI回答中以准确、正面的方式被引用，确保品牌信息的正确传达
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>影响AI输出</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  成为构建AI答案的权威来源，影响相关查询的回答方向和内容
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>建立品牌权威</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  通过持续被AI引用，建立行业专家形象和可信度
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>保持高可见性</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  适应用户直接从AI获取信息的趋势，维持品牌曝光度
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>保护品牌声誉</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  提供最新准确信息，避免AI基于过时信息生成有害回答
                </p>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* Comparison Table */}
      <Section>
        <SectionContainer>
          <div className="max-w-5xl mx-auto">
            <SectionHeader>
              <SectionTitle>
                SEO vs GEO
                <GradientText>详细对比分析</GradientText>
              </SectionTitle>
              <SectionSubtitle>
                理解两种优化方法的根本差异和适用场景
              </SectionSubtitle>
            </SectionHeader>

            <div className="overflow-x-auto rounded-lg border border-border/50">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border/30">
                    <th className="text-left py-4 px-6 font-semibold">对比维度</th>
                    <th className="text-left py-4 px-6 font-semibold">传统SEO</th>
                    <th className="text-left py-4 px-6 font-semibold">GEO优化</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 font-medium">核心目标</td>
                    <td className="py-4 px-6 text-muted-foreground">获取网站流量</td>
                    <td className="py-4 px-6 text-muted-foreground font-medium">成为AI答案来源</td>
                  </tr>
                  <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 font-medium">优化重点</td>
                    <td className="py-4 px-6 text-muted-foreground">关键词排名、链接建设</td>
                    <td className="py-4 px-6 text-muted-foreground font-medium">内容权威性、结构化数据</td>
                  </tr>
                  <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 font-medium">用户行为</td>
                    <td className="py-4 px-6 text-muted-foreground">点击链接、浏览页面</td>
                    <td className="py-4 px-6 text-muted-foreground font-medium">直接获取AI回答</td>
                  </tr>
                  <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 font-medium">成功指标</td>
                    <td className="py-4 px-6 text-muted-foreground">排名位置、点击率</td>
                    <td className="py-4 px-6 text-muted-foreground font-medium">AI引用率、呈现质量</td>
                  </tr>
                  <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 font-medium">内容要求</td>
                    <td className="py-4 px-6 text-muted-foreground">关键词优化、标题标签</td>
                    <td className="py-4 px-6 text-muted-foreground font-medium">事实准确性、结构清晰度</td>
                  </tr>
                  <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 font-medium">技术基础</td>
                    <td className="py-4 px-6 text-muted-foreground">页面优化、站点架构</td>
                    <td className="py-4 px-6 text-muted-foreground font-medium">Schema标记、实体图谱</td>
                  </tr>
                  <tr className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 font-medium">竞争环境</td>
                    <td className="py-4 px-6 text-muted-foreground">有限的排名位置</td>
                    <td className="py-4 px-6 text-muted-foreground font-medium">开放的答案贡献</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 font-medium">长期价值</td>
                    <td className="py-4 px-6 text-muted-foreground">流量获取能力</td>
                    <td className="py-4 px-6 text-muted-foreground font-medium">AI权威性建立</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              开始您的AI平台优化之旅？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              基于各平台推荐逻辑制定精准优化策略，让您的品牌在AI时代脱颖而出。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/methods">
                  了解五步法框架
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">预约免费咨询</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}