import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Analytics } from "@/components/analytics"
import NoScriptStyles from "@/components/noscript-styles"
import ClientLayout from "./client"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ajit Babu Kakumanu | Full-Stack Developer",
  description:
    "Portfolio of Ajit Babu Kakumanu, a Full-Stack Developer specializing in React.js, Node.js, and mobile applications.",
  keywords: [
    "Ajit Babu Kakumanu",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Node.js",
    "Python",
  ],
  authors: [{ name: "Ajit Babu Kakumanu" }],
  creator: "Ajit Babu Kakumanu",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/profile.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ajitbabukakumanu.tech",
    title: "Ajit Babu Kakumanu | Full-Stack Developer",
    description:
      "Portfolio of Ajit Babu Kakumanu, a Full-Stack Developer specializing in React.js, Node.js, and mobile applications.",
    siteName: "Ajit Babu Kakumanu Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 512,
        height: 512,
        alt: "Rudrika Panigrahi Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajit Babu Kakumanu | Full-Stack Developer",
    description:
      "Portfolio of Ajit Babu Kakumanu, a Full-Stack Developer specializing in React.js, Node.js, and mobile applications.",
    creator: "@ajitbabukakumanu",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <NoScriptStyles />
      </head>
      <body>
        <Suspense>
          <ClientLayout>{children}</ClientLayout>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}