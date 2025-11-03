"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Play,
  Copy,
  Save,
  RefreshCw,
  Zap,
  Code,
  MessageSquare,
  Settings,
  CheckCircle,
  AlertCircle,
  TrendingUp
} from 'lucide-react'

interface PromptExample {
  title: string
  category: string
  prompt: string
  difficulty: '初级' | '中级' | '高级'
}

const promptExamples: PromptExample[] = [
  {
    title: "基础问答",
    category: "日常对话",
    difficulty: "初级",
    prompt: "请解释什么是机器学习，适合初学者理解。"
  },
  {
    title: "代码生成",
    category: "编程",
    difficulty: "中级",
    prompt: "用Python写一个函数，输入一个数字列表，返回平均值。请包含错误处理和注释。"
  },
  {
    title: "创意写作",
    category: "文学",
    difficulty: "高级",
    prompt: "以'雨夜'为主题，写一篇500字的现代短篇小说，要有悬疑元素和意外结局。"
  }
]

export function PromptPlayground() {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedExample, setSelectedExample] = useState<PromptExample | null>(null)
  const [copySuccess, setCopySuccess] = useState(false)

  const handleTest = async () => {
    if (!prompt.trim()) return

    setIsLoading(true)
    setResponse("")

    // 模拟API调用
    setTimeout(() => {
      const mockResponse = `这是一个示例AI响应：

基于您的提示词："${prompt.substring(0, 50)}${prompt.length > 50 ? "..." : ""}"

我理解您希望我处理这个问题。在实际应用中，这里会连接到真实的AI API（如OpenAI GPT、Claude、或国内的ChatGLM等）来生成响应。

响应特点：
- ✅ 理解了提示词的核心意图
- ✅ 提供了结构化的回答
- ✅ 包含相关的补充信息
- ✅ 保持了良好的对话连贯性

您可以通过优化提示词来获得更好的结果：
- 添加更具体的上下文
- 明确输出格式要求
- 提供示例或模板
- 设定角色或专业领域`

      setResponse(mockResponse)
      setIsLoading(false)
    }, 2000)
  }

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  const handleExampleSelect = (example: PromptExample) => {
    setPrompt(example.prompt)
    setSelectedExample(example)
    setResponse("")
  }

  const handleClear = () => {
    setPrompt("")
    setResponse("")
    setSelectedExample(null)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '初级': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case '中级': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case '高级': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <div className="space-y-6">
      {/* 示例提示词 */}
      <Card className="border-border/50 bg-gradient-to-br from-card via-card/50 to-muted/30">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">快速开始示例</h3>
            <Badge className="bg-primary/20 border-primary/30 text-primary-foreground">
              选择一个示例开始测试
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {promptExamples.map((example, index) => (
              <Card
                key={index}
                className={`cursor-pointer border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  selectedExample?.title === example.title
                    ? 'border-primary/50 bg-primary/10'
                    : 'border-border/30 hover:border-primary/30'
                }`}
                onClick={() => handleExampleSelect(example)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-foreground">{example.title}</h4>
                    <Badge variant="secondary" className={`text-xs ${getDifficultyColor(example.difficulty)}`}>
                      {example.difficulty}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="text-xs mb-2 bg-card/50">
                    {example.category}
                  </Badge>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {example.prompt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 主测试区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 输入区域 */}
        <Card className="border-border/50 bg-gradient-to-br from-card via-card/50 to-muted/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                提示词输入
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">
                  {prompt.length} 字符
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopy(prompt)}
                  disabled={!prompt.trim()}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="在此输入您的提示词...&#10;&#10;例如：&#10;• 请解释一个复杂的概念&#10;• 生成代码示例&#10;• 分析数据并提供建议&#10;• 创建创意内容"
              className="w-full h-64 p-4 bg-background border border-border/50 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
            />

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleClear}
                  disabled={isLoading}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  清空
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopy(prompt)}
                  disabled={!prompt.trim()}
                >
                  <Save className="mr-2 h-4 w-4" />
                  保存
                </Button>
              </div>

              <Button
                onClick={handleTest}
                disabled={!prompt.trim() || isLoading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-primary/25 transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    测试中...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    测试提示词
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 输出区域 */}
        <Card className="border-border/50 bg-gradient-to-br from-card via-card/50 to-muted/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <Code className="mr-2 h-5 w-5 text-primary" />
                AI 响应结果
              </h3>
              <div className="flex items-center space-x-2">
                {response && (
                  <Badge className="bg-green-500/20 border-green-500/30 text-green-400">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    已生成
                  </Badge>
                )}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopy(response)}
                  disabled={!response.trim()}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="w-full h-64 p-4 bg-background border border-border/50 rounded-lg overflow-auto">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-center space-y-4">
                    <RefreshCw className="h-8 w-8 text-primary animate-spin" />
                    <p className="text-muted-foreground">正在处理您的提示词...</p>
                  </div>
                </div>
              ) : response ? (
                <div className="whitespace-pre-wrap text-sm text-foreground leading-relaxed">
                  {response}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-primary/50" />
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-2">等待测试结果</p>
                      <p className="text-xs text-muted-foreground">
                        输入提示词并点击"测试提示词"按钮
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {response && (
              <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <h4 className="font-medium text-foreground mb-2 flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4 text-primary" />
                  优化建议
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>尝试添加更具体的上下文信息</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>明确指定输出格式和结构</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>提供相关示例或模板</span>
                  </li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* 提示词分析 */}
      {prompt.trim() && (
        <Card className="border-border/50 bg-gradient-to-br from-card via-card/50 to-muted/30">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Settings className="mr-2 h-5 w-5 text-primary" />
              提示词分析
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-background rounded-lg border border-border/30">
                <div className="text-2xl font-bold text-primary mb-1">
                  {prompt.trim().split(/\s+/).length}
                </div>
                <div className="text-sm text-muted-foreground">词数</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border/30">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {prompt.trim().length}
                </div>
                <div className="text-sm text-muted-foreground">字符数</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border/30">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {prompt.includes('？') || prompt.includes('?') ? '是' : '否'}
                </div>
                <div className="text-sm text-muted-foreground">包含问题</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border/30">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {prompt.split(/[。！？.!?]/).length - 1}
                </div>
                <div className="text-sm text-muted-foreground">句子数</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}