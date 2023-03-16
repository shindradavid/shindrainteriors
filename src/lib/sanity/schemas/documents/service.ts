import { defineField, defineType, defineArrayMember } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name*',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('Service name is required'),
        Rule.max(24).error('Service name must have a maximum of 24 characters')
      ]
    }),
    defineField({
      name: 'slug',
      title: 'Slug*',
      type: 'slug',
      validation: (Rule) => Rule.required().error('Service slug is required'),
      options: {
        source: 'name',
        maxLength: 24
      }
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail*',
      type: 'accessibleImage'
    }),
    defineField({
      title: 'description',
      name: 'Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          options: {},
          styles: [
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Normal', value: 'normal' }
          ],
          lists: [{ title: 'Numbered', value: 'number' }],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: 'object',
                name: 'link',
                fields: [
                  {
                    type: 'string',
                    name: 'href',
                    title: 'URL',
                    validation: (rule) => rule.required()
                  }
                ]
              })
            ]
          }
        }),
        { type: 'accessibleImage' }
      ]
    })
  ]
});
