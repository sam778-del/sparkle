import { Inter, Roboto, Raleway } from "next/font/google"
import "./globals.css"
import type { ReactNode } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", 
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-roboto",
  display: "swap",
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
  variable: "--font-raleway",
  display: "swap",
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} ${raleway.variable}`}>
      <body className="font-sans antialiased text-gray-900">{children}</body>
    </html>
  )
}
