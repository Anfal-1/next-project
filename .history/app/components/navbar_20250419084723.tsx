'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MobileNav } from './mobile-nav'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-all duration-200 ${
        scrolled
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
          : 'bg-background'
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Link href="/" aria-label="الصفحة الرئيسية">
            <Image
              src="/images/logo.jpg"
              alt=""
              width={40}
              height={40}
              className="text-green-600"
            />
          </Link>
          <span className="font-bold text-lg hidden sm:inline-block">
            E-Trek
          </span>
        </div>
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="التنقل الرئيسي"
        >
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            الرئيسية
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            حول E-Trek
          </Link>
          <Link
            href="/#features"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            المميزات
          </Link>
          <Link
            href="/#unique"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            ماذا يميزنا
          </Link>
          <Link
            href="/#faq"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            الأسئلة الشائعة
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            اتصل بنا
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-sm">
              العربية
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              EN
            </Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
