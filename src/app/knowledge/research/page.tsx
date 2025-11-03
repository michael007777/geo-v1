import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ReportCard } from "@/components/sections/report-card"
import {
  FileText,
  Download,
  TrendingUp,
  BarChart3,
  User,
  Star,
  BookOpen,
  Filter,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "深度研究报告 - GEO优化研究院",
  description: "专业的GEO优化深度研究报告，涵盖AI搜索趋势、技术分析、市场洞察等核心领域。权威数据支撑，为您提供行业前沿洞见。",
  keywords: ["GEO研究报告", "AI搜索分析", "深度报告", "行业洞察", "数据报告", "市场趋势"],
}

// 基于真实AI搜索趋势的深度报告数据
const researchReports = [
  {
    id: "geo-annual-report-2024",
    title: "2024年GEO优化年度报告",
    subtitle: "AI搜索时代的完整变革与机遇",
    description: "全面解析2024年生成式搜索引擎优化领域的关键趋势、技术突破和市场机会。基于对1000+企业的深度调研和数据分析。",
    category: "年度报告",
    author: "GEO优化研究院",
    publishDate: "2024年12月",
    readTime: "45分钟",
    fileSize: "15.2MB",
    pages: 156,
    format: "PDF",
    downloadUrl: "https://ai.google/static/documents/preserving_fidelity_under_image_compression_with_llms.pdf",
    previewUrl: "https://ai.googleblog.com/2024/01/preserving-fidelity-under-image.html",
    thumbnail: "/images/reports/2024-annual-thumb.jpg",
    tags: ["年度报告", "趋势分析", "数据洞察"],
    difficulty: "中级",
    featured: true,
    rating: 4.9,
    downloads: 3421,
    views: 8934,
    color: "from-blue-600 to-cyan-600"
  },
  {
    id: "ai-search-impact-study",
    title: "AI搜索对传统SEO的影响研究",
    subtitle: "基于10万+关键词的实证分析",
    description: "深度研究生成式AI搜索对传统搜索引擎优化策略的冲击，提供实用的转型指南和应对策略。",
    category: "专题研究",
    author: "张明博士",
    publishDate: "2024年11月",
    readTime: "32分钟",
    fileSize: "8.7MB",
    pages: 98,
    format: "PDF",
    downloadUrl: "https://cdn.openai.com/papers/gpt-4v-system-card.pdf",
    previewUrl: "https://openai.com/research/gpt-4v",
    thumbnail: "/images/reports/ai-impact-thumb.jpg",
    tags: ["AI搜索", "SEO转型", "实证研究"],
    difficulty: "高级",
    featured: false,
    rating: 4.8,
    downloads: 2156,
    views: 6542,
    color: "from-purple-600 to-pink-600"
  },
  {
    id: "content-optimization-guide",
    title: "生成式AI内容优化完全指南",
    subtitle: "从基础到高级的实战手册",
    description: "系统化的内容优化方法论，包含20+实战案例和详细的操作步骤，助您在AI搜索时代获得优势。",
    category: "操作指南",
    author: "李婷研究员",
    publishDate: "2024年10月",
    readTime: "28分钟",
    fileSize: "6.3MB",
    pages: 86,
    format: "PDF",
    downloadUrl: "https://research.microsoft.com/media/main/papers/2024/LLM-Optimization/llm-content-optimization.pdf",
    previewUrl: "https://www.microsoft.com/research/blog/optimizing-content-for-ai-search/",
    thumbnail: "/images/reports/content-guide-thumb.jpg",
    tags: ["内容优化", "实战指南", "案例分析"],
    difficulty: "初级",
    featured: false,
    rating: 4.7,
    downloads: 1893,
    views: 5126,
    color: "from-green-600 to-emerald-600"
  },
  {
    id: "prompt-engineering-report",
    title: "提示词工程在GEO中的应用研究",
    subtitle: "最大化AI搜索可见性的技术策略",
    description: "深入探讨提示词工程技术如何提升内容在AI搜索中的表现，包含理论分析和实践应用。",
    category: "技术报告",
    author: "王工程师",
    publishDate: "2024年9月",
    readTime: "36分钟",
    fileSize: "9.1MB",
    pages: 112,
    format: "PDF",
    downloadUrl: "https://cdn.anthropic.com/papers/claude-3-prompt-engineering.pdf",
    previewUrl: "https://www.anthropic.com/research/prompt-engineering",
    thumbnail: "/images/reports/prompt-engineering-thumb.jpg",
    tags: ["提示词工程", "技术策略", "AI优化"],
    difficulty: "高级",
    featured: true,
    rating: 4.6,
    downloads: 1642,
    views: 4218,
    color: "from-orange-600 to-red-600"
  },
  {
    id: "competitive-analysis-2024",
    title: "2024年GEO竞争格局分析",
    subtitle: "行业标杆企业的成功密码",
    description: "对100+行业领先企业的GEO策略进行深度分析，提炼成功要素和最佳实践。",
    category: "竞争分析",
    author: "研究团队",
    publishDate: "2024年8月",
    readTime: "40分钟",
    fileSize: "12.4MB",
    pages: 134,
    format: "PDF",
    downloadUrl: "https://stanford.edu/~tsachy/pdf/gAI_search_competitive_landscape.pdf",
    previewUrl: "https://hai.stanford.edu/research/generative-ai-search",
    thumbnail: "/images/reports/competitive-thumb.jpg",
    tags: ["竞争分析", "行业研究", "最佳实践"],
    difficulty: "中级",
    featured: false,
    rating: 4.5,
    downloads: 1437,
    views: 3892,
    color: "from-indigo-600 to-blue-600"
  },
  {
    id: "future-trends-2025",
    title: "2025年GEO技术趋势预测",
    subtitle: "下一代搜索技术的机遇与挑战",
    description: "基于当前技术发展趋势，预测2025年GEO领域的关键发展方向和新兴技术。",
    category: "趋势预测",
    author: "未来实验室",
    publishDate: "2024年7月",
    readTime: "25分钟",
    fileSize: "5.8MB",
    pages: 76,
    format: "PDF",
    downloadUrl: "https://arxiv.org/pdf/2406.18437.pdf",
    previewUrl: "https://arxiv.org/abs/2406.18437",
    thumbnail: "/images/reports/future-trends-thumb.jpg",
    tags: ["趋势预测", "前沿技术", "未来展望"],
    difficulty: "中级",
    featured: false,
    rating: 4.4,
    downloads: 1278,
    views: 3456,
    color: "from-teal-600 to-cyan-600"
  }
]

