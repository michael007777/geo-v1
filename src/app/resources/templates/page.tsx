import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, FileText, Download, Code, CheckCircle, Copy, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO模板库 - 结构化数据和内容模板",
  description: "提供专业的GEO实施模板，包括Schema.org标记、内容结构、优化清单等实用工具。",
  keywords: ["GEO模板", "结构化数据模板", "Schema.org", "内容模板", "优化清单"],
}

const templateCategories = [
  {
    id: "schema-templates",
    title: "Schema.org标记模板",
    description: "各种类型实体的结构化数据模板",
    icon: Code,
    templates: [
      {
        title: "组织信息Schema",
        description: "适用于公司、机构等组织实体的基础信息标记",
        category: "Organization",
        difficulty: "初级",
        code: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "您的公司名称",
  "url": "https://yourwebsite.com",
  "logo": "https://yourwebsite.com/logo.png",
  "description": "公司的简短描述",
  "sameAs": [
    "https://twitter.com/yourcompany",
    "https://linkedin.com/company/yourcompany"
  ]
}`,
        usage: "放置在网站首页的<head>标签中"
      },
      {
        title: "文章内容Schema",
        description: "博客文章、新闻稿等内容的标准标记",
        category: "Article",
        difficulty: "初级",
        code: `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "文章标题",
  "author": {
    "@type": "Person",
    "name": "作者姓名"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01",
  "description": "文章描述",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://yourwebsite.com/article-url"
  }
}`,
        usage: "放置在文章页面的<head>标签中"
      },
      {
        title: "产品信息Schema",
        description: "电商产品页面的详细产品信息标记",
        category: "Product",
        difficulty: "中级",
        code: `{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "产品名称",
  "description": "产品详细描述",
  "brand": {
    "@type": "Brand",
    "name": "品牌名称"
  },
  "offers": {
    "@type": "Offer",
    "price": "99.99",
    "priceCurrency": "CNY",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "128"
  }
}`,
        usage: "放置在产品页面的<head>标签中"
      },
      {
        title: "FAQ页面Schema",
        description: "常见问题页面的问答对标记",
        category: "FAQPage",
        difficulty: "中级",
        code: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "常见问题1",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "问题1的详细回答"
      }
    },
    {
      "@type": "Question",
      "name": "常见问题2",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "问题2的详细回答"
      }
    }
  ]
}`,
        usage: "放置在FAQ页面的<head>标签中"
      }
    ]
  },
  {
    id: "content-templates",
    title: "内容结构模板",
    description: "AI友好的内容组织和结构模板",
    icon: FileText,
    templates: [
      {
        title: "答案优先内容模板",
        description: "专门为AI优化的文章结构模板",
        category: "内容结构",
        difficulty: "初级",
        code: `# [清晰准确的标题]

## 核心答案
[开门见山，直接回答用户的核心问题，2-3句话]

## 详细说明
### 要点1
[详细阐述第一个要点]
- 支撑事实和数据
- 具体例子或案例
- 相关背景信息

### 要点2
[详细阐述第二个要点]
- 解释说明
- 实际应用
- 注意事项

### 要点3
[详细阐述第三个要点]

## 总结
[重申关键信息，便于AI引用和记忆]

## 参考资源
- [相关链接1]
- [相关链接2]`,
        usage: "适用于信息型文章和指南"
      },
      {
        title: "产品对比模板",
        description: "帮助AI理解和推荐的产品对比结构",
        category: "电商内容",
        difficulty: "中级",
        code: `# [产品类别名称]对比指南

## 推荐概览
基于[具体需求]，我们推荐以下产品：

1. **首选推荐**：[产品名称] - [推荐理由]
2. **性价比之选**：[产品名称] - [推荐理由]
3. **专业选择**：[产品名称] - [推荐理由]

## 详细对比

### 产品1：[产品名称]
**核心优势：**
- 优势1描述
- 优势2描述

**适用场景：**
- 场景1
- 场景2

**关键规格：**
- 规格1：具体数值
- 规格2：具体数值

### 产品2：[产品名称]
[同样的结构描述]

## 选购建议
根据您的[具体需求]，建议选择[推荐产品]。

**选择建议总结：**
- 预算有限：选择[产品]
- 追求性能：选择[产品]
- 特殊需求：选择[产品]`,
        usage: "适用于产品对比和购买指南"
      },
      {
        title: "专家观点模板",
        description: "建立专业权威的观点和分析模板",
        category: "专业内容",
        difficulty: "高级",
        code: `# [主题]深度分析

## 专家观点
基于我[年数]年的[领域]经验，我认为[核心观点]。

## 背景分析
当前[行业/领域]面临的主要挑战包括：
- 挑战1描述
- 挑战2描述
- 挑战3描述

## 数据支撑
根据[数据来源]的最新研究：
- 关键数据1
- 关键数据2
- 关键数据3

## 实践建议
基于我的实践经验，建议：

### 短期策略
- 策略1
- 策略2

### 长期规划
- 规划1
- 规划2

## 风险提示
需要注意的是：
- 风险1及应对
- 风险2及应对

## 结论
[总结观点和未来展望]

---
*本文观点基于作者的专业经验，仅供参考。*`,
        usage: "适用于建立个人专家权威的内容"
      }
    ]
  },
  {
    id: "checklist-templates",
    title: "优化清单模板",
    description: "GEO实施的检查清单和评估工具",
    icon: CheckCircle,
    templates: [
      {
        title: "内容质量检查清单",
        description: "确保内容符合AI优化标准的检查表",
        category: "质量评估",
        difficulty: "初级",
        code: `## GEO内容质量检查清单

### 基础要素
- [ ] 内容标题清晰准确
- [ ] 开头直接回答核心问题
- [ ] 逻辑结构清晰，层次分明
- [ ] 信息准确，有可靠来源
- [ ] 语言自然，避免关键词堆砌

### 结构优化
- [ ] 使用标题层级（H1, H2, H3）
- [ ] 重要概念加粗强调
- [ ] 使用列表展示要点
- [ ] 段落长度适中（2-4句话）
- [ ] 包含总结性内容

### 权威信号
- [ ] 作者信息清晰
- [ ] 发布时间明确
- [ ] 引用来源可靠
- [ ] 数据和事实支撑
- [ ] 专业术语使用准确

### 技术要素
- [ ] 页面加载速度快
- [ ] 移动端友好
- [ ] 结构化数据完整
- [ ] 内链相关合理
- [ ] 图片有alt标签

**评分：** ___ / 20分
**改进建议：** ____________________`,
        usage: "内容发布前的质量检查"
      },
      {
        title: "Schema实施清单",
        description: "结构化数据实施的完整检查表",
        category: "技术检查",
        difficulty: "中级",
        code: `## Schema.org实施检查清单

### 基础验证
- [ ] 使用Google结构化数据测试工具验证
- [ ] 无语法错误
- [ ] 所有必需属性已填写
- [ ] 数据格式正确

### 内容匹配
- [ ] Schema内容与页面内容一致
- [ ] 数据准确无误
- [ ] 时间信息正确
- [ ] 价格信息实时

### 优化要点
- [ ] 选择最合适的Schema类型
- [ ] 利用所有相关属性
- [ ] 建立实体间关系
- [ ] 避免重复标记

### 常见错误检查
- [ ] 无嵌套错误
- [ ] 无属性拼写错误
- [ ] 无数据类型错误
- [ ] 无必需属性缺失

**验证工具：**
- Google结构化数据测试工具
- Schema.org验证器
- Rich Results Test

**测试结果：** ____________________`,
        usage: "Schema标记实施后的验证"
      }
    ]
  }
]

