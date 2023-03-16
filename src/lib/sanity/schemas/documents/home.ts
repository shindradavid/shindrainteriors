import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero title',
      type: 'string'
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero description',
      type: 'string'
    })
  ]
})