import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ExternalLink, MapPin, Leaf, BarChart3, Search } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="container py-12 md:py-16"
        aria-labelledby="hero-heading"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 md:w-1/2">
            <h1
              id="hero-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              E-Trek
            </h1>
            <p className="text-xl font-semibold text-gray-700">
              نحو مستقبل أكثر استدامة
            </p>
            <Button
              className="bg-[#6b4226] hover:bg-[#5a371f] mt-4 transition-all duration-300 transform hover:scale-105"
              aria-label="ابدأ الآن مع E-Trek"
            >
              ابدأ ال��ن
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="border-4 border-[#6b4226] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
              <Image
                src="/images/homeimage1.jpg"
                alt="منظر طبيعي لواحة نخيل مع مباني في الخلفية وسماء زرقاء"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 md:py-16 relative"
        aria-labelledby="about-heading"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-banner.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container relative z-10">
          <div className="bg-black/60 p-6 md:p-8 rounded-lg backdrop-blur-sm max-w-3xl mx-auto">
            <h2
              id="about-heading"
              className="text-2xl md:text-3xl font-bold text-center mb-6 text-white"
            >
              حول E-Trek
            </h2>
            <p className="text-center text-white leading-relaxed">
              منصة ذكية تهدف إلى مكافحة التصحر وتعزيز استدامة الموارد الطبيعية
              باستخدام أحدث تقنيات الذكاء الاصطناعي وبيانات الأقمار الصناعية.
              نسعى لدعم الجهات الحكومية، المزارعين، والمنظمات البيئية بحلول
              مبتكرة لتحليل الأراضي ورصد التغيرات البيئية.
            </p>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section
        id="features"
        className="container py-12 md:py-16"
        aria-labelledby="features-heading"
      >
        <h2
          id="features-heading"
          className="text-2xl md:text-3xl font-bold text-center mb-10"
        >
          كيف E-Trek يستخدم الذكاء الاصطناعي لمكافحة التصحر
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Search className="w-10 h-10 text-[#6b4226]" />,
              title: 'تحليل صور الأقمار الصناعية',
              description:
                'تحليل صور الأقمار الصناعية لرصد التغيرات في الغطاء النباتي والتربة',
            },
            {
              icon: <Leaf className="w-10 h-10 text-[#6b4226]" />,
              title: 'تحليل نمو النبات',
              description: 'مراقبة نمو النباتات وتحديد المناطق المعرضة للخطر',
            },
            {
              icon: <BarChart3 className="w-10 h-10 text-[#6b4226]" />,
              title: 'نماذج تنبؤ ذكية',
              description:
                'استخدام نماذج التعلم الآلي للتنبؤ بالتغيرات المستقبلية في البيئة',
            },
            {
              icon: <MapPin className="w-10 h-10 text-[#6b4226]" />,
              title: 'تحليل صور للمناطق المتضررة',
              description: 'تحديد المناطق المتضررة من التصحر وتقديم حلول مخصصة',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 text-center hover:shadow-md transition-all duration-300 hover:border-[#6b4226] focus-within:border-[#6b4226] focus-within:ring-2 focus-within:ring-[#6b4226]/20"
              tabIndex={0}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section
        id="unique"
        className="container py-12 md:py-16"
        aria-labelledby="unique-heading"
      >
        <h2
          id="unique-heading"
          className="text-2xl md:text-3xl font-bold text-center mb-10"
        >
          ماذا يميزنا
        </h2>

        <div className="flex flex-col gap-16">
          {/* Feature 1 */}
          <div
            className="flex flex-col md:flex-row items-center gap-8 scroll-mt-20"
            id="unique-1"
          >
            <div className="md:w-1/2 space-y-4 order-2 md:order-1">
              <h3 className="text-xl font-semibold">
                تحليل الغطاء النباتي باستخدام الذكاء الاصطناعي
              </h3>
              <p className="text-gray-600 leading-relaxed">
                نستخدم تقنيات متقدمة في الذكاء الاصطناعي لتحليل صور الأقمار
                الصناعية ومراقبة التغيرات في الغطاء النباتي بدقة عالية.
              </p>
              <Button variant="outline" className="group">
                اقرأ المزيد{' '}
                <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
                <Image
                  src="/images/feature1.jpg"
                  alt="نباتات صغيرة تنمو من التربة في مراحل مختلفة من النمو"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className="flex flex-col md:flex-row items-center gap-8 scroll-mt-20"
            id="unique-2"
          >
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
                <Image
                  src="/images/feature2.jpg"
                  alt="منظر جوي للحقول الزراعية مع جبال في الخلفية وعلامة دائرية"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-xl font-semibold">
                تقارير ذكية مدعومة ببيانات Uaema
              </h3>
              <p className="text-gray-600 leading-relaxed">
                نقدم تقارير تفصيلية مدعومة بالبيانات من مصادر موثوقة لمساعدتك
                على اتخاذ قرارات مستنيرة بشأن إدارة الموارد الطبيعية.
              </p>
              <Button variant="outline" className="group">
                اقرأ المزيد{' '}
                <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className="flex flex-col md:flex-row items-center gap-8 scroll-mt-20"
            id="unique-3"
          >
            <div className="md:w-1/2 space-y-4 order-2 md:order-1">
              <h3 className="text-xl font-semibold">
                عرض خرائط تفاعلية للبيئة
              </h3>
              <p className="text-gray-600 leading-relaxed">
                خرائط تفاعلية تظهر التغيرات في الغطاء النباتي والتربة على مر
                الزمن، مما يساعد في تحديد المناطق المعرضة للخطر.
              </p>
              <Button variant="outline" className="group">
                اقرأ المزيد{' '}
                <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
                <Image
                  src="/images/feature3.jpg"
                  alt="منظر جوي للأراضي الزراعية مع دبوس موقع أحمر وتصور ثلاثي الأبعاد لطبقة التربة"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div
            className="flex flex-col md:flex-row items-center gap-8 scroll-mt-20"
            id="unique-4"
          >
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
                <Image
                  src="/images/feature4.jpg"
                  alt="منظر جوي للأراضي الزراعية مع رمز قمر صناعي ودبابيس موقع تظهر تغطية المراقبة"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-xl font-semibold">
                دعم نمو الأشجار الصناعية والمزارع
              </h3>
              <p className="text-gray-600 leading-relaxed">
                نقدم حلولاً مخصصة لدعم نمو الأشجار الصناعية والمزارع، مما يساهم
                في مكافحة التصحر وتعزيز الاستدامة البيئية.
              </p>
              <Button variant="outline" className="group">
                اقرأ المزيد{' '}
                <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="container py-12 md:py-16"
        aria-labelledby="faq-heading"
      >
        <h2
          id="faq-heading"
          className="text-2xl md:text-3xl font-bold text-center mb-10"
        >
          الأسئلة الشائعة
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {[
            {
              question: 'من يمكنه استخدام خدمات E-Trek؟',
              answer:
                'يمكن للمزارعين والباحثين والمؤسسات الحكومية والشركات الزراعية استخدام خدمات E-Trek.',
            },
            {
              question: 'كيف يمكن للمستخدم الوصول إلى خدمات E-Trek؟',
              answer:
                'يمكن الوصول إلى خدمات E-Trek من خلال منصتنا الإلكترونية أو تطبيق الهاتف المحمول.',
            },
            {
              question: 'كيف يساهم نظام E-Trek في تعزيز بيئة الزراعة 2030؟',
              answer:
                'يساهم نظام E-Trek في تعزيز بيئة الزراعة 2030 من خلال توفير بيانات دقيقة ومحدثة عن حالة التربة والغطاء النباتي.',
            },
            {
              question: 'ماهي الشراكات الحكومية والخاصة؟',
              answer:
                'نتعاون مع العديد من الجهات الحكومية والخاصة لتوفير حلول متكاملة لمكافحة التصحر وتعزيز الاستدامة البيئية.',
            },
            {
              question: 'هل يمكن الحصول على خدمة مخصصة لمنطقة معينة؟',
              answer:
                'نعم، يمكننا توفير خدمات مخصصة لمناطق محددة بناءً على احتياجاتك الخاصة.',
            },
          ].map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b"
            >
              <AccordionTrigger className="text-right py-4 hover:text-[#6b4226] transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-right text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact Form */}
      <section
        id="contact"
        className="container py-12 md:py-16 bg-gray-50 rounded-lg my-8"
        aria-labelledby="contact-heading"
      >
        <h2
          id="contact-heading"
          className="text-2xl md:text-3xl font-bold text-center mb-10"
        >
          تواصل معنا
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="grid gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  الاسم
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b4226]"
                  placeholder="أدخل اسمك"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b4226]"
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                الموضوع
              </label>
              <input
                id="subject"
                type="text"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b4226]"
                placeholder="موضوع الرسالة"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                الرسالة
              </label>
              <textarea
                id="message"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b4226]"
                placeholder="اكتب رسالتك هنا"
                rows={5}
                required
              />
            </div>
            <Button
              type="submit"
              className="bg-[#6b4226] hover:bg-[#5a371f] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
            >
              إرسال الرسالة
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}
