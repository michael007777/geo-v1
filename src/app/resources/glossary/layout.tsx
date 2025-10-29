import { Metadata } from "next"

export const metadata: Metadata = {
  title: "GEO术语库 - 生成式引擎优化专业词汇大全",
  description: "GEO领域的专业术语解释，包括实体映射、提示词优化、结构化数据等核心概念。帮助您快速掌握GEO专业知识。",
  keywords: ["GEO术语", "AI优化词汇", "生成式引擎优化", "Schema术语", "AI搜索概念", "专业知识库"],
}

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}