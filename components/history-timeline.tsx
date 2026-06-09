"use client"

import { historyTimeline } from "@/lib/history"
import { Calendar } from "lucide-react"

export default function HistoryTimeline() {
  return (
    <section className="py-20">

      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Hành Trình Hình Thành & Phát Triển
        </h2>

        <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
          Từ cơ sở sản xuất truyền thống tại Tây Ninh mang tên bánh tráng Như Bình đến thương hiệu
          Bánh Tráng Quý Nhân ngày nay.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Đường dọc */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 -translate-x-1/2 hidden md:block" />

        {historyTimeline.map((item, index) => (
          <div
            key={index}
            className={`relative mb-16 flex flex-col md:flex-row ${
              index % 2 === 0
                ? "md:flex-row-reverse"
                : ""
            }`}
          >
            {/* Nội dung */}
            <div className="md:w-1/2 p-4">
              <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-8 border">
                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Mốc giữa */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-10 z-10">
              <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg">
                <Calendar className="text-white" />
              </div>
            </div>

            {/* Năm */}
            <div className="md:w-1/2 flex items-start justify-center md:justify-center p-4">
              <span className="bg-white border px-5 py-3 rounded-lg shadow font-bold text-emerald-700">
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}