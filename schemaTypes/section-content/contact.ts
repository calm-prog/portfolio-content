import {defineType} from 'sanity'

export default defineType({
  name: 'contactContent',
  type: 'object',
  fields: [
    {
      name: 'contacts',
      type: 'array',
      of: [
        {
          name: 'contact',
          type: 'object',
          fields: [
            {name: 'formOfContact', type: 'string'},
            {name: 'value', type: 'string'}
          ],
        },
      ],
    },
  ],
})
