"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { StatsOverview } from "./stats-overview"
import {
  Search,
  TrendingUp,
  Eye,
  Star,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Globe,
  Zap,
  Target,
  Brain,
  MessageSquare,
  Bot,
  Sparkles,
  MapPin,
  Building,
  Award,
  Users,
  ChevronRight,
  Mic,
  Camera,
  FileText,
  TrendingDown,
  Filter
} from "lucide-react"

// 快速查询选项配置
const quickQueries = [
  {
    id: "location",
    title: "地区查询",
    description: "按地区查找优秀GEO企业",
    icon: MapPin,
    examples: ["上海哪家GEO公司好？", "北京AI优化服务商排名"],
    color: "from-blue-400 to-blue-600"
  },
  {
    id: "industry",
    title: "行业查询",
    description: "按行业筛选专业机构",
    icon: Building,
    examples: ["金融行业GEO服务商", "电商AI优化公司"],
    color: "from-green-400 to-green-600"
  },
  {
    id: "ranking",
    title: "排名查询",
    description: "查看各领域TOP企业",
    icon: Award,
    examples: ["GEO服务排行榜", "AI优化公司排名"],
    color: "from-purple-400 to-purple-600"
  },
  {
    id: "comparison",
    title: "对比查询",
    description: "企业间GEO表现对比",
    icon: TrendingUp,
    examples: ["A公司和B公司对比", "哪家GEO效果更好"],
    color: "from-orange-400 to-orange-600"
  },
  {
    id: "service",
    title: "服务查询",
    description: "查找特定服务提供商",
    icon: Users,
    examples: ["提供ChatGPT优化的公司", "AI内容营销服务商"],
    color: "from-cyan-400 to-cyan-600"
  },
  {
    id: "trend",
    title: "趋势查询",
    description: "行业趋势和发展动态",
    icon: BarChart3,
    examples: ["GEO行业发展趋势", "AI优化市场分析"],
    color: "from-pink-400 to-pink-600"
  }
]

// AI模型数据配置
const aiModels = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI的对话式AI模型",
    icon: "🤖",
    color: "from-green-400 to-green-600",
    status: "active",
    userCount: "1B+",
    features: ["对话式搜索", "实时信息", "多模态支持"]
  },
  {
    id: "gemini",
    name: "Gemini",
    description: "Google的多模态AI助手",
    icon: "💎",
    color: "from-blue-400 to-purple-600",
    status: "active",
    userCount: "500M+",
    features: ["多模态理解", "实时搜索", "深度推理"]
  },
  {
    id: "doubao",
    name: "豆包",
    description: "字节跳动的AI助手",
    icon: "🫘",
    color: "from-orange-400 to-red-500",
    status: "active",
    userCount: "100M+",
    features: ["中文优化", "本地化服务", "快速响应"]
  },
  {
    id: "qianwen",
    name: "千问",
    description: "阿里巴巴的大语言模型",
    icon: "🔍",
    color: "from-cyan-400 to-blue-600",
    status: "active",
    userCount: "50M+",
    features: ["商业智能", "企业服务", "数据分析"]
  },
  {
    id: "wenxin",
    name: "文心一言",
    description: "百度的生成式AI产品",
    icon: "🧠",
    color: "from-red-400 to-pink-600",
    status: "active",
    userCount: "200M+",
    features: ["搜索集成", "知识图谱", "中文理解"]
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic的AI助手",
    icon: "🎭",
    color: "from-purple-400 to-indigo-600",
    status: "active",
    userCount: "10M+",
    features: ["长文本处理", "安全设计", "创意写作"]
  },
  {
    id: "perplexity",
    name: "Perplexity",
    description: "AI驱动的搜索引擎",
    icon: "🔬",
    color: "from-teal-400 to-blue-600",
    status: "active",
    userCount: "10M+",
    features: ["实时搜索", "引用来源", "学术研究"]
  },
  {
    id: "copilot",
    name: "Copilot",
    description: "Microsoft的AI编程助手",
    icon: "👨‍💻",
    color: "from-blue-400 to-cyan-600",
    status: "active",
    userCount: "180M+",
    features: ["代码生成", "技术文档", "开发工具"]
  },
  {
    id: "hunyuan",
    name: "混元",
    description: "腾讯的混元大模型",
    icon: "🌟",
    color: "from-yellow-400 to-orange-600",
    status: "active",
    userCount: "30M+",
    features: ["社交集成", "多媒体处理", "企业应用"]
  },
  {
    id: "sensechat",
    name: "SenseChat",
    description: "商汤科技的对话式AI",
    icon: "👁️",
    color: "from-violet-400 to-purple-600",
    status: "active",
    userCount: "5M+",
    features: ["视觉理解", "多模态", "企业服务"]
  }
]

