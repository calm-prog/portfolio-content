import {defineType} from 'sanity'

export default defineType({
  name: 'experienceContent',
  type: 'object',
  fields: [
    {
      name: 'positions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'position',
          fields: [
            {name: 'role', type: 'string'}, 
            {name: 'company', type: 'string'},
            {name: 'start', type: 'date'},
            {name: 'end', type: 'date'},
            {name: 'location', type: 'string'},
            {
              name: 'contributions',
              type: 'array',
              of: [{name: 'contribution', type: 'string'}],
            },
          ],
        },
      ],
    },
  ],
})
