"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  FileText,
  Download,
  User,
  Calendar,
  Clock,
  BarChart3,
  Star,
  Eye
} from "lucide-react"

interface Report {
  id: string
  title: string
  subtitle: string
  description: string
  category: string
  author: string
  publishDate: string
  readTime: string
  fileSize: string
  pages: number
  format: string
  downloadUrl: string
  previewUrl: string
  thumbnail: string
  tags: string[]
  difficulty: string
  featured: boolean
  rating: number
  downloads: number
  views: number
  color: string
}

interface ReportCardProps {
  report: Report
  featured: boolean
}

export function ReportCard({ report, featured }: ReportCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "初级": return "bg-green-500/20 text-green-400 border-green-500/30"
      case "中级": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "高级": return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const handleDownload = () => {
    // 使用真实下载链接
    window.open(report.downloadUrl, '_blank')
  }

  const handlePreview = () => {
    // 打开预览链接（arxiv摘要页面）
    window.open(report.previewUrl, '_blank')
  }

  return (
    <Card className={`
      group relative overflow-hidden border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl
      ${featured
        ? 'border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5'
        : 'border-border/50 bg-gradient-to-br from-card via-card/50 to-muted/30'
      }
    `}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(135deg, ${report.color.replace('from-', 'rgb(var(--tw-gradient-stops)) from-').replace(' to-', ' to-')}, transparent)`
        }}
      />

      <div className="relative p-6">
        {/* 报告头部 */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <Badge className={`mb-2 ${getDifficultyColor(report.difficulty)} border`}>
              {report.difficulty}
            </Badge>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {report.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              {report.subtitle}
            </p>
          </div>
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br ${report.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <FileText className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* 报告描述 */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {report.description}
        </p>

        {/* 标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {report.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-card/50 border-border/50">
              {tag}
            </Badge>
          ))}
        </div>

        {/* 报告信息 */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <User className="w-4 h-4" />
            <span className="truncate">{report.author}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{report.publishDate}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{report.readTime}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <BarChart3 className="w-4 h-4" />
            <span>{report.pages}页</span>
          </div>
        </div>

        {/* 统计信息 */}
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>{report.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{report.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Download className="w-4 h-4" />
              <span>{report.downloads.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex gap-2">
          <Button
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-primary/25 transition-all duration-300"
            onClick={handleDownload}
          >
            <Download className="w-4 h-4 mr-2" />
            下载PDF
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            onClick={handlePreview}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}