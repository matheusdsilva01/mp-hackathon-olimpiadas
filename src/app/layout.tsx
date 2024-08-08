import { ReactNode } from "react"
import localFont from "next/font/local"
import "./globals.css"
import { SidebarMenu } from "@/components"
import { Providers } from "@/providers"
import type { Metadata } from "next"

const OlympicHeadlineRegular = localFont({
  src: "./fonts/OlympicHeadline-Regular.woff2",
  display: "swap",
  variable: "--font-olympic-headline-regular",
})

const OlympicSans = localFont({
  src: [
    {
      path: "./fonts/OlympicSans-Bold.woff2",
    },
    {
      path: "./fonts/OlympicSans-Regular.woff2",
    },
  ],
  display: "swap",
  variable: "--font-olympic-sans",
})

const Paris2024 = localFont({
  src: [
    {
      path: "./fonts/Paris2024-Bold.woff2",
    },
    {
      path: "./fonts/Paris2024-black.woff2",
    },
    {
      path: "./fonts/Paris2024-BoldItalic.woff2",
    },
  ],
  display: "swap",
  variable: "--font-paris-2024",
})

const SourceSansPro = localFont({
  src: [
    {
      path: "./fonts/SourceSansPro-Black.woff2",
    },
    {
      path: "./fonts/SourceSansPro-Bold.woff2",
    },
    {
      path: "./fonts/SourceSansPro-regular.woff2",
    },
  ],
  display: "swap",
  variable: "--font-source-sans-pro",
})

export const metadata: Metadata = {
  title: "Olympicstats",
  description: "Olympicstats is a website to see the latest Olympic events",
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const olympicsFonts = `${SourceSansPro.className} ${OlympicHeadlineRegular.variable} ${OlympicSans.variable} ${Paris2024.variable}`

  return (
    <html lang="en">
      <body className={olympicsFonts}>
        <Providers>
          <SidebarMenu />
          <div className="flex flex-1 overflow-auto p-8">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
