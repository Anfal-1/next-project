'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="القائمة"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">القائمة</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">E-Trek</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              aria-label="إغلاق"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">إغلاق</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="px-4 py-2 text-lg hover:bg-muted rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              href="/#about"
              className="px-4 py-2 text-lg hover:bg-muted rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              حول E-Trek
            </Link>
            <Link
              href="/#features"
              className="px-4 py-2 text-lg hover:bg-muted rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              المميزات
            </Link>
            <Link
              href="/#unique"
              className="px-4 py-2 text-lg hover:bg-muted rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              ماذا يميزنا
            </Link>
            <Link
              href="/#faq"
              className="px-4 py-2 text-lg hover:bg-muted rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              الأسئلة الشائعة
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2 text-lg hover:bg-muted rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              اتصل بنا
            </Link>
          </nav>
          <div className="flex gap-4 mt-auto">
            <Button variant="outline" className="w-full">
              العربية
            </Button>
            <Button variant="outline" className="w-full">
              EN
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
