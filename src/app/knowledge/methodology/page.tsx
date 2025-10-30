import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, Brain, Zap, Shield, Code, Search, FileText, CheckCircle, AlertTriangle, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO方法论 - 生成式引擎优化的核心技术",
  description: "深入理解GEO技术原理，掌握AI答案生成过程，学习结构化数据优化技巧。",
  keywords: ["GEO方法论", "AI搜索技术", "RAG架构", "结构化数据", "内容优化策略"],
}

const methodologySections = [
  {
    id: "core-technology",
    title: "核心技术揭秘",
    description: "理解大型语言模型在生成式搜索中的作用机制",
    icon: Brain,
    topics: [
      {
        title: "大型语言模型（LLM）基础",
        content: "LLM是生成式AI的核心技术，通过海量文本数据训练，能够理解和生成人类语言。",
        keyPoints: [
          "Transformer架构：注意力机制的核心作用",
          "预训练与微调：模型能力的构建过程",
          "参数规模：模型能力与参数量的关系",
          "多模态能力：文本、图像、音频的综合理解"
        ],
        codeExample: {
          title: "LLM处理查询的基本流程",
          code: `// 简化的LLM查询处理流程
async function processLLMQuery(query: string) {
  // 1. 查询预处理
  const processedQuery = preprocessQuery(query);

  // 2. 语义向量检索
  const relevantDocs = await vectorSearch(processedQuery);

  // 3. 上下文构建
  const context = buildContext(relevantDocs, processedQuery);

  // 4. 生成回答
  const response = await generateResponse(context, processedQuery);

  return response;
}`
        }
      },
      {
        title: "RAG（检索增强生成）架构",
        content: "RAG是现代AI搜索引擎的核心架构，结合了检索和生成的优势。",
        keyPoints: [
          "检索阶段：从知识库中找到相关信息",
          "排序阶段：根据相关性对结果排序",
          "生成阶段：基于检索结果生成答案",
          "优化方向：提高检索准确性和生成质量"
        ]
      }
    ],
    difficulty: "技术",
    duration: "45分钟"
  },
  {
    id: "ai-answer-process",
    title: "AI答案的生成过程",
    description: "深入了解从用户提问到AI给出答案的完整流程",
    icon: Search,
    topics: [
      {
        title: "查询理解与意图识别",
        content: "AI首先需要理解用户的真实意图，然后才能提供准确的回答。",
        keyPoints: [
          "意图分类：信息型、事务型、导航型、比较型",
          "实体识别：提取关键实体和关系",
          "上下文理解：考虑对话历史和用户背景",
          "歧义消解：处理模糊不清的查询"
        ]
      },
      {
        title: "信息检索与筛选",
        content: "基于理解的结果，AI从海量信息中检索和筛选最相关的内容。",
        keyPoints: [
          "向量检索：基于语义相似度的匹配",
          "知识图谱：实体关系的结构化表示",
          "权威性评估：信息来源的可信度判断",
          "时效性过滤：优先选择最新和相关信息"
        ]
      },
      {
        title: "答案生成与优化",
        content: "最后阶段，AI将检索到的信息整合成用户友好的答案。",
        keyPoints: [
          "内容整合：多源信息的有机融合",
          "语言表达：自然流畅的文本生成",
          "引用标注：标明信息来源和出处",
          "质量评估：答案准确性和完整性检查"
        ]
      }
    ],
    difficulty: "进阶",
    duration: "60分钟"
  },
  {
    id: "content-structure",
    title: "内容结构与格式优化",
    description: "学习如何组织内容以提高AI理解和引用的概率",
    icon: FileText,
    topics: [
      {
        title: "答案优先的内容架构",
        content: "专门为迎合AI答案引擎设计的内容组织方式。",
        keyPoints: [
          "直接回答开头：开门见山提供核心信息",
          "结构化展开：按逻辑层次展开详细说明",
          "事实支撑：用数据和案例支持观点",
          "总结强调：重申关键信息便于记忆"
        ],
        codeExample: {
          title: "答案优先内容结构模板",
          code: `# 文章标题：清晰描述主题

## 核心答案（直接回答）
[开门见山，直接回答用户的核心问题]

## 详细说明
### 要点1
[详细阐述第一个要点]
- 支撑事实
- 具体数据
- 相关案例

### 要点2
[详细阐述第二个要点]

## 总结
[重申关键信息，便于AI引用]`
        }
      },
      {
        title: "结构化数据实施",
        content: "使用Schema.org等标准提高内容的机器可读性。",
        keyPoints: [
          "Schema选择：根据内容类型选择合适的标记",
          "JSON-LD格式：推荐的实现方式",
          "层级关系：正确表示内容的层次结构",
          "属性完整性：确保所有重要属性都有标记"
        ]
      }
    ],
    difficulty: "实践",
    duration: "50分钟"
  },
  {
    id: "legal-ethical",
    title: "法律与道德考量",
    description: "了解GEO实践中的法律风险和道德边界",
    icon: Shield,
    topics: [
      {
        title: "版权与知识产权",
        content: "GEO实践需要特别注意版权相关的法律风险。",
        keyPoints: [
          "内容原创性：避免直接复制受版权保护的内容",
          "合理使用：在合理范围内引用他人作品",
          "署名要求：正确标注信息来源和作者",
          "侵权风险：了解潜在的侵权后果"
        ]
      },
      {
        title: "AI伦理与透明度",
        content: "负责任地使用AI技术，维护信息的准确性和公平性。",
        keyPoints: [
          "信息准确性：确保提供的信息真实可靠",
          "偏见消除：避免内容中的歧视和偏见",
          "透明度原则：明确标识AI生成内容",
          "用户知情：让用户了解内容的局限性"
        ]
      }
    ],
    difficulty: "重要",
    duration: "30分钟"
  }
]

