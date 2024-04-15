import {defineType} from 'sanity'

export default defineType({
  name: 'aboutContent',
  type: 'object',
  fields: [
    {name: 'text', type: 'array', of:[{type: 'block'}]},
    {name: 'image', type: 'image'}
  ],
})
