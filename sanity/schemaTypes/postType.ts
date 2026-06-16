import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const postType = defineType({
  
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  
  fields: [
    defineField({
    name: 'isFeatured',
    title: 'Bài nổi bật',
    type: 'boolean',
    initialValue: false,
  }),

  defineField({
    name: 'showOnHome',
    title: 'Hiển thị ở Khám Phá Tây Ninh',
    type: 'boolean',
    initialValue: false,
  }),

    defineField({
      name: 'title',
      title: 'Tiêu đề',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),

    defineField({
      name: 'mainImage',
      title: 'Hình ảnh',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'excerpt',
      title: 'Tóm tắt',
      type: 'text',
    }),

    defineField({
      name: 'content',
      title: 'Nội dung',
      type: 'text',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Ngày đăng',
      type: 'datetime',
    }),

    
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
  
})
