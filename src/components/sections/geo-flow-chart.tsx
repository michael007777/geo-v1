"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  MessageSquare,
  Box,
  Link as LinkIcon,
  Users,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  TrendingUp
} from 'lucide-react'

interface Step {
  id: string
  title: string
  description: string
  icon: string
  details: string[]
  benefits: string[]
  complexity: '低' | '中等' | '高'
  timeframe: string
  color: string
}

interface FlowChartProps {
  steps: Step[]
  className?: string
}

interface StepCardProps {
  step: Step
  index: number
  isActive: boolean
  isExpanded: boolean
  onToggle: () => void
  onHover: (index: number | null) => void
  isLast: boolean
}

const StepCard: React.FC<StepCardProps> = ({
  step,
  index,
  isActive,
  isExpanded,
  onToggle,
  onHover,
  isLast
}) => {
  // 图标映射
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      'MapPin': MapPin,
      'MessageSquare': MessageSquare,
      'Box': Box,
      'LinkIcon': LinkIcon,
      'Users': Users
    }
    return iconMap[iconName] || Box
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case '高': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
      case '中等': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
      case '低': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
    }
  }

  const IconComponent = getIcon(step.icon)

  return (
    <div className="relative">
      {/* 垂直连接线 */}
      {!isLast && (
        <div className="absolute left-8 top-full w-0.5 h-16 bg-gradient-to-b from-primary/30 via-primary/20 to-transparent">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <ChevronDown className="h-5 w-5 text-primary/60" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm animate-pulse" />
            </div>
          </div>
        </div>
      )}

      {/* 主卡片 */}
      <div
        className={`
          relative transition-all duration-500 ease-out cursor-pointer overflow-hidden group
          ${isActive
            ? 'transform scale-105'
            : 'hover:transform hover:scale-102'
          }
        `}
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
        onClick={onToggle}
      >
        {/* 步骤卡片容器 */}
        <div className={`
          relative rounded-2xl p-1 transition-all duration-500
          ${isActive
            ? 'bg-gradient-to-r from-' + step.color + '/30 via-' + step.color + '/20 to-transparent shadow-2xl'
            : 'bg-gradient-to-r from-card via-card/80 to-transparent hover:from-' + step.color + '/15 hover:via-' + step.color + '/10 hover:to-transparent hover:shadow-xl'
          }
        `}>
          {/* 内容区域 */}
          <div className="bg-gradient-to-br from-card via-primary/5 to-secondary/5 rounded-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-sm border border-border/30 shadow-inner">
            {/* 背景装饰图案 */}
            <div className={`
              absolute inset-0 opacity-5 transition-opacity duration-500
              ${isActive ? 'opacity-10' : 'opacity-0 group-hover:opacity-5'}
            `}>
              <div className={`
                absolute inset-0 bg-gradient-to-br ${step.color}/10 via-transparent to-transparent
              `} />
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-lg" />
            </div>

            {/* 侧边彩色条 */}
            <div className={`
              absolute left-0 top-0 bottom-0 w-1 transition-all duration-500
              ${isActive ? step.color : 'bg-gradient-to-b ' + step.color + ' from-' + step.color + '/60 to-transparent'}
            `} />

            {/* 步骤编号和图标 */}
            <div className="flex items-center space-x-4 mb-6 relative">
              <div className={`
                relative w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500
                ${isActive
                  ? `${step.color} text-white shadow-lg transform rotate-12 scale-110`
                  : `bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-md`
                }
              `}>
                <IconComponent className="w-8 h-8 transition-transform duration-300" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm flex items-center justify-center font-bold shadow-md">
                  {index + 1}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>

            {/* 标签信息 */}
            <div className="flex flex-wrap gap-3 mb-6 relative">
              <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>{step.timeframe}</span>
              </div>
              <div className={`px-3 py-1.5 rounded-full text-sm font-medium ${getComplexityColor(step.complexity)}`}>
                复杂度: {step.complexity}
              </div>
            </div>

            {/* 展开内容 */}
            <div className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}
            `}>
              <div className="pt-6 border-t border-border/50 relative bg-gradient-to-br from-card/90 via-muted/50 to-secondary/10 -mx-6 -mx-8 px-6 sm:px-8 -mb-6 -mb-8 pb-8 sm:pb-10 backdrop-blur-sm">
                {/* 具体内容 */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    具体内容
                  </h4>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-card/60 to-muted/40 hover:from-card/80 hover:to-muted/60 transition-all duration-200 border border-border/50 shadow-sm hover:shadow-md hover:shadow-primary/10">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 预期收益 */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                    预期收益
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {step.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 bg-gradient-to-r from-green-500/20 via-emerald-500/15 to-teal-500/20 text-green-50 border border-green-500/30 rounded-xl p-3 backdrop-blur-sm shadow-md hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 transition-all duration-200">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm font-medium leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 展开/收起按钮 */}
            <div className="flex justify-center mt-6 relative">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:bg-primary/10 font-medium"
                onClick={(e) => {
                  e.stopPropagation()
                  onToggle()
                }}
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    收起详情
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    查看详情
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const GeoFlowChart: React.FC<FlowChartProps> = ({ steps, className = '' }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set([0]))
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleStepHover = (index: number | null) => {
    setActiveStep(index)
  }

  const toggleStep = (index: number) => {
    setExpandedSteps(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const expandAll = () => {
    setExpandedSteps(new Set(steps.map((_, index) => index)))
  }

  const collapseAll = () => {
    setExpandedSteps(new Set())
  }

  return (
    <div className={`space-y-8 ${className}`}>
      {/* 流程图头部 */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          GEO优化五步法
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
          系统化的实施框架，确保AI时代内容优化的全面性和有效性
        </p>

        {/* 控制按钮 */}
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={expandAll}
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
          >
            展开全部
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={collapseAll}
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
          >
            收起全部
          </Button>
        </div>
      </div>

      {/* 流程图主体 - 垂直布局，无背景装饰 */}
      <div className="relative max-w-5xl mx-auto">
        {/* 垂直布局 - 拉宽对齐 */}
        <div className="relative space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <StepCard
                step={step}
                index={index}
                isActive={activeStep === index}
                isExpanded={expandedSteps.has(index)}
                onToggle={() => toggleStep(index)}
                onHover={handleStepHover}
                isLast={index === steps.length - 1}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 流程图底部说明 - 暗色主题 */}
      <div className="text-center mt-8 p-4 bg-card/50 border border-border/50 rounded-xl backdrop-blur-sm">
        <p className="text-sm text-muted-foreground mb-1">
          💡 点击每个步骤查看详细内容，所有步骤相互关联、循序渐进
        </p>
        <p className="text-xs text-muted-foreground/70">
          建议按顺序实施，也可根据具体需求调整优先级和执行计划
        </p>
      </div>
    </div>
  )
}