"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Copy,
  Play,
  Star,
  Users,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Heart,
  Bookmark
} from 'lucide-react'

interface PromptTemplate {
  id: string
  title: string
  category: string
  difficulty: string
  description: string
  template: string
  examples: string[]
  successRate: number
  useCases: number
  color: string
}

interface PromptTemplateCardProps {
  template: PromptTemplate
}

export function PromptTemplateCard({ template }: PromptTemplateCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '初级': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case '中级': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case '高级': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(template.template)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  const handleUseTemplate = () => {
    // 在实际应用中，这里会将模板填入到提示词测试区域
    console.log('使用模板:', template.template)
  }

  return (
    <Card className={`
      group relative overflow-hidden border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl
      border-border/50 bg-gradient-to-br from-card via-card/50 to-muted/30
    `}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(135deg, ${template.color.replace('from-', 'rgb(var(--tw-gradient-stops)) from-').replace(' to-', ' to-')}, transparent)`
        }}
      />

      <div className="relative p-6">
        {/* 头部信息 */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Badge className={getDifficultyColor(template.difficulty) + ' border'}>
                {template.difficulty}
              </Badge>
              <Badge variant="secondary" className="bg-card/50 border-border/50">
                {template.category}
              </Badge>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {template.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {template.description}
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 hover:bg-primary/10"
            >
              <Heart className={`h-4 w-4 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="p-2 hover:bg-primary/10"
            >
              <Bookmark className={`h-4 w-4 transition-colors ${isBookmarked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
            </Button>
          </div>
        </div>

        {/* 统计信息 */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-muted-foreground">{template.successRate}%</span>
              <span className="text-xs text-muted-foreground">成功率</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-muted-foreground">{template.useCases.toLocaleString()}</span>
              <span className="text-xs text-muted-foreground">使用次数</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-muted-foreground">4.8</span>
          </div>
        </div>

        {/* 示例标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {template.examples.slice(0, isExpanded ? undefined : 3).map((example, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-card/50 border-border/50">
              {example}
            </Badge>
          ))}
          {template.examples.length > 3 && !isExpanded && (
            <Badge variant="outline" className="text-xs bg-card/50 border-border/50">
              +{template.examples.length - 3} 更多
            </Badge>
          )}
        </div>

        {/* 模板内容预览 */}
        <div className="mb-4">
          <div className="relative">
            <div className="bg-background/50 border border-border/30 rounded-lg p-3">
              <pre className="text-xs text-muted-foreground font-mono whitespace-pre-wrap overflow-hidden">
                {template.template.split('\n').slice(0, isExpanded ? undefined : 3).join('\n')}
                {!isExpanded && template.template.split('\n').length > 3 && '\n...'}
              </pre>
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex gap-2">
          <Button
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-primary/25 transition-all duration-300"
            onClick={handleUseTemplate}
          >
            <Play className="w-4 h-4 mr-2" />
            使用模板
          </Button>
          <Button
            size="sm"
            variant="outline"
            className={`border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 ${
              isCopied ? 'bg-green-500/10 border-green-500/50' : ''
            }`}
            onClick={handleCopy}
          >
            {isCopied ? (
              <>
                <Star className="w-4 h-4 mr-2" />
                已复制
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                复制
              </>
            )}
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-border/30 text-muted-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* 展开的详细内容 */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="space-y-4">
              {/* 完整模板 */}
              <div>
                <h4 className="font-medium text-foreground mb-2">完整模板</h4>
                <div className="bg-background border border-border/30 rounded-lg p-4">
                  <pre className="text-sm text-muted-foreground font-mono whitespace-pre-wrap">
                    {template.template}
                  </pre>
                </div>
              </div>

              {/* 使用场景 */}
              <div>
                <h4 className="font-medium text-foreground mb-2">适用场景</h4>
                <div className="flex flex-wrap gap-2">
                  {template.examples.map((example, index) => (
                    <Badge key={index} variant="secondary" className="bg-card/50 border-border/50">
                      {example}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* 最佳实践 */}
              <div>
                <h4 className="font-medium text-foreground mb-2">最佳实践</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>根据具体需求调整模板中的占位符</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>添加相关的上下文信息以获得更好的结果</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>测试和迭代优化提示词效果</span>
                  </li>
                </ul>
              </div>

              {/* 相关链接 */}
              <div>
                <h4 className="font-medium text-foreground mb-2">相关资源</h4>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    文档
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    示例
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    教程
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}