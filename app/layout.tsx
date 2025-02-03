import { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

export const metadata: Metadata = {
  title: "Streamify Dashboard",
  description: "Analytics dashboard for Streamify music streaming service",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
