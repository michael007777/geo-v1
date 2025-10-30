import { Metadata } from "next"
import { ToolQueryPage } from "@/components/tools/tool-query-page"

export const metadata: Metadata = {
  title: "GEO工具查询 - AI模型收录排名查询工具",
  description: "免费查询您的企业在各大AI模型中的收录情况和排名位置。支持ChatGPT、Gemini、豆包、千问等10+主流AI模型的GEO指标检测。",
  keywords: ["GEO工具", "AI收录查询", "ChatGPT排名", "Gemini排名", "豆包排名", "千问排名", "AI可见性检测"],
}

export default function ToolsPage() {
  return <ToolQueryPage />
}