
import { client } from "@/sanity/lib/client"
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  MessageCircle,
  ShoppingBag,
} from "lucide-react"

export default async function ContactPage() {
  const settings =
    await client.fetch(SITE_SETTINGS_QUERY)

  return (
    <>
      {/* Banner */}
      <section className="relative h-[350px] overflow-hidden">
        <img
          src="/Banner-BanhTrangTayNinh.jpg"
          alt="Liên hệ Bánh Tráng Quý Nhân"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Liên Hệ Với Bánh Tráng Quý Nhân
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-gray-100">
              Chúng tôi luôn sẵn sàng hỗ trợ khách hàng, tư vấn sản phẩm và
              hợp tác phân phối đặc sản Tây Ninh trên toàn quốc.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 py-12 md:px-6 md:py-16">

        {/* Thông tin nhanh */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">

          <div className="bg-white border rounded-xl p-5 text-center shadow-sm">
            <Phone className="mx-auto mb-3 text-emerald-600" />
            <h3 className="font-semibold text-gray-500">Hotline</h3>
            <p className="text-sm text-gray-500">
            {settings?.phone }
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5 text-center shadow-sm">
            <Mail className="mx-auto mb-3 text-emerald-600" />
            <h3 className="font-semibold text-gray-500">Email</h3>
            <p className="text-sm text-gray-500">
            {settings?.email}
             </p>
          </div>

          <div className="bg-white border rounded-xl p-5 text-center shadow-sm">
            <Clock className="mx-auto mb-3 text-emerald-600" />
            <h3 className="font-semibold text-gray-500">Giờ làm việc</h3>
            <p className="text-sm text-gray-500">
              08:00 - 17:00
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5 text-center shadow-sm">
            <ShoppingBag className="mx-auto mb-3 text-emerald-600" />
            <h3 className="font-semibold text-gray-500">Giao hàng</h3>
            <p className="text-sm text-gray-500">
              Toàn quốc
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Thông tin liên hệ */}
          <div className="space-y-6">

            <div className="bg-emerald-100 dark:bg-emerald-950 p-6 rounded-xl">

              <h2 className="text-xl font-bold mb-6">
                Thông Tin Liên Hệ
              </h2>

              <div className="space-y-5">

                <div className="flex gap-4">
                  <Phone className="text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-medium">
                      Điện thoại
                    </h3>
                    <p className="text-gray-500">
                      {settings?.phone || "Đang cập nhật"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
  <Mail className="text-emerald-600 mt-1 shrink-0" />

  <div className="min-w-0">
    <h3 className="font-medium">
      Email
    </h3>

    <a
    href={`mailto:${settings?.email}`}
    className="
      block
      text-sm
      md:text-base
      text-gray-500
      dark:text-gray-400
      break-all
      hover:text-orange-500
    "
  >
    {settings?.email || "Đang cập nhật"}
  </a>
  </div>
</div>

                <div className="flex gap-4">
                  <MapPin className="text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-medium">
                      Địa chỉ
                    </h3>
                    <p className="text-gray-500">
                      {settings?.address || "Đang cập nhật"}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-emerald-100 dark:bg-emerald-950 p-6 rounded-xl">

              <h3 className="font-bold mb-4">
                Giờ Làm Việc
              </h3>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Thứ hai - Thứ bảy
                </span>

                <span>
                  08:00 - 17:00
                </span>
              </div>

            </div>

          </div>

          {/* Social & Shop */}
          <div className="md:col-span-2">

            <div className="bg-white dark:bg-gray-900
            border dark:border-gray-800
            rounded-xl p-8">

              <h2 className="text-2xl font-bold mb-3">
                Kết Nối Với Bánh Tráng Quý Nhân
              </h2>

              <p className="text-gray-500 mb-8">
                Theo dõi chúng tôi trên các nền tảng dưới đây để nhận thông tin
                mới nhất và đặt hàng nhanh chóng.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">

                <a
                  href={`https://zalo.me/${settings?.zalo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <MessageCircle className="text-blue-600" />
                    <div>
                      <h3 className="font-semibold">
                        Zalo
                      </h3>
                      <p className="text-sm text-gray-500">
                        Chat trực tiếp với cửa hàng
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href={settings?.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Facebook className="text-blue-700" />
                    <div>
                      <h3 className="font-semibold">
                        Facebook
                      </h3>
                      <p className="text-sm text-gray-500">
                        Theo dõi fanpage
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href={settings?.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <ShoppingBag className="text-black" />
                    <div>
                      <h3 className="font-semibold">
                        TikTok Shop
                      </h3>
                      <p className="text-sm text-gray-500">
                        Đặt hàng qua TikTok
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href={settings?.shopee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <ShoppingBag className="text-orange-500" />
                    <div>
                      <h3 className="font-semibold">
                        Shopee
                      </h3>
                      <p className="text-sm text-gray-500">
                        Mua hàng trên Shopee
                      </p>
                    </div>
                  </div>
                </a>

              </div>

              <div className="mt-8">
                <a href={`tel:${settings?.phone}`}>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition">
                  📞 Gọi Ngay
                </button>
              </a>
                
              </div>

            </div>

          </div>

        </div>

        {/* Google Maps */}
        <div className="mt-12 rounded-xl overflow-hidden h-[450px] border shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.489072417302!2d106.5971811!3d10.850357400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b004234b71f%3A0x39bfbfb497d233fc!2zQsOBTkggVFLDgU5HIFFVw50gTkjDgk4!5e0!3m2!1svi!2s!4v1780989813380!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Maps"
          />
        </div>

      </div>
    </>
  )
}