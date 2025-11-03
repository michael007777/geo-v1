import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { PromptPlayground } from "@/components/sections/prompt-playground"
import { PromptTemplateCard } from "@/components/sections/prompt-template-card"
import {
  Beaker,
  Sparkles,
  Zap,
  Target,
  Code,
  Book,
  TestTube,
  FlaskRound as Flask,
  Settings,
  ChevronRight,
  Copy,
  Play,
  Save,
  Share
} from "lucide-react"

export const metadata: Metadata = {
  title: "提示词实验室 - GEO优化研究院",
  description: "专业的提示词工程实验室，提供交互式提示词测试、模板库、最佳实践和实时优化工具。掌握AI对话的核心技术，让AI输出更精准。",
  keywords: ["提示词工程", "prompt engineering", "AI对话优化", "LLM提示", "提示词模板", "AI实验室"],
}

// 提示词模板数据
const promptTemplates = [
  {
    id: "chain-of-thought",
    title: "思维链提示",
    category: "推理增强",
    difficulty: "中级",
    description: "引导AI逐步思考复杂问题，提高推理准确性",
    template: `请按以下步骤思考这个问题：

1. 分析问题的核心要素
2. 识别关键约束条件
3. 逐步推导解决方案
4. 验证结果的合理性

问题：{user_question}

请详细展示你的思考过程。`,
    examples: ["数学问题求解", "逻辑推理题", "代码调试"],
    successRate: 89,
    useCases: 1250,
    color: "from-blue-600 to-cyan-600"
  },
  {
    id: "role-based",
    title: "角色扮演提示",
    category: "专业领域",
    difficulty: "初级",
    description: "设定专业角色，获得更精准的领域专业知识",
    template: `你是一位经验丰富的{role}，在{industry}领域工作{experience}年。

你的专长包括：
- {expertise_1}
- {expertise_2}
- {expertise_3}

请以专业身份回答以下问题：{user_query}

要求：
1. 使用专业但易懂的语言
2. 提供实用的建议
3. 考虑实际应用场景`,
    examples: ["医生咨询", "法律建议", "技术方案"],
    successRate: 92,
    useCases: 2100,
    color: "from-purple-600 to-pink-600"
  },
  {
    id: "few-shot-learning",
    title: "少样本学习",
    category: "学习优化",
    difficulty: "高级",
    description: "通过示例快速教会AI新的任务和格式",
    template: `以下是一些{task_type}的示例：

示例1：
输入：{example_1_input}
输出：{example_1_output}

示例2：
输入：{example_2_input}
输出：{example_2_output}

示例3：
输入：{example_3_input}
输出：{example_3_output}

现在请处理新的输入：
输入：{user_input}
输出：`,
    examples: ["文本分类", "数据格式转换", "风格模仿"],
    successRate: 85,
    useCases: 890,
    color: "from-green-600 to-emerald-600"
  },
  {
    id: "structured-output",
    title: "结构化输出",
    category: "格式控制",
    difficulty: "中级",
    description: "控制AI输出特定格式，便于程序处理",
    template: `请严格按照以下JSON格式输出：

{
  "summary": "任务总结",
  "analysis": {
    "key_points": ["要点1", "要点2"],
    "risks": ["风险1", "风险2"],
    "opportunities": ["机会1", "机会2"]
  },
  "recommendation": {
    "primary": "主要建议",
    "alternative": "备选方案",
    "timeline": "时间计划"
  },
  "confidence_score: 0.85
}

基于以下内容：{input_content}`,
    examples: ["数据分析报告", "项目评估", "商业计划"],
    successRate: 94,
    useCases: 1560,
    color: "from-orange-600 to-red-600"
  }
]

