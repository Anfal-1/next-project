import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer
      className="bg-[#6b4226] text-white py-8 mt-auto"
      aria-labelledby="footer-heading"
    >
      <div className="container">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">التواصل الاجتماعي</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white text-[#6b4226] rounded-full hover:bg-gray-200 transition-colors"
                aria-label="تويتر"
              >
                X
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white text-[#6b4226] rounded-full hover:bg-gray-200 transition-colors"
                aria-label="انستغرام"
              >
                IG
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white text-[#6b4226] rounded-full hover:bg-gray-200 transition-colors"
                aria-label="يوتيوب"
              >
                YT
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline focus:underline">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:underline focus:underline"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:underline focus:underline"
                >
                  الخدمات
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:underline focus:underline"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/logo.jpg"
              alt="E-Trek Logo"
              width={60}
              height={60}
              className="mb-4"
            />
            <p className="text-sm">
              جميع الحقوق محفوظة © E-Trek {new Date().getFullYear()}
            </p>
            <p className="text-sm mt-2">
              <Link href="/privacy" className="hover:underline focus:underline">
                سياسة الخصوصية
              </Link>{' '}
              |
              <Link
                href="/terms"
                className="hover:underline focus:underline mr-2"
              >
                شروط الاستخدام
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
