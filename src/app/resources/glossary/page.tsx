"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, Search, BookOpen, Lightbulb, Target, Brain, Database, Zap, Globe, TrendingUp, Users, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"

const glossaryItems = [
  {
    term: "生成式引擎优化 (GEO)",
    category: "核心概念",
    definition: "为生成式AI模型优化内容的过程，确保品牌信息能被AI准确理解、抓取并整合到生成的对话式回答中。",
    example: "通过GEO优化，我们的产品在ChatGPT相关查询中的引用率提升了300%。",
    related: ["SEO", "AI搜索", "对话式搜索"],
    difficulty: "基础"
  },
  {
    term: "实体映射",
    category: "技术实施",
    definition: "将现实世界中的概念、对象、关系转化为AI可以理解和处理的结构化数据的过程，包括实体识别、属性定义和关系建立。",
    example: "为公司产品创建Schema.org Product标记，包含价格、规格、评价等属性。",
    related: ["知识图谱", "Schema.org", "结构化数据"],
    difficulty: "中级"
  },
  {
    term: "知识图谱",
    category: "技术实施",
    definition: "由实体及其相互关系组成的语义网络，帮助AI理解概念之间的逻辑联系和层次结构。",
    example: "建立品牌-产品-行业-竞争对手的完整知识图谱。",
    related: ["实体映射", "语义网络", "关系数据库"],
    difficulty: "中级"
  },
  {
    term: "提示词优化",
    category: "内容策略",
    definition: "设计和优化内容结构、表述方式，使其更符合AI模型处理逻辑，提高被理解和引用的概率。",
    example: "将产品描述改写为问答形式，直接回答用户可能提出的问题。",
    related: ["查询意图", "内容结构", "AI友好"],
    difficulty: "高级"
  },
  {
    term: "结构化数据",
    category: "技术实施",
    definition: "使用标准化的格式（如Schema.org）标记网页内容，让搜索引擎和AI更好地理解页面信息和结构。",
    example: "为文章添加Article schema，包含标题、作者、发布时间等信息。",
    related: ["Schema.org", "JSON-LD", "微数据"],
    difficulty: "中级"
  },
  {
    term: "Schema.org",
    category: "技术实施",
    definition: "由Google、Microsoft、Yahoo等共同发起的结构化数据标准，提供了一套通用的词汇表来描述网页内容。",
    example: "使用Organization schema标记公司信息，包括Logo、联系方式、社交账号等。",
    related: ["结构化数据", "JSON-LD", "词汇表"],
    difficulty: "中级"
  },
  {
    term: "零点击搜索",
    category: "行业趋势",
    definition: "用户在搜索结果页面直接获得答案，无需点击访问任何网站的现象，常见于AI搜索和特色摘要。",
    example: "用户询问'巴黎人口数量'，直接在搜索结果看到答案，不点击任何链接。",
    related: ["AI搜索", "特色摘要", "用户体验"],
    difficulty: "基础"
  },
  {
    term: "对话式搜索",
    category: "行业趋势",
    definition: "用户通过与AI助手进行自然语言对话来获取信息的方式，强调交互性和上下文理解。",
    example: "用户向ChatGPT询问'推荐适合初学者的编程语言'并继续追问相关问题。",
    related: ["AI搜索", "自然语言处理", "上下文理解"],
    difficulty: "基础"
  },
  {
    term: "AI可见性",
    category: "效果评估",
    definition: "品牌或内容在AI生成回答中被提及、引用或推荐的程度和频率。",
    example: "监测品牌在ChatGPT关于行业问题的回答中的出现频率。",
    related: ["引用率", "品牌权威", "AI影响"],
    difficulty: "基础"
  },
  {
    term: "实体权威性",
    category: "效果评估",
    definition: "AI模型对特定实体在特定领域内的专业性和可信度的评估，影响其在相关回答中的引用优先级。",
    example: "建立公司在AI金融领域的专家形象，提高在相关问题中的引用概率。",
    related: ["专业知识", "品牌权威", "信任信号"],
    difficulty: "高级"
  },
  {
    term: "语义搜索",
    category: "技术概念",
    definition: "基于查询意图和内容语义而非关键词匹配的搜索方式，更好地理解用户需求和内容含义。",
    example: "搜索'附近好吃的餐厅'，理解用户想要的是餐厅推荐而非字面匹配。",
    related: ["查询意图", "自然语言处理", "相关性算法"],
    difficulty: "中级"
  },
  {
    term: "查询意图",
    category: "用户行为",
    definition: "用户进行搜索时的真实需求和目的，包括信息查询、导航需求、交易意图等类型。",
    example: "用户搜索'最佳相机'的意图是获取购买建议而非相机技术参数。",
    related: ["用户需求", "搜索行为", "意图分类"],
    difficulty: "基础"
  },
  {
    term: "JSON-LD",
    category: "技术实施",
    definition: "一种轻量级的链接数据格式，用于在网页中嵌入结构化数据，是Schema.org标记的推荐实现方式。",
    example: "在HTML head中添加script标签，包含组织的JSON-LD结构化数据。",
    related: ["Schema.org", "结构化数据", "链接数据"],
    difficulty: "中级"
  },
  {
    term: "内容权威性",
    category: "内容策略",
    definition: "内容在特定领域的专业深度、准确性和可信度，影响AI模型对其的信任和引用程度。",
    example: "发布经过专家审核的行业报告，建立内容权威性。",
    related: ["专家内容", "事实准确性", "专业深度"],
    difficulty: "高级"
  },
  {
    term: "AI信任信号",
    category: "效果评估",
    definition: "帮助AI模型评估内容可信度的各种指标和信号，包括来源权威性、事实准确性、更新频率等。",
    example: "定期更新内容、引用权威来源、提供作者信息等建立AI信任信号。",
    related: ["信任度", "内容质量", "权威信号"],
    difficulty: "高级"
  },
  {
    term: "交叉引用",
    category: "技术实施",
    definition: "在不同内容之间建立关联链接，帮助AI理解信息的相关性和完整性。",
    example: "在产品页面链接到相关教程、使用指南和常见问题解答。",
    related: ["内部链接", "内容关联", "知识网络"],
    difficulty: "中级"
  },
  {
    term: "实体消歧",
    category: "技术实施",
    definition: "区分同名或相似实体，确保AI能够准确识别和引用正确的实体。",
    example: "区分'Apple'作为水果公司和作为水果的不同含义。",
    related: ["实体识别", "语义消歧", "上下文理解"],
    difficulty: "高级"
  },
  {
    term: "领域适应性",
    category: "优化策略",
    definition: "根据不同行业领域特点和AI模型在该领域的表现特征，调整GEO优化策略。",
    example: "医疗行业需要更加重视准确性和权威性，电商行业侧重产品特性描述。",
    related: ["行业特点", "定制化策略", "专业优化"],
    difficulty: "高级"
  },
  {
    term: "提示词工程",
    category: "技术实施",
    definition: "设计和优化给AI模型的指令和提示，以获得更准确、相关的回答的技术和方法。",
    example: "为产品描述设计专门的提示词模板，引导AI生成更好的介绍。",
    related: ["提示词优化", "AI交互", "回答质量"],
    difficulty: "高级"
  },
  {
    term: "多模态优化",
    category: "技术实施",
    definition: "同时优化文本、图片、视频等多种内容格式，提升AI对多媒体内容的理解和处理。",
    example: "为产品图片添加详细的alt文本和结构化描述。",
    related: ["图片SEO", "视频优化", "多媒体内容"],
    difficulty: "高级"
  }
]

