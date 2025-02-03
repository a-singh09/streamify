"use client"

import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { MainNav } from "@/components/main-nav"
import { Overview } from "@/components/overview"
import { RecentSales } from "@/components/recent-sales"
import { Search } from "@/components/search"
import { UserNav } from "@/components/user-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import KeyMetrics from "./KeyMetrics"
import DataVisualization from "./DataVisualization"
import DataTable from "./DataTable"
import { mockData } from "@/lib/mockData"

export default function Dashboard() {
  const [data, setData] = useState(mockData)

  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <span className="text-2xl font-bold pr-2">Streamify</span>
          <MainNav className="mx-6 hidden md:flex" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <ThemeToggle />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="justify-start overflow-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <KeyMetrics data={data} />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Subscribers</CardTitle>
                  <CardDescription>300 users subscribed this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <DataVisualization data={data} />
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <DataTable data={data.recentStreams} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

