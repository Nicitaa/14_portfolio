import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Layout from "./components/Layout"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

const inter = Inter({ subsets: ["latin"], preload: true })

export const metadata: Metadata = {
  title: "Portfolio t.me/nicitaacom",
  description: "https://t.me/nicitaacom",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Layout>{children}</Layout>
        <Footer />
      </body>
    </html>
  )
}
