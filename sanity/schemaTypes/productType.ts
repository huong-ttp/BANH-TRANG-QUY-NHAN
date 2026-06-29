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
  type: "reference",
  to: [{ type: "category" }],
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
  name: "unit",
  title: "Đơn vị tính",
  type: "string",
}),
defineField({
  name: "trending",
  title: "Sản phẩm nổi bật",
  type: "boolean",
  initialValue: false,
}),

{
  name: "bestseller",
  title: "Sản phẩm bán chạy",
  type: "boolean",
  initialValue: false,
},

defineField({
  name: "origin",
  title: "Xuất xứ",
  type: "string",
}),

defineField({
  name: "ingredients",
  title: "Thành phần",
  type: "text",
}),

defineField({
  name: "usage",
  title: "Hướng dẫn sử dụng",
  type: "text",
}),

defineField({
  name: "storage",
  title: "Bảo quản",
  type: "text",
}),


defineField({
  name: "isNew",
  title: "Sản phẩm mới",
  type: "boolean",
  initialValue: false,
}),
defineField({
  name: "seoTitle",
  title: "SEO Title",
  type: "string",
}),

defineField({
  name: "seoDescription",
  title: "SEO Description",
  type: "text",
}),

defineField({
  name: "seoKeywords",
  title: "SEO Keywords",
  type: "array",
  of: [{ type: "string" }],
}),
  ],
})