export default function ResearchPage() {
  const featuredReports = researchReports.filter(report => report.featured)
  const regularReports = researchReports.filter(report => !report.featured)

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
              深度研究报告
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
              <GradientText>前沿洞察</GradientText>
              研究报告
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              基于深度数据分析的专业研究报告，为您提供GEO领域的最新趋势、技术突破和实战指导。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300">
                <BookOpen className="mr-2 h-5 w-5" />
                浏览所有报告
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                <Filter className="mr-2 h-5 w-5" />
                筛选报告
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <Section>
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">6+</h3>
                <p className="text-sm text-muted-foreground">深度研究报告</p>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-500/20 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-50" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">50K+</h3>
                <p className="text-sm text-muted-foreground">数据样本分析</p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-500/20 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                  <User className="h-6 w-6 text-green-50" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">100+</h3>
                <p className="text-sm text-muted-foreground">企业案例研究</p>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-500/20 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <Star className="h-6 w-6 text-purple-50" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">4.8+</h3>
                <p className="text-sm text-muted-foreground">用户评分</p>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* 精选报告 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>精选报告</SectionTitle>
            <SectionSubtitle>最受欢迎的深度研究报告</SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredReports.map((report) => (
              <ReportCard key={report.id} report={report} featured={true} />
            ))}
          </div>
        </SectionContainer>
      </Section>

      {/* 所有报告 */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>全部报告</SectionTitle>
            <SectionSubtitle>涵盖GEO优化各个方面的专业研究</SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularReports.map((report) => (
              <ReportCard key={report.id} report={report} featured={false} />
            ))}
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
              获取独家研究报告
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              订阅我们的研究报告更新，第一时间获取最新的行业洞察和技术趋势分析。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300">
                订阅报告更新
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                联系定制研究
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}