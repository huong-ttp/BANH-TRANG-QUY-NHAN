"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Gửi thành công!",
        description: "Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm nhất.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <>
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
              Chúng tôi luôn sẵn sàng hỗ trợ khách hàng, tư vấn sản phẩm
              và hợp tác phân phối đặc sản Tây Ninh trên toàn quốc.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col gap-8">
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="md:col-span-1 space-y-6">
              <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full">
                    <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Điện thoại</h3>
                    <p className="text-gray-500">+91 98765 43210 (nhớ đổi số)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full">
                    <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-500">support@fastcart.in (nhớ đổi email)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full">
                    <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Địa chỉ</h3>
                    <p className="text-gray-500">123 Connaught Place, New Delhi, Delhi 110001 (Nhớ đổi địa chỉ)</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-lg">
                <h3 className="font-medium mb-3">Giờ làm việc</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Thứ hai - Thứ sáu:</span>
                    <span>9:00 AM - 9:00 PM (chỉnh lại)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Thứ bảy:</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-950 p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Gửi tin nhắn cho Bánh Tráng Quý Nhân</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Họ và tên
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Nguyễn Văn A"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="nguyenvana@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Chủ đề
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Nội dung cần hỗ trợ"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Nội dung
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Vui lòng nhập nội dung cần hỗ trợ..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Đang gửi...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Gửi
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg overflow-hidden h-[400px] border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.489072417302!2d106.5971811!3d10.850357400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b004234b71f%3A0x39bfbfb497d233fc!2zQsOBTkggVFLDgU5HIFFVw50gTkjDgk4!5e0!3m2!1svi!2s!4v1780307894181!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}