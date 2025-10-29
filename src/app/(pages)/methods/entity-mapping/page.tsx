import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, MapPin, Network, Brain, Target, Database, GitBranch, CheckCircle, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "实体映射 - GEO优化第一步 | 构建AI知识图谱",
  description: "实体映射是GEO优化的基础步骤。学习如何建立完整的知识图谱，让AI准确理解您的品牌、产品和服务在行业中的位置和关系。",
  keywords: ["实体映射", "知识图谱", "Schema标记", "结构化数据", "AI理解", "语义搜索", "实体关系"],
}

export default function EntityMappingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">GEO方法 · 第一步</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <GradientText>实体映射</GradientText>
              <br />
              构建AI知识图谱
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              建立完整的知识图谱，让AI准确理解您的品牌、产品和服务在行业中的位置和关系，为AI提供结构化的语义信息。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/methods/prompt-layering">
                  下一步：提示词分层
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">获取专业实施支持</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 核心概念 */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>什么是实体映射？</SectionTitle>
            <SectionSubtitle>
              理解实体映射的核心概念和在GEO优化中的关键作用
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">AI理解的基础</CardTitle>
                    <p className="text-sm text-muted-foreground">语义层面的信息组织</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  实体映射是将现实世界中的概念、对象、关系转化为AI可以理解和处理的结构化数据的过程。
                  它帮助AI建立对您业务领域的深度理解。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">品牌实体识别与定义</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">产品服务属性映射</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">行业关系网络建立</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Network className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">知识图谱构建</CardTitle>
                    <p className="text-sm text-muted-foreground">连接信息孤岛</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  通过建立实体间的关联关系，形成完整的知识图谱，让AI能够理解不同信息点之间的逻辑关系，
                  从而提供更准确、更相关的回答。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">概念层级结构设计</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">属性特征完整描述</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">关联关系明确定义</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* 实体类型分类 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>核心实体类型</SectionTitle>
            <SectionSubtitle>
              企业需要重点映射的关键实体类别和属性
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>组织实体</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">公司信息</h5>
                    <p className="text-xs text-muted-foreground">公司名称、类型、规模、成立时间</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">联系方式</h5>
                    <p className="text-xs text-muted-foreground">地址、电话、邮箱、社交媒体</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">业务范围</h5>
                    <p className="text-xs text-muted-foreground">行业分类、服务区域、目标市场</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <GitBranch className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>产品服务</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">产品特性</h5>
                    <p className="text-xs text-muted-foreground">功能、规格、价格、技术参数</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">服务内容</h5>
                    <p className="text-xs text-muted-foreground">服务类型、流程、交付标准</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">竞争优势</h5>
                    <p className="text-xs text-muted-foreground">独特卖点、差异化特点</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>人物实体</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">核心团队</h5>
                    <p className="text-xs text-muted-foreground">创始人、高管、专家顾问</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">专业背景</h5>
                    <p className="text-xs text-muted-foreground">教育经历、工作经验、专业领域</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">行业影响</h5>
                    <p className="text-xs text-muted-foreground">成就贡献、行业地位、影响力</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>地理位置</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">办公地址</h5>
                    <p className="text-xs text-muted-foreground">总部、分支、服务中心位置</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">服务区域</h5>
                    <p className="text-xs text-muted-foreground">覆盖范围、主要市场区域</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">物流网络</h5>
                    <p className="text-xs text-muted-foreground">仓储、配送、供应链节点</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>事件活动</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">里程碑事件</h5>
                    <p className="text-xs text-muted-foreground">成立时间、重要发布、融资轮次</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">行业活动</h5>
                    <p className="text-xs text-muted-foreground">参展会议、技术演讲、行业论坛</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">荣誉成就</h5>
                    <p className="text-xs text-muted-foreground">奖项认证、媒体报道、行业认可</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>概念关系</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">行业分类</h5>
                    <p className="text-xs text-muted-foreground">所属行业、细分领域、市场定位</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">技术栈</h5>
                    <p className="text-xs text-muted-foreground">核心技术、技术优势、创新点</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">合作伙伴</h5>
                    <p className="text-xs text-muted-foreground">供应商、客户、战略伙伴关系</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* 实施步骤 */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>实施步骤</SectionTitle>
            <SectionSubtitle>
              系统化的实体映射实施流程，确保完整性和准确性
            </SectionSubtitle>
          </SectionHeader>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">实体识别与清单建立</CardTitle>
                      <p className="text-sm text-muted-foreground">全面梳理业务中的所有重要实体</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-semibold text-sm">关键活动</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• 审核网站内容和服务文档</li>
                            <li>• 分析业务流程和产品目录</li>
                            <li>• 识别核心人物和组织结构</li>
                            <li>• 梳理重要事件和里程碑</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-sm">产出物</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• 实体清单目录</li>
                            <li>• 优先级排序报告</li>
                            <li>• 实体类型分类表</li>
                            <li>• 数据来源清单</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">属性定义与关系映射</CardTitle>
                      <p className="text-sm text-muted-foreground">为每个实体定义详细的属性和关联关系</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-semibold text-sm">属性定义</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• 确定每个实体的核心属性</li>
                            <li>• 定义属性的数据类型和格式</li>
                            <li>• 建立属性值的验证规则</li>
                            <li>• 确保属性描述的准确性</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-sm">关系映射</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• 定义实体间的关联类型</li>
                            <li>• 建立层级和从属关系</li>
                            <li>• 标识重要的业务关系</li>
                            <li>• 绘制关系网络图谱</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Schema.org 标记实施</CardTitle>
                      <p className="text-sm text-muted-foreground">将实体数据转换为标准化的结构化数据</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-semibold text-sm">Schema选择</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• 选择合适的Schema.org类型</li>
                            <li>• 定义自定义属性和扩展</li>
                            <li>• 确保标记的语义准确性</li>
                            <li>• 遵循Schema最佳实践</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-sm">技术实施</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• 编写JSON-LD结构化数据</li>
                            <li>• 集成到网站HTML中</li>
                            <li>• 验证标记语法和结构</li>
                            <li>• 测试搜索引擎解析效果</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">质量验证与持续维护</CardTitle>
                      <p className="text-sm text-muted-foreground">确保实体数据的准确性和时效性</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-semibold text-sm">质量检查</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• 数据一致性验证</li>
                            <li>• 关系逻辑正确性检查</li>
                            <li>• Schema标记语法验证</li>
                            <li>• AI解析效果测试</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-sm">维护机制</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• 建立数据更新流程</li>
                            <li>• 设置变更监控机制</li>
                            <li>• 定期审核实体数据</li>
                            <li>• 跟踪AI引用情况</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* 最佳实践 */}
      <Section className="bg-muted/30">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>最佳实践建议</SectionTitle>
            <SectionSubtitle>
              基于实践经验总结的实体映射优化策略
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  推荐实践
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 从核心业务实体开始，逐步扩展到关联实体</li>
                  <li>• 使用标准的Schema.org词汇，避免自定义标签</li>
                  <li>• 确保实体描述的准确性和时效性</li>
                  <li>• 建立实体间的逻辑关联，形成知识网络</li>
                  <li>• 定期更新实体信息，保持数据新鲜度</li>
                  <li>• 监测AI对实体的理解程度，及时调整</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                  常见误区
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 过度优化，创建不相关的实体关系</li>
                  <li>• 使用过于复杂的自定义Schema标记</li>
                  <li>• 忽视实体信息的更新和维护</li>
                  <li>• 只关注SEO关键词，忽视语义准确性</li>
                  <li>• 缺乏系统的实体管理流程</li>
                  <li>• 没有监测AI引用效果的数据分析</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* 工具推荐 */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>实用工具推荐</SectionTitle>
            <SectionSubtitle>
              帮助您高效实施实体映射的专业工具
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">Schema.org 标记验证器</CardTitle>
                <p className="text-sm text-muted-foreground">Google官方工具</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  验证结构化数据的语法正确性和语义完整性
                </p>
                <Badge variant="outline">免费工具</Badge>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">知识图谱构建平台</CardTitle>
                <p className="text-sm text-muted-foreground">专业级解决方案</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  可视化构建和管理复杂的实体关系网络
                </p>
                <Badge variant="outline">企业级</Badge>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">实体数据管理系统</CardTitle>
                <p className="text-sm text-muted-foreground">内部管理工具</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  集中管理和维护所有实体数据的专业系统
                </p>
                <Badge variant="outline">定制开发</Badge>
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
              开始您的实体映射之旅
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              专业的实体映射是GEO优化成功的基础。我们的专家团队将为您提供完整的实施支持。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  预约免费咨询
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/methods/prompt-layering">
                  了解下一步
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}