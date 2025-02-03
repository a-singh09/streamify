import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserGrowthChart } from "./charts/UserGrowthChart"
import { RevenueDistributionChart } from "./charts/RevenueDistributionChart"
import { TopStreamedSongsChart } from "./charts/TopStreamedSongsChart"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface DataVisualizationProps {
  data: {
    userGrowth: { date: string; totalUsers: number; activeUsers: number }[]
    revenueDistribution: { source: string; amount: number }[]
    topStreamedSongs: { song: string; streams: number }[]
  }
}

export default function DataVisualization({ data }: DataVisualizationProps) {
  return (
    <TooltipProvider>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <UserGrowthChart data={data.userGrowth} />
              </CardContent>
            </Card>
          </TooltipTrigger>
          <TooltipContent>
            <p>Total and active users over the past 12 months</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Card>
              <CardHeader>
                <CardTitle>Revenue Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <RevenueDistributionChart data={data.revenueDistribution} />
              </CardContent>
            </Card>
          </TooltipTrigger>
          <TooltipContent>
            <p>Breakdown of revenue from different sources</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Card className="col-span-2 md:col-span-3">
              <CardHeader>
                <CardTitle>Top 5 Streamed Songs</CardTitle>
              </CardHeader>
              <CardContent>
                <TopStreamedSongsChart data={data.topStreamedSongs.slice(0, 5)} />
              </CardContent>
            </Card>
          </TooltipTrigger>
          <TooltipContent>
            <p>Most streamed songs in the past 30 days</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

