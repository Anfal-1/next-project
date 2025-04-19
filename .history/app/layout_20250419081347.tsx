import type React from 'react'
import '@/app/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import localFont from 'next/font/local'

// Use local font instead of Google Fonts
const tajawal = localFont({
  src: [
    {
      path: '../public/fonts/Tajawal-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Tajawal-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Tajawal-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Tajawal-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Tajawal-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-tajawal',
  display: 'swap',
})

export const metadata = {
  title: 'E-Trek - نحو مستقبل أكثر استدامة',
  description:
    'منصة ذكية تهدف إلى مكافحة التصحر وتعزيز استدامة الموارد الطبيعية باستخدام الذكاء الاصطناعي',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
          >
            تخطي إلى المحتوى الرئيسي
          </a>

          <Navbar />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
