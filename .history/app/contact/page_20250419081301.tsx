import { Button } from '@/components/ui/button'

export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">اتصل بنا</h1>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">معلومات الاتصال</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <span className="font-medium">العنوان:</span>
                <span>الرياض، المملكة العربية السعودية</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">البريد الإلكتروني:</span>
                <a
                  href="mailto:info@e-trek.com"
                  className="text-[#6b4226] hover:underline"
                >
                  info@e-trek.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">الهاتف:</span>
                <a
                  href="tel:+966123456789"
                  className="text-[#6b4226] hover:underline"
                >
                  +966 12 345 6789
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">ساعات العمل</h2>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>الأحد - الخميس:</span>
                <span>9:00 ص - 5:00 م</span>
              </p>
              <p className="flex justify-between">
                <span>الجمعة:</span>
                <span>مغلق</span>
              </p>
              <p className="flex justify-between">
                <span>السبت:</span>
                <span>10:00 ص - 2:00 م</span>
              </p>
            </div>
          </div>
        </div>

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
    </div>
  )
}
