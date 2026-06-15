import { defineField, defineType } from "sanity"

export const promotionType = defineType({
  name: "promotion",
  title: "Khuyến mãi",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Tiêu đề",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "image",
      title: "Banner",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "description",
      title: "Mô tả",
      type: "text",
    }),

    defineField({
      name: "discount",
      title: "Giảm giá (%)",
      type: "number",
    }),

    defineField({
      name: "startDate",
      title: "Ngày bắt đầu",
      type: "datetime",
    }),

    defineField({
      name: "endDate",
      title: "Ngày kết thúc",
      type: "datetime",
    }),

    defineField({
      name: "active",
      title: "Đang áp dụng",
      type: "boolean",
      initialValue: true,
    }),
  ],
})