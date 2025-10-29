import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, Brain, Target, Shield, TrendingUp, Users, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "关于GEO - 生成式引擎优化详解",
  description: "深入了解GEO（生成式引擎优化）的定义、原理和与传统SEO的区别。让AI像人类一样理解您的内容，在AI搜索新时代建立权威性。",
  keywords: ["GEO定义", "生成式引擎优化", "AI搜索优化", "SEO vs GEO", "AI时代营销", "ChatGPT优化"],
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">GEO基础知识</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              什么是
              <GradientText>生成式引擎优化</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              GEO是为生成式AI模型优化内容的过程，确保您的品牌信息能被AI准确理解、抓取并整合到生成的对话式回答中。
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

      {/* Definition Section */}
      <Section>
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader className="text-left">
              <SectionTitle className="text-3xl md:text-4xl">
                GEO的核心定义
              </SectionTitle>
              <SectionSubtitle className="text-lg">
                从"争取点击"到"成为答案"的范式转变
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">传统 SEO</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                    <div>
                      <div className="font-medium">关键词排名</div>
                      <div className="text-sm text-muted-foreground">
                        优化页面在搜索结果中的排名位置
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                    <div>
                      <div className="font-medium">流量获取</div>
                      <div className="text-sm text-muted-foreground">
                        争取用户点击进入网站
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                    <div>
                      <div className="font-medium">链接建设</div>
                      <div className="text-sm text-muted-foreground">
                        建立外部链接提升权重
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">GEO 优化</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                    <div>
                      <div className="font-medium">内容理解</div>
                      <div className="text-sm text-muted-foreground">
                        让AI准确理解内容的含义和权威性
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                    <div>
                      <div className="font-medium">答案呈现</div>
                      <div className="text-sm text-muted-foreground">
                        成为AI生成回答的一部分
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                    <div>
                      <div className="font-medium">权威建立</div>
                      <div className="text-sm text-muted-foreground">
                        在AI知识图谱中建立品牌权威
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <br />
              五个核心目标
            </SectionTitle>
            <SectionSubtitle>
              通过系统化策略实现品牌在AI时代的持续可见性和权威性
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <br />
                详细对比分析
              </SectionTitle>
              <SectionSubtitle>
                理解两种优化方法的根本差异和适用场景
              </SectionSubtitle>
            </SectionHeader>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 font-semibold">对比维度</th>
                    <th className="text-left py-4 px-6 font-semibold">传统SEO</th>
                    <th className="text-left py-4 px-6 font-semibold">GEO优化</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">核心目标</td>
                    <td className="py-4 px-6">获取网站流量</td>
                    <td className="py-4 px-6">成为AI答案来源</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">优化重点</td>
                    <td className="py-4 px-6">关键词排名、链接建设</td>
                    <td className="py-4 px-6">内容权威性、结构化数据</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">用户行为</td>
                    <td className="py-4 px-6">点击链接、浏览页面</td>
                    <td className="py-4 px-6">直接获取AI回答</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">成功指标</td>
                    <td className="py-4 px-6">排名位置、点击率</td>
                    <td className="py-4 px-6">AI引用率、呈现质量</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">内容要求</td>
                    <td className="py-4 px-6">关键词优化、标题标签</td>
                    <td className="py-4 px-6">事实准确性、结构清晰度</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">技术基础</td>
                    <td className="py-4 px-6">页面优化、站点架构</td>
                    <td className="py-4 px-6">Schema标记、实体图谱</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">竞争环境</td>
                    <td className="py-4 px-6">有限的排名位置</td>
                    <td className="py-4 px-6">开放的答案贡献</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">长期价值</td>
                    <td className="py-4 px-6">流量获取能力</td>
                    <td className="py-4 px-6">AI权威性建立</td>
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
              准备开始您的GEO之旅？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              了解我们的五步法框架，或者直接与我们的专家团队进行免费咨询。
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