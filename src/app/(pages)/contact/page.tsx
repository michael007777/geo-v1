import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "联系我们 - GEO优化咨询服务",
  description: "联系GEO Optimization Institute，获取专业的生成式引擎优化咨询服务。免费评估您的AI可见性，制定专属优化策略。",
  keywords: ["GEO咨询", "AI优化服务", "生成式引擎优化服务", "ChatGPT优化咨询", "AI时代营销咨询"],
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">联系我们</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              开始您的
              <GradientText>GEO优化之旅</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              让我们的专家团队为您提供专业的GEO咨询服务，
              帮助您在AI时代建立品牌权威性和竞争优势。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <Section>
        <SectionContainer>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>免费咨询</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    30分钟一对一专业咨询，评估您的AI可见性现状
                  </p>
                  <Button size="sm" className="w-full">
                    预约咨询
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>定制方案</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    根据业务需求制定专属GEO优化方案和实施计划
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    了解方案
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>快速联系</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    直接发送邮件，我们会在24小时内回复您的咨询
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    发送邮件
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form and Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>发送咨询</CardTitle>
                  <CardDescription>
                    请填写以下信息，我们会尽快与您联系
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">姓名 *</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="您的姓名"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">公司</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="公司名称"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">邮箱 *</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">电话</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="您的联系电话"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">咨询服务</label>
                    <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">请选择咨询服务</option>
                      <option value="assessment">免费评估</option>
                      <option value="strategy">策略制定</option>
                      <option value="implementation">实施支持</option>
                      <option value="training">团队培训</option>
                      <option value="other">其他咨询</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">详细描述</label>
                    <textarea
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      rows={4}
                      placeholder="请描述您的需求和目标..."
                    />
                  </div>

                  <Button className="w-full">
                    发送咨询
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>联系信息</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">邮箱</div>
                        <div className="text-sm text-muted-foreground">contact@yinhang.org</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">电话</div>
                        <div className="text-sm text-muted-foreground">+86 400-123-4567</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">地址</div>
                        <div className="text-sm text-muted-foreground">
                          北京市朝阳区CBD核心区<br />
                          国贸大厦A座2801室
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">工作时间</div>
                        <div className="text-sm text-muted-foreground">
                          周一至周五: 9:00 - 18:00<br />
                          周六: 9:00 - 12:00
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>响应时间</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">邮件咨询</span>
                      <Badge variant="secondary">24小时内</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">电话咨询</span>
                      <Badge variant="secondary">即时响应</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">免费评估</span>
                      <Badge variant="secondary">3个工作日</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <SectionHeader>
              <SectionTitle>
                常见问题
              </SectionTitle>
              <SectionSubtitle>
                关于GEO优化和我们的服务
              </SectionSubtitle>
            </SectionHeader>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">什么是GEO优化？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    GEO（生成式引擎优化）是针对ChatGPT、Gemini、Perplexity等生成式AI平台的内容优化策略，
                    目标是让AI准确理解、抓取并整合您的信息到生成的回答中。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">GEO和传统SEO有什么区别？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    传统SEO专注于搜索引擎排名和流量获取，而GEO专注于在AI生成回答中的呈现质量。
                    GEO更注重内容权威性、结构化数据和语义准确性。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">GEO优化需要多长时间看到效果？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    根据行业和优化复杂度，通常在1-3个月内开始看到初步效果，
                    6-12个月达到稳定改善。这是一个持续优化的过程。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">如何开始GEO优化？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    建议从免费评估开始，我们会分析您当前的AI可见性状况，
                    然后制定个性化的优化方案和实施计划。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              准备开始您的GEO之旅？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              不要等待竞争对手抢占先机。现在就联系我们，获取专业的GEO优化服务。
            </p>
            <Button size="lg">
              <Mail className="mr-2 h-5 w-5" />
              立即联系咨询
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}