const categories = ["全部", "核心概念", "技术实施", "内容策略", "效果评估", "行业趋势", "用户行为", "技术概念", "优化策略"]

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("全部")

  const filteredItems = glossaryItems.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "全部" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">资源库</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <GradientText>GEO术语库</GradientText>
              <br />
              专业词汇大全
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              完整的GEO领域专业术语解释，帮助您快速掌握生成式引擎优化的核心概念和技术要点。
              从基础概念到高级技术，全方位解析GEO知识体系。
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="搜索术语..."
                  className="pl-10 pr-4 py-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 分类过滤 */}
      <Section>
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="text-center text-sm text-muted-foreground">
              显示 <span className="font-semibold text-primary">{filteredItems.length}</span> 个专业术语
              {searchTerm && ` (搜索: "${searchTerm}")`}
              {selectedCategory !== "全部" && ` (分类: ${selectedCategory})`}
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 术语列表 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <CardTitle className="text-xl">{item.term}</CardTitle>
                          <Badge variant="outline">{item.category}</Badge>
                          <Badge
                            variant={
                              item.difficulty === "基础" ? "default" :
                              item.difficulty === "中级" ? "secondary" : "destructive"
                            }
                          >
                            {item.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed">{item.definition}</p>

                    {item.example && (
                      <div className="bg-primary/5 rounded-lg p-3">
                        <h5 className="font-semibold text-sm mb-1 flex items-center">
                          <Lightbulb className="h-4 w-4 mr-1 text-primary" />
                          示例
                        </h5>
                        <p className="text-sm text-muted-foreground italic">{item.example}</p>
                      </div>
                    )}

                    {item.related && item.related.length > 0 && (
                      <div>
                        <h5 className="font-semibold text-sm mb-2">相关术语</h5>
                        <div className="flex flex-wrap gap-1">
                          {item.related.map((relatedTerm, termIndex) => (
                            <Badge key={termIndex} variant="secondary" className="text-xs">
                              {relatedTerm}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 学习建议 */}
      <Section>
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader className="text-center">
              <SectionTitle>如何有效使用术语库</SectionTitle>
              <SectionSubtitle>
                提高学习效率的使用建议
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">按需学习</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    根据当前项目需求，重点学习相关的术语概念，建立完整的知识框架。
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                    <Brain className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">理解关联</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    关注术语之间的关联关系，建立概念网络，加深对GEO体系的理解。
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                    <Database className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">实践应用</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    将术语概念应用到实际项目中，通过实践加深理解并掌握使用技巧。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 相关资源 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>相关学习资源</SectionTitle>
            <SectionSubtitle>
              深入学习GEO的推荐资源
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">操作教程</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  系统化的GEO学习教程
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/knowledge/guides">开始学习</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">深度报告</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  最新的GEO行业研究报告
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/knowledge/research">查看报告</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">提示词实验室</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  实验和测试优化策略
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/knowledge/prompt-lab">进入实验</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">实用工具</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  提高效率的专业工具
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
              想要深入学习GEO？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              从术语概念到实战应用，我们为您提供完整的学习路径和专业支持。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/knowledge/guides">
                  开始系统学习
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">获取专业指导</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}