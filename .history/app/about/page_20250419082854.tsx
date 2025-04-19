import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">حول E-Trek</h1>

      <div className="max-w-4xl mx-auto">
        <div className="relative h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/about-banner.jpg"
            alt="صورة غلاف عن E-Trek"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-4xl font-bold">
              نحو مستقبل أكثر استدامة
            </h2>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            منصة E-Trek هي منصة ذكية تهدف إلى مكافحة التصحر وتعزيز استدامة
            الموارد الطبيعية باستخدام أحدث تقنيات الذكاء الاصطناعي وبيانات
            الأقمار الصناعية. نسعى لدعم الجهات الحكومية، المزارعين، والمنظمات
            البيئية بحلول مبتكرة لتحليل الأراضي ورصد التغيرات البيئية.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">رؤيتنا</h3>
          <p className="text-lg leading-relaxed">
            نسعى لأن نكون الرائدين في مجال تطبيقات الذكاء الاصطناعي لمكافحة
            التصحر وتعزيز الاستدامة البيئية في المنطقة العربية والعالم.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">مهمتنا</h3>
          <p className="text-lg leading-relaxed">
            توفير حلول تكنولوجية متقدمة ومبتكرة تساعد في الحفاظ على البيئة
            ومكافحة التصحر من خلال الاستفادة من تقنيات الذكاء الاصطناعي وبيانات
            الأقمار الصناعية.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">قيمنا</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>الابتكار والتطوير المستمر</li>
            <li>الاستدامة والمسؤولية البيئية</li>
            <li>الشفافية والمصداقية</li>
            <li>التعاون والشراكة</li>
            <li>التميز في الأداء</li>
          </ul>

          <div className="flex justify-center mt-8">
            <Link href="/contact">
              <Button className="bg-[#6b4226] hover:bg-[#5a371f] transition-all duration-300">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
