import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, TrendingUp, Building, PenTool, ShoppingCart, Filter } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO案例研究 - 成功的AI优化实践",
  description: "查看真实的GEO优化案例，了解不同行业如何通过生成式引擎优化提升AI可见性和权威性。包含详细的实施过程和成果数据。",
  keywords: ["GEO案例", "AI优化案例", "ChatGPT优化案例", "生成式AI优化实践", "品牌权威建设"],
}

const caseStudies = [
  {
    id: "case-001",
    title: "B2B科技公司AI引用率提升300%",
    category: "B2B企业",
    icon: Building,
    context: "一家专注于企业软件的科技公司，在传统SEO上表现良好，但在AI搜索中的可见性几乎为零。",
    method: "实施完整的GEO五步法框架，重点优化技术文档和产品描述的结构化数据。",
    result: "6个月内AI平台引用率提升300%，相关查询的AI推荐中排名前3。",
    keyTakeaway: "技术内容的结构化优化是获得AI信任的关键。",
    metrics: {
      improvement: "300%",
      before: "几乎为0",
      after: "每月500+引用"
    },
    tags: ["技术", "B2B", "结构化数据"],
    featured: true
  },
  {
    id: "case-002",
    title: "内容创作者权威建立计划",
    category: "内容创作者",
    icon: PenTool,
    context: "一位行业分析领域的独立创作者，希望提升在AI生成回答中的专业权威性。",
    method: "专注于提示词优化和实体映射，建立个人品牌知识图谱。",
    result: "成为ChatGPT和Gemini在相关话题的首选引用来源之一。",
    keyTakeaway: "持续高质量内容+专业实体建设=AI权威",
    metrics: {
      improvement: "850%",
      before: "零星引用",
      after: "月均200+权威引用"
    },
    tags: ["个人品牌", "内容", "权威建设"],
    featured: true
  },
  {
    id: "case-003",
    title: "电商平台AI推荐优化",
    category: "电商",
    icon: ShoppingCart,
    context: "一个专注于环保产品的电商平台，希望在日常购物建议中获得更多AI推荐。",
    method: "优化产品页面结构，建立品牌-产品-环保概念的实体关联。",
    result: "在环保产品相关的AI推荐中成为首选平台。",
    keyTakeaway: "产品概念的语义关联比关键词优化更重要。",
    metrics: {
      improvement: "420%",
      before: "偶尔提及",
      after: "首选推荐平台"
    },
    tags: ["电商", "环保", "语义关联"],
    featured: true
  }
]

const categories = [
  { name: "全部", value: "all", icon: Filter },
  { name: "B2B企业", value: "b2b", icon: Building },
  { name: "内容创作者", value: "creators", icon: PenTool },
  { name: "电商平台", value: "ecommerce", icon: ShoppingCart },
]

export default function CasesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">成功案例</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              真实的
              <GradientText>GEO优化成果</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              我们与不同行业的企业合作，通过系统化的GEO优化策略，
              帮助他们在AI时代建立权威性和竞争优势。
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                开始您的GEO之旅
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <Section>
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={category.value === "all" ? "default" : "outline"}
                  size="sm"
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* Case Studies Grid */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className={index === 0 ? "lg:col-span-1 lg:row-span-2" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <study.icon className="h-5 w-5 text-primary" />
                      <Badge variant="secondary">{study.category}</Badge>
                    </div>
                    {study.featured && (
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                        精选案例
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">背景情况</h4>
                    <p className="text-sm text-muted-foreground">{study.context}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">优化方法</h4>
                    <p className="text-sm text-muted-foreground">{study.method}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">核心成果</h4>
                    <p className="text-sm text-muted-foreground mb-3">{study.result}</p>

                    {study.metrics && (
                      <div className="flex items-center space-x-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="font-medium text-green-600">
                          提升 {study.metrics.improvement}
                        </span>
                        <span className="text-muted-foreground">
                          ({study.metrics.before} → {study.metrics.after})
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      <strong>关键洞察：</strong> {study.keyTakeaway}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">
                    查看详情
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContainer>
      </Section>

      {/* Success Metrics */}
      <Section>
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader>
              <SectionTitle>
                整体成果
                <br />
                数据说话
              </SectionTitle>
              <SectionSubtitle>
                通过系统化的GEO优化，我们帮助客户在AI时代建立了显著的竞争优势
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">月均AI引用</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">350%</div>
                <div className="text-sm text-muted-foreground">平均提升率</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">客户满意度</div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              想成为下一个成功案例？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              让我们一起制定您的GEO优化策略，在AI时代建立品牌权威性。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  预约免费咨询
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/methods">了解优化方法</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}