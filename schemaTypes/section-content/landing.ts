import {defineType} from 'sanity'

export default defineType({
  name: 'landingContent',
  type: 'object',
  fields: [
    {name: 'shortIntro', type: 'string'},
    {
      name: 'socialMediaLinks',
      type: 'array',
      of: [
        {
          name: 'link',
          type: 'object',
          fields: [
            {name: 'platform', type: 'string'},
            {name: 'link', type: 'url'},
          ],
        },
      ],
    },
    {name: 'portrait', type: 'image'},
  ],
})