const practicalTips = [
  {
    title: "内容质量第一",
    description: "无论技术如何优化，高质量的内容始终是GEO成功的基础。",
    type: "success"
  },
  {
    title: "用户体验优先",
    description: "在考虑AI优化的同时，不要忽视人类用户的阅读体验。",
    type: "success"
  },
  {
    title: "避免过度优化",
    description: "不要为了迎合AI而牺牲内容的自然性和可读性。",
    type: "warning"
  },
  {
    title: "持续监测效果",
    description: "定期检查内容在AI搜索中的表现，及时调整策略。",
    type: "success"
  }
]

export default function MethodologyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">知识中心</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <GradientText>GEO方法论</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              深入理解生成式AI的技术原理，掌握AI答案生成的完整过程，
              学习系统性的GEO实施方法和最佳实践。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#methodology-content">
                  开始学习
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/knowledge/basics">回顾基础</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 学习路径 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader className="text-center">
              <SectionTitle>学习路径建议</SectionTitle>
              <SectionSubtitle>
                循序渐进地掌握GEO方法论
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: 1, title: "技术原理", desc: "理解LLM和RAG", difficulty: "技术" },
                { step: 2, title: "生成过程", desc: "了解AI如何思考", difficulty: "进阶" },
                { step: 3, title: "内容优化", desc: "学习结构化技巧", difficulty: "实践" },
                { step: 4, title: "法律道德", desc: "规避风险边界", difficulty: "重要" }
              ].map((item) => (
                <Card key={item.step} className="text-center">
                  <CardHeader>
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                      {item.step}
                    </div>
                    <CardTitle className="text-sm">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground mb-2">{item.desc}</p>
                    <Badge variant="outline" className="text-xs">{item.difficulty}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 方法论内容 */}
      <Section id="methodology-content">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>核心方法体系</SectionTitle>
            <SectionSubtitle>
              系统学习GEO的技术原理和实施方法
            </SectionSubtitle>
          </SectionHeader>

          <div className="space-y-16 max-w-6xl mx-auto">
            {methodologySections.map((section) => (
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
                    <div className="space-y-8">
                      {section.topics.map((topic, index) => (
                        <div key={index} className="border-l-4 border-l-primary/20 pl-6">
                          <h3 className="text-xl font-semibold mb-4">{topic.title}</h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                            {topic.content}
                          </p>

                          {/* 核心要点 */}
                          <div className="bg-muted/30 rounded-lg p-4 mb-6">
                            <h4 className="font-semibold mb-3 flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                              核心要点
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {topic.keyPoints.map((point, pointIndex) => (
                                <div key={pointIndex} className="flex items-start space-x-2">
                                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                  <span className="text-sm">{point}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* 代码示例 */}
                          {topic.codeExample && (
                            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                              <h4 className="font-semibold mb-3 text-sm text-slate-300">
                                {topic.codeExample.title}
                              </h4>
                              <pre className="text-sm">
                                <code>{topic.codeExample.code}</code>
                              </pre>
                            </div>
                          )}
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

      {/* 实践建议 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader>
              <SectionTitle>实践建议</SectionTitle>
              <SectionSubtitle>
                提高GEO实施效果的关键要点
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practicalTips.map((tip, index) => (
                <Card key={index} className={`border-l-4 ${
                  tip.type === 'success' ? 'border-l-green-500' : 'border-l-orange-500'
                }`}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      {tip.type === 'success' ? (
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                      )}
                      {tip.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 相关资源 */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>继续学习</SectionTitle>
            <SectionSubtitle>
              基于方法论的相关学习资源
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">实战工具</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  学习使用专业的GEO工具和技术
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/knowledge/tools">
                    查看工具
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">案例分析</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  查看真实的GEO实施案例
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/cases">
                    查看案例
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">操作指南</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  获取详细的实施步骤指导
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/knowledge/guides">
                    查看指南
                    <ArrowRight className="ml-2 h-4 w-4" />
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
              准备实施GEO策略？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              现在您已经掌握了GEO的方法论，开始在实际项目中应用这些知识。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/tools">
                  开始实践
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">获取专业咨询</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}