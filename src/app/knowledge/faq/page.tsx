import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, HelpCircle, Search, Users, TrendingUp, Shield, Wrench, Brain, BookOpen, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO常见问题 - 生成式引擎优化问答",
  description: "快速解答GEO相关疑问，涵盖基础认知、方法论、技术工具、行业应用等各个方面。",
  keywords: ["GEO问答", "生成式引擎优化问题", "AI搜索优化", "GEO FAQ"],
}

const faqCategories = [
  {
    id: "basics",
    title: "基础认知",
    description: "GEO的基本概念和原理",
    icon: HelpCircle,
    color: "blue",
    questions: [
      {
        q: "什么是GEO（生成式引擎优化）？",
        a: "GEO是\"Generative Engine Optimization\"的缩写，意为生成式引擎优化。它是专门针对ChatGPT、Gemini等生成式AI模型的优化策略，旨在让AI更容易理解、信任和引用您的网站内容，从而在AI生成的回答中获得有利呈现。"
      },
      {
        q: "GEO和传统SEO有什么根本区别？",
        a: "SEO的目标是在搜索结果链接列表中获得高排名以吸引点击，而GEO的目标是让品牌信息成为AI生成的综合性回答的一部分。SEO针对搜索引擎算法，GEO针对大型语言模型；SEO追求流量，GEO追求在AI答案中的权威呈现。"
      },
      {
        q: "为什么GEO现在变得如此重要？",
        a: "随着越来越多用户直接从AI生成的答案中获取信息而非点击链接，传统的SEO策略效果逐渐减弱。GEO确保品牌在\"零点击\"搜索环境中仍能保持可见性和影响力，是AI时代营销的必备策略。"
      },
      {
        q: "哪些AI平台是GEO的优化目标？",
        a: "主要包括ChatGPT、Google Gemini、百度的文心一言、字节的豆包、阿里的通义千问等大型语言模型，以及基于这些模型构建的AI搜索和问答系统。"
      }
    ]
  },
  {
    id: "methodology",
    title: "方法论与实践",
    description: "GEO的具体实施方法和技巧",
    icon: Brain,
    color: "green",
    questions: [
      {
        q: "GEO优化的整体方法论是什么？",
        a: "GEO优化包括战略和战术两个层面。战略层面：明确目标受众、制定内容策略、建立权威体系；战术层面：实体映射、提示词优化、结构化数据、交叉链接、质量评估等具体技术手段。"
      },
      {
        q: "如何进行实体映射优化？",
        a: "实体映射包括：1）识别核心实体（人物、组织、产品等）；2）建立实体间的关系图谱；3）使用Schema.org标记；4）确保实体信息的一致性和准确性；5）在权威平台建立实体档案。"
      },
      {
        q: "什么是\"答案优先\"的内容架构？",
        a: "答案优先是一种专门为AI设计的内容结构：开头直接回答核心问题，然后提供详细解释和支持数据，最后总结关键信息。这种结构便于AI快速提取和理解核心内容。"
      },
      {
        q: "如何优化内容以提高AI引用率？",
        a: "关键技巧包括：使用清晰的结构化格式；提供准确、具体的数据和事实；建立权威性引用；保持内容的时效性；使用自然语言而非关键词堆砌；确保内容的深度和完整性。"
      }
    ]
  },
  {
    id: "tools",
    title: "技术与工具",
    description: "GEO相关的工具和技术支持",
    icon: Wrench,
    color: "purple",
    questions: [
      {
        q: "有没有工具可以监测品牌在AI回答中的出现？",
        a: "是的，新一代GEO监测工具正在快速发展，如Brandwatch、Talkwalker等社交媒体监测平台已开始支持AI内容监测。专门的GEO工具如Profound、Prelab等也在不断涌现。"
      },
      {
        q: "如何验证结构化数据的正确性？",
        a: "可以使用Google的结构化数据测试工具、Schema.org的验证器、以及各种SEO工具的结构化数据检查功能。关键是确保标记格式正确、层级关系合理、属性完整。"
      },
      {
        q: "需要哪些技术能力来实施GEO？",
        a: "基础GEO实施需要：内容创作能力、基础的HTML知识、Schema.org标记技能。高级GEO实施还需要：数据分析能力、API集成、向量数据库操作、AI模型调优等技术能力。"
      },
      {
        q: "如何测试GEO策略的效果？",
        a: "可以通过：1）AI查询测试：用相关问题查询AI，观察是否引用您的内容；2）品牌监测工具：跟踪品牌在AI回答中的出现频率；3）用户调研：了解用户如何通过AI了解您的品牌；4）流量分析：间接评估AI带来的品牌影响。"
      }
    ]
  },
  {
    id: "industry",
    title: "行业应用",
    description: "不同行业的GEO实施策略",
    icon: Users,
    color: "orange",
    questions: [
      {
        q: "GEO在B2C电商领域如何应用？",
        a: "在电商领域，GEO可以：1）优化产品页面让AI推荐您的产品；2）建立品牌权威让AI在购物建议中提及；3）创建比较内容帮助AI做产品推荐；4）提供详细的产品信息供AI引用。"
      },
      {
        q: "B2B企业如何实施GEO策略？",
        a: "B2B企业的GEO重点：1）发布行业研究报告和洞察；2）建立公司和个人专家的权威形象；3）创建技术白皮书和解决方案指南；4）在专业平台建立思想领导力。"
      },
      {
        q: "内容创作者如何利用GEO？",
        a: "内容创作者可以：1）创建深度、原创的专业内容；2）建立个人品牌和专业权威；3）使用结构化格式提高内容可理解性；4）持续更新内容保持时效性；5）在多个平台建立内容矩阵。"
      },
      {
        q: "哪些行业最先受到GEO影响？",
        a: "信息密集型行业首当其冲：医疗健康、金融服务、教育培训、科技产品、法律咨询、旅游服务等。这些行业的用户在决策前需要进行大量信息研究，正是AI最擅长替代的环节。"
      }
    ]
  },
  {
    id: "measurement",
    title: "效果与衡量",
    description: "GEO效果的评估和衡量方法",
    icon: TrendingUp,
    color: "teal",
    questions: [
      {
        q: "GEO的效果该如何定义和衡量？",
        a: "GEO效果可从三个层面衡量：1）曝光层面：品牌在AI回答中的出现频率和位置；2）引导层面：通过AI了解品牌后的后续行为；3）转化层面：最终的商业价值和ROI。需要建立综合的评估体系。"
      },
      {
        q: "GEO不直接带来流量，如何证明其价值？",
        a: "虽然GEO可能不直接带来网站流量，但其价值体现在：1）品牌知名度和权威性提升；2）用户心智占有率增加；3）线下和间接转化增长；4）竞争优势建立；5）未来AI搜索趋势的提前布局。"
      },
      {
        q: "如何建立GEO效果监测体系？",
        a: "建议建立：1）AI查询监测：定期查询相关问题，记录品牌出现情况；2）品牌提及监测：使用工具监控全网AI内容中的品牌提及；3）用户调研：了解用户AI使用习惯和品牌认知；4）业务指标：关注间接的业务影响。"
      },
      {
        q: "GEO投资的回报周期是多长？",
        a: "GEO是长期投资策略，回报周期通常6-18个月。短期内可能看不到明显效果，但随着AI搜索的普及和内容权威性的积累，长期回报会越来越明显。建议采用持续投入、逐步见效的策略。"
      }
    ]
  },
  {
    id: "challenges",
    title: "挑战与误区",
    description: "GEO实施中的常见问题和误区",
    icon: Shield,
    color: "red",
    questions: [
      {
        q: "GEO最大的挑战是什么？",
        a: "GEO最大的挑战在于不确定性：1）AI算法的不可预测性；2）效果监测的困难；3）ROI量化的复杂性；4）快速变化的技术环境；5）缺乏成熟的工具和方法论。需要适应这种不确定性并保持灵活性。"
      },
      {
        q: "GEO实施中有哪些常见误区？",
        a: "常见误区包括：1）用SEO思维做GEO，过分关注关键词；2）试图\"欺骗\"AI而不是提供价值；3）期望立竿见影的效果；4）忽视内容质量只关注技术；5）缺乏长期坚持的耐心。"
      },
      {
        q: "如何避免GEO中的版权风险？",
        a: "避免版权风险：1）创作原创内容而非复制；2）合理使用引用并标注来源；3）避免过度借鉴他人内容；4）了解相关法律法规；5）建立内容审核机制。尊重知识产权是GEO的基础原则。"
      },
      {
        q: "小资源团队如何有效实施GEO？",
        a: "小团队可以：1）专注核心领域建立深度权威；2）选择关键平台重点投入；3）利用自动化工具提高效率；4）与其他权威机构合作；5）持续学习适应变化。关键是要专注和坚持，而不是面面俱到。"
      }
    ]
  }
]

