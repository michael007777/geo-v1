import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { ArrowRight, TrendingUp, Users, Eye } from "lucide-react"

const caseStudies = [
  {
    id: "case-001",
    title: "B2B科技公司AI引用率提升300%",
    category: "B2B企业",
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

export const CaseStudiesSection = () => {
  return (
    <Section>
      <SectionContainer>
        <SectionHeader>
          <Badge className="mb-4">成功案例</Badge>
          <SectionTitle>
            真实的
            <br />
            GEO优化成果
          </SectionTitle>
          <SectionSubtitle>
            我们与不同行业的企业合作，通过系统化的GEO优化策略，
            帮助他们在AI时代建立权威性和竞争优势。
          </SectionSubtitle>
        </SectionHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className={index === 0 ? "lg:col-span-1 lg:row-span-2" : ""}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{study.category}</Badge>
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
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      <strong>关键洞察：</strong> {study.keyTakeaway}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/cases">
              查看更多案例
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </SectionContainer>
    </Section>
  )
}