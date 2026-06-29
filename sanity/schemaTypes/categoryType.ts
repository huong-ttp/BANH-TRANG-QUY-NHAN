import { TagIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const categoryType = defineType({
  name: "category",
  title: "Danh mục sản phẩm",
  type: "document",
  icon: TagIcon,

  fields: [
    defineField({
      name: "title",
      title: "Tên danh mục",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "description",
      title: "Mô tả",
      type: "text",
    }),

    defineField({
      name: "order",
      title: "Thứ tự hiển thị",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "image",
      title: "Ảnh danh mục",
      type: "image",
      options: {
        hotspot: true,
      },
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