import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface AIModelCardProps {
  model: {
    id: string
    name: string
    description: string
    icon: string
    color: string
    status: string
    userCount: string
    features: string[]
  }
  isSelected: boolean
  onClick: () => void
}

export const AIModelCard = ({ model, isSelected, onClick }: AIModelCardProps) => {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-300 hover:shadow-lg group",
        isSelected && "ring-2 ring-primary border-primary"
      )}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <div className={cn(
            "text-4xl p-3 rounded-xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110",
            model.color,
            "bg-opacity-10"
          )}>
            {model.icon}
          </div>
          <div className="flex items-center space-x-2">
            <div className={cn(
              "w-2 h-2 rounded-full",
              model.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
            )} />
            <Badge variant="outline" className="text-xs">
              {model.userCount}
            </Badge>
          </div>
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {model.name}
        </CardTitle>
        <CardDescription className="text-sm">
          {model.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1">
          {model.features.slice(0, 2).map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}