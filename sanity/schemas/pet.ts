// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'pet',
  type: 'document',
	title: 'Pet',
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
                      { type: 'food' },
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
      name: 'Food',
      type: 'reference',
      to: [{ type: 'food' }],
    }
  ]
}

