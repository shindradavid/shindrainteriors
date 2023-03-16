import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name*',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug'
    }),
    defineType({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'accessibleImage'
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text'
    }),
    defineField({
      name: 'pallette',
      title: 'Pallette',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'color',
          title: 'Color',
          type: 'color',
          options: {
            disableAlpha: true
          }
        })
      ]
    })
  ]
})