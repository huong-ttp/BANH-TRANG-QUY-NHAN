import { defineType, defineField } from "sanity"
import { ImageIcon } from "@sanity/icons"

export const homeBannerType = defineType({
  name: "homeBanner",
  title: "Banner Trang Chủ",
  type: "document",
  icon: ImageIcon,

  fields: [
    defineField({
      name: "title",
      title: "Tiêu đề",
      type: "string",
    }),

    defineField({
      name: "subtitle",
      title: "Mô tả",
      type: "text",
    }),

    defineField({
      name: "image",
      title: "Hình ảnh",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "buttonText",
      title: "Text nút chính",
      type: "string",
      initialValue: "Mua ngay",
    }),

    defineField({
      name: "buttonLink",
      title: "Link nút chính",
      type: "string",
      initialValue: "/products",
    }),

    defineField({
      name: "button2Text",
      title: "Text nút phụ",
      type: "string",
      initialValue: "Xem sản phẩm",
    }),

    defineField({
      name: "button2Link",
      title: "Link nút phụ",
      type: "string",
      initialValue: "/products",
    }),
  ],
})