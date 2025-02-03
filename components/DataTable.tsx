"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

interface Stream {
  songName: string
  artist: string
  dateStreamed: string
  streamCount: number
  userId: string
}

interface DataTableProps {
  data: Stream[]
}

export default function DataTable({ data }: DataTableProps) {
  const [sortColumn, setSortColumn] = useState<keyof Stream>("dateStreamed")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const [filter, setFilter] = useState("")

  const sortedData = [...data].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  const filteredData = sortedData.filter(
    (item) =>
      item.songName.toLowerCase().includes(filter.toLowerCase()) ||
      item.artist.toLowerCase().includes(filter.toLowerCase()),
  )

  const handleSort = (column: keyof Stream) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  return (
    <div className="space-y-4 border rounded-md p-4">
      <Input
        placeholder="Filter by song or artist..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="max-w-sm"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-full justify-start">
                    Song Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => handleSort("songName")}>Sort by Song Name</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableHead>
            <TableHead>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-full justify-start">
                    Artist
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => handleSort("artist")}>Sort by Artist</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableHead>
            <TableHead>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-full justify-start">
                    Date Streamed
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => handleSort("dateStreamed")}>Sort by Date Streamed</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableHead>
            <TableHead>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-full justify-start">
                    Stream Count
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => handleSort("streamCount")}>Sort by Stream Count</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableHead>
            <TableHead>User ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((stream) => (
            <TableRow key={`${stream.songName}-${stream.userId}-${stream.dateStreamed}`}>
              <TableCell>{stream.songName}</TableCell>
              <TableCell>{stream.artist}</TableCell>
              <TableCell>{stream.dateStreamed}</TableCell>
              <TableCell>{stream.streamCount}</TableCell>
              <TableCell>{stream.userId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