// GEO指标配置
const geoMetrics = [
  {
    id: "visibility",
    name: "AI可见性",
    description: "在AI生成内容中的出现频率",
    icon: Eye,
    unit: "%",
    color: "text-blue-600"
  },
  {
    id: "ranking",
    name: "排名位置",
    description: "在AI推荐结果中的排名",
    icon: TrendingUp,
    unit: "位",
    color: "text-green-600"
  },
  {
    id: "authority",
    name: "权威评分",
    description: "AI对品牌的权威性评估",
    icon: Star,
    unit: "分",
    color: "text-yellow-600"
  },
  {
    id: "sentiment",
    name: "情感倾向",
    description: "AI提及内容中的情感分析",
    icon: MessageSquare,
    unit: "分",
    color: "text-purple-600"
  },
  {
    id: "coverage",
    name: "覆盖广度",
    description: "在多少个AI模型中被收录",
    icon: Globe,
    unit: "个",
    color: "text-indigo-600"
  },
  {
    id: "engagement",
    name: "互动质量",
    description: "AI推荐带来的用户互动",
    icon: Zap,
    unit: "分",
    color: "text-orange-600"
  }
]

export const ToolQueryPage = () => {
  const [selectedModels, setSelectedModels] = useState<string[]>([])
  const [queryText, setQueryText] = useState("")
  const [selectedQuickQuery, setSelectedQuickQuery] = useState<string | null>(null)
  const [isQuerying, setIsQuerying] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [isListening, setIsListening] = useState(false)

  const handleModelToggle = (modelId: string) => {
    setSelectedModels(prev =>
      prev.includes(modelId)
        ? prev.filter(id => id !== modelId)
        : [...prev, modelId]
    )
  }

  const handleQuickQuerySelect = (queryType: string, example: string) => {
    setSelectedQuickQuery(queryType)
    setQueryText(example)
  }

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition()
      recognition.lang = 'zh-CN'
      recognition.continuous = false
      recognition.interimResults = false

      setIsListening(true)
      recognition.start()

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setQueryText(transcript)
        setIsListening(false)
      }

      recognition.onerror = () => {
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }
    } else {
      alert('您的浏览器不支持语音识别功能')
    }
  }

  const handleQuery = async () => {
    if (!queryText.trim()) return

    setIsQuerying(true)
    // 模拟查询过程
    setTimeout(() => {
      setResults({
        query: queryText,
        queryType: selectedQuickQuery,
        models: selectedModels.length > 0 ? selectedModels : aiModels.map(m => m.id),
        timestamp: new Date().toISOString(),
        metrics: geoMetrics.map(metric => ({
          ...metric,
          value: Math.floor(Math.random() * 100),
          change: Math.floor(Math.random() * 40) - 20
        })),
        recommendations: [
          "建议优化ChatGPT中的实体描述",
          "加强在Gemini中的结构化数据",
          "提升在豆包中的本地化内容"
        ]
      })
      setIsQuerying(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6">GEO智能查询工具</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                AI时代的
                <GradientText>智能查询引擎</GradientText>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                通过自然语言查询企业GEO表现，支持地区、行业、排名等多维度搜索，
                让AI搜索优化结果一目了然
              </p>
            </div>

            {/* 主查询输入区域 */}
            <Card className="max-w-4xl mx-auto mb-12 border-2 border-primary/20 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-center flex items-center justify-center">
                  <Sparkles className="mr-2 h-6 w-6 text-primary" />
                  智能GEO查询
                </CardTitle>
                <CardDescription className="text-center text-base">
                  输入您的问题，例如："上海哪家企业GEO的公司好？"
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 主输入框 */}
                <div className="relative">
                  <textarea
                    value={queryText}
                    onChange={(e) => setQueryText(e.target.value)}
                    placeholder="请输入您想查询的问题，支持自然语言描述..."
                    className="w-full px-4 py-4 pr-24 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-base"
                    rows={3}
                  />
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleVoiceInput}
                      disabled={isListening}
                      className="h-10 w-10 p-0"
                    >
                      {isListening ? (
                        <div className="animate-pulse">
                          <Mic className="h-4 w-4 text-red-500" />
                        </div>
                      ) : (
                        <Mic className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-10 w-10 p-0"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* 快速查询选项 */}
                <div>
                  <h3 className="text-sm font-medium mb-3 flex items-center">
                    <Target className="mr-2 h-4 w-4 text-primary" />
                    快速查询类型
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {quickQueries.map((query) => {
                      const IconComponent = query.icon
                      return (
                        <Card
                          key={query.id}
                          className={`cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-105 ${
                            selectedQuickQuery === query.id
                              ? 'ring-2 ring-primary bg-primary/5'
                              : 'hover:border-primary/50'
                          }`}
                          onClick={() => handleQuickQuerySelect(query.id, query.examples[0])}
                        >
                          <CardContent className="p-4 text-center">
                            <div className={`mb-2 mx-auto w-10 h-10 rounded-lg bg-gradient-to-br ${query.color} flex items-center justify-center`}>
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <h4 className="font-medium text-sm mb-1">{query.title}</h4>
                            <p className="text-xs text-muted-foreground">{query.description}</p>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>

                {/* 查询按钮 */}
                <Button
                  size="lg"
                  onClick={handleQuery}
                  disabled={!queryText.trim() || isQuerying}
                  className="w-full h-12 text-lg"
                >
                  {isQuerying ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      智能分析中...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-5 w-5" />
                      开始GEO智能查询
                    </>
                  )}
                </Button>

                {/* 热门查询示例 */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">热门查询：</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {quickQueries.slice(0, 3).flatMap(q => q.examples).slice(0, 5).map((example, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => setQueryText(example)}
                      >
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 统计数据概览 */}
      <Section className="bg-muted/10">
        <SectionContainer>
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <SectionTitle>
                实时数据概览
                <br />
                GEO查询统计
              </SectionTitle>
              <SectionSubtitle>
                展示平台的查询数据和使用情况，帮助您了解GEO优化趋势
              </SectionSubtitle>
            </SectionHeader>
            <StatsOverview />
          </div>
        </SectionContainer>
      </Section>

      {/* AI Models Section */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>
              支持的AI模型
              <br />
              覆盖全球主流平台
            </SectionTitle>
            <SectionSubtitle>
              涵盖国内外10+主流AI模型，提供全方位的GEO指标检测服务
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {aiModels.map((model) => (
              <Card
                key={model.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedModels.includes(model.id)
                    ? 'ring-2 ring-primary border-primary'
                    : 'hover:border-primary/50'
                }`}
                onClick={() => handleModelToggle(model.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${model.color} bg-opacity-10`}>
                      {model.icon}
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        model.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                      }`} />
                      <Badge variant="outline" className="text-xs">
                        {model.userCount}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{model.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {model.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {model.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContainer>
      </Section>

      {/* AI模型选择区域 - 简化版 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-6xl mx-auto">
            <SectionHeader>
              <SectionTitle>
                支持的AI模型
                <br />
                全方位GEO检测
              </SectionTitle>
              <SectionSubtitle>
                系统将自动在所有主流AI模型中查询，您也可以手动选择特定模型
              </SectionSubtitle>
            </SectionHeader>

            {/* 已选择模型展示 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Bot className="mr-2 h-5 w-5 text-primary" />
                    查询范围 ({selectedModels.length > 0 ? `${selectedModels.length}个模型` : '全部模型'})
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedModels([])}
                  >
                    重置选择
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {selectedModels.length === 0 ? (
                    <div className="flex items-center text-muted-foreground">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      默认将在所有10个AI模型中查询
                    </div>
                  ) : (
                    selectedModels.map(modelId => {
                      const model = aiModels.find(m => m.id === modelId)
                      return (
                        <Badge key={modelId} variant="default" className="text-sm px-3 py-1">
                          {model?.icon} {model?.name}
                        </Badge>
                      )
                    })
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* GEO Metrics Section */}
      {results && (
        <Section>
          <SectionContainer>
            <div className="max-w-6xl mx-auto">
              <SectionHeader>
                <SectionTitle>
                  GEO分析结果
                  <br />
                  详细指标报告
                </SectionTitle>
                <SectionSubtitle>
                  基于"{results.query}"在{results.models.length}个AI模型中的查询结果
                </SectionSubtitle>
              </SectionHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {results.metrics.map((metric: any) => {
                  const IconComponent = metric.icon
                  return (
                    <Card key={metric.id}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-muted ${metric.color}`}>
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{metric.name}</CardTitle>
                              <CardDescription>{metric.description}</CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-end justify-between">
                          <div>
                            <div className={`text-3xl font-bold ${metric.color}`}>
                              {metric.value}
                              <span className="text-lg font-normal text-muted-foreground ml-1">
                                {metric.unit}
                              </span>
                            </div>
                            <div className={`text-sm flex items-center mt-1 ${
                              metric.change > 0 ? 'text-green-600' : metric.change < 0 ? 'text-red-600' : 'text-gray-600'
                            }`}>
                              {metric.change > 0 ? <TrendingUp className="h-3 w-3 mr-1" /> :
                               metric.change < 0 ? <AlertCircle className="h-3 w-3 mr-1" /> : null}
                              {metric.change > 0 ? '+' : ''}{metric.change}{metric.unit}
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant={metric.value > 70 ? "default" : metric.value > 40 ? "secondary" : "outline"}>
                              {metric.value > 70 ? "优秀" : metric.value > 40 ? "良好" : "需优化"}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-primary" />
                    AI模型详细表现
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {results.models.map(modelId => {
                      const model = aiModels.find(m => m.id === modelId)
                      return (
                        <div key={modelId} className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">{model?.icon}</div>
                            <div>
                              <div className="font-medium">{model?.name}</div>
                              <div className="text-sm text-muted-foreground">{model?.description}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm font-medium">已收录</span>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              排名: #{Math.floor(Math.random() * 50) + 1}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* 推荐建议 */}
              {results.recommendations && (
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="mr-2 h-5 w-5 text-primary" />
                      AI优化建议
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {results.recommendations.map((recommendation: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-primary/5 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{recommendation}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </SectionContainer>
        </Section>
      )}
    </div>
  )
}