export default function TemplatesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">资源库</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <GradientText>GEO模板库</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              专业级GEO实施模板，包括Schema.org标记、内容结构、优化清单等，
              帮助您快速上手并提升GEO实施效果。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#template-categories">
                  浏览模板
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/knowledge/guides">查看教程</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 使用指南 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader className="text-center">
              <SectionTitle>模板使用指南</SectionTitle>
              <SectionSubtitle>
                如何正确使用这些GEO模板
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-blue-500" />
                    选择合适的模板
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    根据您的内容类型和目标，选择最适合的模板类型。每个模板都有特定的应用场景。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Copy className="h-5 w-5 mr-2 text-green-500" />
                    自定义内容
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    根据您的具体需求修改模板内容，确保信息准确且符合您的品牌风格。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-purple-500" />
                    验证和测试
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    使用相应的验证工具测试实施效果，确保符合标准和最佳实践。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 模板分类内容 */}
      <Section id="template-categories">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>模板分类</SectionTitle>
            <SectionSubtitle>
              按用途分类的专业GEO模板
            </SectionSubtitle>
          </SectionHeader>

          <div className="space-y-16 max-w-6xl mx-auto">
            {templateCategories.map((category) => (
              <div key={category.id} className="scroll-mt-24" id={category.id}>
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{category.title}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {category.description}
                        </CardDescription>
                        <Badge variant="outline" className="mt-2">
                          {category.templates.length} 个模板
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      {category.templates.map((template, index) => (
                        <div key={index} className="border-l-4 border-l-primary/20 pl-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold">{template.title}</h3>
                              <p className="text-muted-foreground">{template.description}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">{template.category}</Badge>
                              <Badge variant={template.difficulty === "初级" ? "default" : template.difficulty === "中级" ? "secondary" : "destructive"}>
                                {template.difficulty}
                              </Badge>
                            </div>
                          </div>

                          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto mb-4">
                            <pre className="text-sm">
                              <code>{template.code}</code>
                            </pre>
                          </div>

                          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                            <h4 className="font-semibold mb-2 text-sm text-blue-700 dark:text-blue-300">
                              💡 使用说明
                            </h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                              {template.usage}
                            </p>
                          </div>

                          <div className="flex space-x-3 mt-4">
                            <Button variant="outline" size="sm">
                              <Copy className="h-4 w-4 mr-2" />
                              复制代码
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              下载模板
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <Link href="#">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                查看示例
                              </Link>
                            </Button>
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

      {/* 最佳实践 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader>
              <SectionTitle>模板使用最佳实践</SectionTitle>
              <SectionSubtitle>
                提高GEO实施效果的专业建议
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700 dark:text-green-300">✅ 推荐做法</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 根据具体内容选择合适的Schema类型</li>
                    <li>• 确保所有数据准确且实时更新</li>
                    <li>• 使用结构化数据验证工具测试</li>
                    <li>• 保持内容与结构化数据的一致性</li>
                    <li>• 定期检查和更新标记信息</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-lg text-red-700 dark:text-red-300">❌ 避免错误</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 不要复制粘贴不相关的内容</li>
                    <li>• 避免使用不准确或过时的数据</li>
                    <li>• 不要过度使用复杂嵌套结构</li>
                    <li>• 避免标记与页面内容不符</li>
                    <li>• 不要忽略必需属性的填写</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 相关资源 */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>相关资源</SectionTitle>
            <SectionSubtitle>
              继续学习GEO实施技巧
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">详细教程</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  学习GEO实施的详细步骤和技巧
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/knowledge/guides">
                    查看教程
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">优化清单</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  完整的GEO优化检查清单
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/checklist">
                    查看清单
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">专业工具</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  提高GEO工作效率的专业工具
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/knowledge/tools">
                    浏览工具
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
              需要定制化的GEO解决方案？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              我们的专家团队可以为您提供个性化的GEO模板和实施指导。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  咨询专家
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tools">使用在线工具</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}