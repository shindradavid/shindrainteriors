import { defineType } from 'sanity';

export default defineType({
  name: 'accessibleImage',
  title: 'Image*',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      title: 'Alt text*',
      type: 'string',
      validation: (Rule) => Rule.required().error('Alt text is required')
    }
  ]
});
