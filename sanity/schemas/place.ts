// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'place',
  type: 'document',
	title: 'Place',
  fields: [
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: false, // <-- Defaults to false
        metadata: [
          'blurhash',   // Default: included
          'lqip',       // Default: included
          'palette',    // Default: included
          'exif',       // Default: not included
          'location',   // Default: not included
        ],
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
        {
          name: 'Customer',
          type: 'reference',
          to: [{ type: 'pet' }],
        }
      ]
    },
  ]
}

