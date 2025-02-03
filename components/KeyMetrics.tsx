import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, Music, DollarSign, Award } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface KeyMetricsProps {
  data: {
    totalUsers: number
    activeUsers: number
    totalStreams: number
    revenue: number
    topArtist: string
  }
}

export default function KeyMetrics({ data }: KeyMetricsProps) {
  const metrics = [
    { title: "Total Users", value: data.totalUsers, icon: Users, tooltip: "Total number of registered users" },
    {
      title: "Active Users",
      value: data.activeUsers,
      icon: UserCheck,
      tooltip: "Users who streamed at least one song in the last 30 days",
    },
    { title: "Total Streams", value: data.totalStreams, icon: Music, tooltip: "Total number of song streams" },
    {
      title: "Revenue",
      value: `$${data.revenue.toLocaleString()}`,
      icon: DollarSign,
      tooltip: "Total revenue from subscriptions and advertisements",
    },
    {
      title: "Top Artist",
      value: data.topArtist,
      icon: Award,
      tooltip: "Artist with the most streams in the past 30 days",
    },
  ]

  return (
    <TooltipProvider>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric) => (
          <Tooltip key={metric.title}>
            <TooltipTrigger asChild>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <metric.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent>
              <p>{metric.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

