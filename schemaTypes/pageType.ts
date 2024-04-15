import {defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'landingContent'},
        {type: 'aboutContent'},
        {type: 'experienceContent'},
        {type: 'skillsContent'},
        {type: 'contactContent'},
      ],
      validation: (Rule) => Rule.max(1),
    },
  ],
})