// 技术指标数据
const performanceMetrics = [
  {
    metric: "提示词模板库",
    value: "200+",
    description: "专业设计的提示词模板",
    icon: Book,
    color: "from-blue-500 to-cyan-500"
  },
  {
    metric: "成功率提升",
    value: "78%",
    description: "使用优化提示词后的平均提升",
    icon: Target,
    color: "from-green-500 to-emerald-500"
  },
  {
    metric: "实时测试",
    value: "24/7",
    description: "全天候提示词测试环境",
    icon: TestTube,
    color: "from-purple-500 to-pink-500"
  },
  {
    metric: "最佳实践",
    value: "50+",
    description: "经过验证的最佳实践方法",
    icon: Settings,
    color: "from-orange-500 to-red-500"
  }
]

export default function PromptLabPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/15 via-background to-secondary/15">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-grid-primary/5 [background-image:radial-gradient(circle_at_1px_1px,rgb(var(--primary)_/_0.1)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 border-primary/30 text-primary-foreground backdrop-blur-sm">
              <Flask className="mr-2 h-4 w-4" />
              提示词实验室
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
              <GradientText>AI对话艺术</GradientText>
              的探索空间
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              掌握提示词工程的核心技术，通过科学的方法和创新的思维，让AI输出更精准、更专业、更符合您的需求。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                开始实验
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                <Book className="mr-2 h-5 w-5" />
                学习指南
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 性能指标 */}
      <Section>
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <Card key={index} className="text-center border-border/50 bg-gradient-to-br from-card via-card/50 to-muted/30">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <metric.icon className={`h-6 w-6 bg-gradient-to-br ${metric.color} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{metric.value}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContainer>
      </Section>

      {/* 交互式测试区域 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>实时测试环境</SectionTitle>
            <SectionSubtitle>即时测试和优化您的提示词，获得最佳AI响应</SectionSubtitle>
          </SectionHeader>

          <PromptPlayground />
        </SectionContainer>
      </Section>

      {/* 提示词模板库 */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>专业提示词模板</SectionTitle>
            <SectionSubtitle>经过验证的高效提示词模板，覆盖各种应用场景</SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promptTemplates.map((template) => (
              <PromptTemplateCard key={template.id} template={template} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
              浏览全部模板
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </SectionContainer>
      </Section>

      {/* 最佳实践指南 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>最佳实践指南</SectionTitle>
            <SectionSubtitle>基于大量测试和研究的提示词优化技巧</SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
              <CardContent className="p-6">
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">明确目标设定</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  清晰定义您希望AI完成的任务和期望的输出格式，避免模糊不清的指令。
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>使用具体的动词和术语</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>明确输出格式要求</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>设定评估标准</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5">
              <CardContent className="p-6">
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">上下文提供</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  提供充分的背景信息和上下文，帮助AI更好地理解问题的复杂性和特定要求。
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    <span>描述相关背景信息</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    <span>提供必要的约束条件</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    <span>包含相关示例</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-500/20 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5">
              <CardContent className="p-6">
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">迭代优化</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  通过持续的测试和调整，不断优化提示词，逐步提升AI响应的质量和准确性。
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                    <span>分析响应结果</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                    <span>调整提示措辞</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                    <span>记录最佳实践</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* 学习资源 */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>学习资源</SectionTitle>
            <SectionSubtitle>精选的提示词工程学习资料和实用工具</SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="https://arxiv.org/abs/2406.18437" target="_blank" className="group">
              <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      技术论文
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    最新的提示词工程研究论文和学术资源
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://github.com/dair-ai/Prompt-Engineering-Guide" target="_blank" className="group">
              <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <Beaker className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      开源项目
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    优秀的提示词工程开源项目和工具库
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://www.promptingguide.ai/" target="_blank" className="group">
              <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <Book className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      指南教程
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    系统化的提示词工程学习指南
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/contact" className="group">
              <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <Share className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      专业咨询
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    获得专业的提示词优化咨询服务
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </SectionContainer>
      </Section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary/15 via-background to-secondary/15">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-grid-primary/5 [background-image:radial-gradient(circle_at_1px_1px,rgb(var(--primary)_/_0.1)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              开始您的提示词优化之旅
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              加入我们的提示词实验室，掌握AI对话的核心技术，让每一次AI交互都更加高效和精准。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300">
                <Flask className="mr-2 h-5 w-5" />
                开始实验
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                加入社区
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}