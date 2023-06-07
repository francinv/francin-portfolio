import "./globals.css"
import React, { ReactNode } from "react"
import { Header } from "@/components"
import Modal from "react-modal"

export const metadata = {
  title: "Francin Vincent",
  description: "Learn more about Francin!",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
