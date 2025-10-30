import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface GEOMetricCardProps {
  metric: {
    id: string
    name: string
    description: string
    icon: any
    unit: string
    color: string
    value: number
    change: number
  }
}

export const GEOMetricCard = ({ metric }: GEOMetricCardProps) => {
  const IconComponent = metric.icon

  const getPerformanceLevel = (value: number) => {
    if (value > 70) return { level: "优秀", variant: "default" as const }
    if (value > 40) return { level: "良好", variant: "secondary" as const }
    return { level: "需优化", variant: "outline" as const }
  }

  const performance = getPerformanceLevel(metric.value)

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={cn(
              "p-2 rounded-lg bg-muted transition-transform duration-300 group-hover:scale-110",
              metric.color
            )}>
              <IconComponent className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {metric.name}
              </CardTitle>
              <CardDescription>{metric.description}</CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div>
            <div className={cn(
              "text-3xl font-bold transition-all duration-300 group-hover:scale-105",
              metric.color
            )}>
              {metric.value}
              <span className="text-lg font-normal text-muted-foreground ml-1">
                {metric.unit}
              </span>
            </div>
            <div className={cn(
              "text-sm flex items-center mt-1 transition-colors",
              metric.change > 0 ? 'text-green-600' :
              metric.change < 0 ? 'text-red-600' : 'text-gray-600'
            )}>
              {metric.change !== 0 && (
                <>
                  {metric.change > 0 ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <AlertCircle className="h-3 w-3 mr-1" />
                  )}
                  {metric.change > 0 ? '+' : ''}{metric.change}{metric.unit}
                </>
              )}
              {metric.change === 0 && "无变化"}
            </div>
          </div>
          <div className="text-right">
            <Badge variant={performance.variant}>
              {performance.level}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}