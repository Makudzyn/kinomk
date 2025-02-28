import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | MovieMK",
    default: "MovieMK - Films, actors and more"
  },
  description: "Information about films, with ratings, dates, duration and age restrictions"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

