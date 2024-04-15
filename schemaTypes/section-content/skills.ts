import {defineType} from 'sanity'

export default defineType({
  name: 'skillsContent',
  type: 'object',
  fields: [
    {
      name: 'technologies',
      type: 'array',
      of: [
        {
          name: 'technology',
          type: 'object',
          fields: [
            {name: 'name', type: 'string'},
            {name: 'reasoning', type: 'string'},
          ],
        },
      ],
    },
  ],
})
