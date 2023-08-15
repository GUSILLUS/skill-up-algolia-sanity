// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'food',
  type: 'document',
	title: 'Food',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'portableText',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'pet' },
                  { type: 'place'},
                  // other types you may want to link to
                ]
              }
            ]
          }
        ]
      }
    }
  ]
},
{
  name: 'Place',
  type: 'reference',
  to: [{ type: 'place' }],
}
  ]
}