const quickActions = [
  {
    title: "深入学习",
    description: "查看详细的GEO教程",
    href: "/knowledge/guides",
    icon: BookOpen
  },
  {
    title: "实践案例",
    description: "学习成功的GEO案例",
    href: "/cases",
    icon: CheckCircle
  },
  {
    title: "专业咨询",
    description: "获取个性化GEO建议",
    href: "/contact",
    icon: Users
  }
]

// FAQ页面组件
export default function FAQPage() {

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">知识中心</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <GradientText>GEO常见问题</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              快速解答关于生成式引擎优化的常见疑问，
              涵盖基础认知、方法论、技术工具、行业应用等各个方面。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#faq-categories">
                  浏览问题
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/knowledge/basics">学习基础</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 搜索提示 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-4xl mx-auto text-center">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Search className="h-6 w-6 text-blue-500" />
                  <h3 className="text-lg font-semibold">快速查找答案</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  您可以使用 Ctrl+F (Windows) 或 Cmd+F (Mac) 在页面中搜索特定关键词，
                  快速定位到相关问题和答案。
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["基础概念", "实施方法", "效果测量", "工具使用", "行业应用"].map((tag) => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* FAQ分类内容 */}
      <Section id="faq-categories">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>问题分类</SectionTitle>
            <SectionSubtitle>
              按主题分类的GEO问答，方便您快速找到所需信息
            </SectionSubtitle>
          </SectionHeader>

          <div className="space-y-12 max-w-6xl mx-auto">
            {faqCategories.map((category) => (
              <div key={category.id} className="scroll-mt-24" id={category.id}>
                <Card className="overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r from-${category.color}-500/5 to-${category.color}-600/5`}>
                    <div className="flex items-center space-x-3">
                      <div className={`h-12 w-12 rounded-xl bg-${category.color}-500/10 flex items-center justify-center`}>
                        <category.icon className={`h-6 w-6 text-${category.color}-500`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{category.title}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {category.description}
                        </CardDescription>
                        <Badge variant="outline" className="mt-2">
                          {category.questions.length} 个问题
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {category.questions.map((faq, index) => (
                        <div key={index} className="border-l-4 border-l-primary/20 pl-6">
                          <h3 className="text-lg font-semibold mb-3 text-primary">
                            Q: {faq.q}
                          </h3>
                          <div className="bg-muted/30 rounded-lg p-4">
                            <p className="text-sm leading-relaxed">
                              <span className="font-semibold text-green-600 dark:text-green-400">A: </span>
                              {faq.a}
                            </p>
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

      {/* 热门问题 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader>
              <SectionTitle>热门问题</SectionTitle>
              <SectionSubtitle>
                用户最常问的GEO问题
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-lg">🔥 最热门</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    什么是GEO？它和传统SEO有什么区别？
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#basics">查看答案</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg">📈 效果相关</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    如何衡量GEO的效果和ROI？
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#measurement">查看答案</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg">🛠️ 实施方法</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    小团队如何有效实施GEO策略？
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#challenges">查看答案</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-lg">🏢 行业应用</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    电商企业如何利用GEO提升销量？
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#industry">查看答案</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 快速行动 */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>继续探索</SectionTitle>
            <SectionSubtitle>
              基于您的兴趣继续学习GEO
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickActions.map((action) => (
              <Card key={action.title} className="text-center hover-lift">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <action.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {action.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={action.href}>
                      立即开始
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
              还有其他问题？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              如果您没有找到所需答案，欢迎联系我们的专家团队获取个性化解答。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  联系专家
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/knowledge/guides">查看详细教程</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}