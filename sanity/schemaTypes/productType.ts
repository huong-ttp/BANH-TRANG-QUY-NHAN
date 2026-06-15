import { defineField, defineType } from "sanity"

export const productType = defineType({
  name: "product",
  title: "Sản phẩm",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Tên sản phẩm",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
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
      name: "price",
      title: "Giá bán",
      type: "number",
    }),

    defineField({
      name: "originalPrice",
      title: "Giá gốc",
      type: "number",
    }),

    defineField({
      name: "discount",
      title: "Giảm giá (%)",
      type: "number",
    }),

    defineField({
      name: "stock",
      title: "Tồn kho",
      type: "number",
    }),

    defineField({
      name: "description",
      title: "Mô tả ngắn",
      type: "text",
    }),

    defineField({
      name: "details",
      title: "Chi tiết sản phẩm",
      type: "text",
    }),

    defineField({
      name: "category",
      title: "Danh mục",
      type: "string",
    }),

    defineField({
      name: "shopee",
      title: "Link Shopee",
      type: "url",
    }),

    defineField({
      name: "tiktok",
      title: "Link TikTok Shop",
      type: "url",
    }),

    defineField({
      name: "lazada",
      title: "Link Lazada",
      type: "url",
    }),
  ],
})