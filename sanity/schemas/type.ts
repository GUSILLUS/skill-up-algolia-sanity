export const schemaTypes = [
  {
    name: 'body',
    type: 'array',
    title: 'Body',
    of: [
      {
        type: 'block',
      },
      {
        type: 'image',
      },
      {
        type: 'table'
      },
    ],
  },
  {
    name: 'link',
    title: 'Link Component',
    type: 'object',
    fields: [
      {
        name: 'name',
        type: 'reference',
        to: [{ type: 'dictionary' }],
      },
      {
        name: 'url',
        type: 'string',
      },
      {
        name: 'icon',
        type: 'image',
      },
    ],
    preview: {
      select: {
        title: 'name.key',
        url: 'url',
      },
      prepare(selection) {
        const { title, url } = selection;
        return {
          title,
          subtitle: url,
        };
      },
    },
  },
  {
    name: 'navigationSection',
    title: 'Navigation Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        type: 'reference',
        to: [{ type: 'dictionary' }],
      },
      {
        name: 'links',
        type: 'array',
        of: [{ type: 'link' }],
      },
    ],
    preview: {
      select: {
        title: 'title.key',
      },
      prepare(selection) {
        const { title } = selection;
        return {
          title,
        };
      },
    },
  },
  {
    name: 'constituent',
    title: 'Constituent',
    type: 'document',
    fields: [
      {
        name: 'ticker',
        type: 'string',
      },
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'percent',
        type: 'number',
      },
      {
        name: 'sector',
        type: 'string',
      },
      {
        name: 'industryGroup',
        type: 'string',
      },
      {
        name: 'industry',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'percent',
      },
      prepare(selection) {
        const { title, subtitle } = selection;
        return {
          title,
          subtitle,
        };
      },
    },
  },
  {
    name: 'header',
    type: 'document',
    fields: [
      {
        name: 'links',
        type: 'array',
        of: [{ type: 'link' }],
      },
    ],
  },
  {
    name: 'footer',
    type: 'document',
    fields: [
      {
        name: 'disclaimer',
        type: 'reference',
        to: [{ type: 'dictionary' }],
      },
      {
        name: 'copyright',
        type: 'reference',
        to: [{ type: 'dictionary' }],
      },
      {
        name: 'socialLinks',
        type: 'array',
        of: [{ type: 'link' }],
      },
      {
        name: 'navigation',
        title: 'Navigation Sections',
        type: 'array',
        of: [{ type: 'navigationSection' }],
      },
    ],
  },
  {
    name: 'ad',
    title: 'Ad',
    type: 'document',
    fields: [
      {
        name: 'buyer',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'image',
        type: 'image',
        validation: Rule => Rule.required(),
      },
      {
        name: 'dimensions',
        type: 'string',
        options: {
          list: [
            '728 x 90 px',
            '336 x 280 px',
            '300 x 250 px',
            '160 x 600 px',
            '120 x 600 px',
            '120 x 90 px',
            '120 x 60 px',
            '88 x 31 px',
          ],
        },
      },
      {
        name: 'pages',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'page' }],
          },
        ],
        validation: Rule =>
          Rule.warning().custom(val => {
            if (val.length == 0) {
              return 'A null value creates an ad for all pages';
            } else {
              return true;
            }
          }),
      },
    ],
  },
  {
    name: 'coinDeskFlash',
    title: 'CoinDesk Flash Items',
    type: 'document',
    fields: [
      {
        name: 'id',
        type: 'number',
      },
      {
        name: 'hed',
        type: 'string',
      },
      {
        name: 'urlLabel',
        type: 'string',
      },
      {
        name: 'url',
        type: 'string',
      },
      {
        name: 'timestamp',
        type: 'datetime',
      },
      {
        name: 'postedTime',
        type: 'datetime',
      },
      {
        name: 'type',
        type: 'string',
      },
      {
        name: 'guid',
        type: 'string',
      },
      {
        name: 'author',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'tags',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'text',
                type: 'string',
              },
              {
                name: 'slug',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'contributor',
    title: 'Content Contributor',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'jobTitle',
        type: 'string',
      },
      {
        name: 'profilePicture',
        type: 'image',
      },
    ],
  },
  {
    name: 'governanceConsultations',
    title: 'Governance Consultation',
    type: 'document',
    fields: [
      {
        name: 'open',
        type: 'boolean',
      },
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'url',
        type: 'string',
      },
      {
        name: 'date',
        type: 'date',
      },
      {
        name: 'deadline',
        type: 'date',
      },
      {
        name: 'resultsDocument',
        type: 'string',
      },
    ],
  },
  {
    name: 'governanceDocs',
    title: 'Governance Document',
    type: 'document',
    fields: [
      {
        name: 'rank',
        type: 'number',
      },
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'type',
        type: 'string',
        validation: Rule =>
          Rule.warning().custom(val => {
            if (
              val != 'meth' &&
              val != 'pol' &&
              val != 'dacsMeth' &&
              val != 'cal' &&
              val != 'const' &&
              val != 'com' && 
              val != 'iosco'
            ) {
              return 'Valid types: meth, pol, dacsMeth, cal, const and iosco';
            }

            return true;
          }),
      },
      {
        name: 'url',
        type: 'string',
        description: 'This field will take lead over "File" if both are provided'
      },
      {
        name: 'file',
        type: 'file',
        options: {
          accept: 'application/pdf',
        },
      },
      {
        name: 'date',
        type: 'date'
      },
      {
        name: 'tags',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'tag' }],
          },
        ],
        description: 'Used to match Governance documents with Indices. E.g. document tagged "xbx" will be shown on "/indices/xbx" page'
      },
    ],
    preview: {
      select: {
        title: 'title',
        rank: 'rank',
        type: 'type',
        // changePercent: 'changePercent',
        // change: 'change',
        // media: 'coin.icon'
      },
      prepare(selection) {
        const { title, rank, type } = selection;
        return {
          title,
          subtitle: type + '(' + rank + ')',
        };
      },
    },
  },
  {
    name: 'offeringsDocs',
    title: 'Offerings Documents',
    type: 'document',
    fields: [
      {
        name: 'rank',
        type: 'number',
      },
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'type',
        type: 'string',
        options: {
          list: [
            { title: 'ETI', value: 'eti' },
            { title: 'BTI', value: 'bti' },
            { title: 'CESR', value: 'cesr' },
          ],
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'url',
        type: 'string',
      },
      {
        name: 'date',
        type: 'date',
      },
    ],
    preview: {
      select: {
        title: 'title',
        rank: 'rank',
        type: 'type',
        // changePercent: 'changePercent',
        // change: 'change',
        // media: 'coin.icon'
      },
      prepare(selection) {
        const { title, rank, type } = selection;
        return {
          title,
          subtitle: type + '(' + rank + ')',
        };
      },
    },
  },
  {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      {
        name: 'quote',
        type: 'string',
      },
      {
        name: 'type',
        type: 'string',
        options: {
          list: [{ title: 'Ethereum', value: 'eth' }],
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'author',
        type: 'reference',
        to: [{ type: 'contributor' }],
        validation: Rule => Rule.required(),
      },
    ],
  },
  {
    name: 'research',
    title: 'Research',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'description',
        type: 'string',
      },
      {
        name: 'url',
        type: 'string',
      },
      {
        name: 'file',
        type: 'file',
        options: {
          accept: 'application/pdf',
        },
      },
      {
        name: 'date',
        type: 'date',
        validation: Rule => Rule.required(),
      },
      {
        name: 'image',
        type: 'image',
        validation: Rule => Rule.required(),
      },
      {
        name: 'tags',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'tag' }],
          },
        ],
      },
      {
        name: 'authors',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'contributor' }],
          },
        ],
        validation: Rule => Rule.required(),
      },
      {
        name: 'type',
        type: 'string',
        options: {
          list: [
            { title: 'CoinDesk Indices Blog', value: 'blog' },
            { title: 'Crypto Sectors White Papers', value: 'whitePaper' },
            { title: 'Crypto Sector Videos', value: 'vid' },
            { title: 'Marketing and Sales Collateral', value: 'mark' },
            { title: 'Ethereum Blog', value: 'eth-blog' },
            { title: 'Ethereum Video', value: 'eth-vid' },
          ],
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'rank',
        type: 'number',
      },
    ],
    preview: {
      select: {
        title: 'title',
        type: 'type',
        rank: 'rank',
        // changePercent: 'changePercent',
        // change: 'change',
        // media: 'coin.icon'
      },
      prepare(selection) {
        const { title, rank, type } = selection;
        return {
          title,
          subtitle: type + '(' + rank + ')',
        };
      },
    },
  },
  {
    name: 'announcement',
    title: 'Announcement',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'url',
        type: 'string',
      },
      {
        name: 'file',
        type: 'file',
        options: {
          accept: 'application/pdf',
        },
      },
      {
        name: 'date',
        type: 'date',
      },
      {
        name: 'image',
        type: 'image',
      },
      {
        name: 'type',
        type: 'string',
        options: {
          list: [
            { title: 'General', value: 'gen' },
            { title: 'Governance', value: 'gov' },
            { title: 'Ethereum Offerings', value: 'eth' },
          ],
        },
        validation: Rule => Rule.required(),
      },
    ],
    preview: {
      select: {
        title: 'title',
        type: 'type',
        // changePercent: 'changePercent',
        // change: 'change',
        // media: 'coin.icon'
      },
      prepare(selection) {
        const { title, type } = selection;
        const typeString = type == 'gen' ? 'General' : 'Governance';
        return {
          title,
          subtitle: typeString,
        };
      },
    },
  },
  {
    name: 'insight',
    title: 'Insight article',
    type: 'document',
    fields: [
      {
        name: 'author',
        type: 'reference',
        to: [{ type: 'contributor' }],
      },
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'url',
        type: 'string',
      },
      {
        name: 'date',
        type: 'date',
      },
      {
        name: 'body',
        type: 'body',
      },
    ],
  },
  {
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
      {
        name: 'value',
        type: 'string',
      },
    ],
  },
  {
    name: 'coin',
    title: 'Crypto Coins',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'symbol',
        type: 'string',
      },
      {
        name: 'icon',
        type: 'image',
      },
      {
        name: 'tags',
        type: 'array',
        of: [
          {
            type: 'reference',
            title: 'Tag this coin',
            to: [{ type: 'tag' }],
          },
        ],
      },
      {
        name: 'startingPrice',
        type: 'number',
      },
      {
        name: 'startDate',
        type: 'datetime',
      },
    ],
  },
  {
    name: 'cryptoTableRow',
    title: 'Crypto Table Row',
    type: 'document',
    fields: [
      {
        name: 'coin',
        type: 'reference',
        to: [{ type: 'coin' }],
        validation: Rule => Rule.required(),
      },
      {
        name: 'url',
        type: 'string',
      },
      {
        name: 'marketCap',
        type: 'number',
      },
      {
        name: 'circulatingSupply',
        type: 'number',
      },
      {
        name: 'volume',
        type: 'number',
      },
      {
        name: 'annualizedVolatility',
        type: 'object',
        fields: [
          {
            name: 'low',
            type: 'number',
          },
          {
            name: 'high',
            type: 'number',
          },
          {
            name: 'current',
            type: 'number',
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'coin.symbol',
        subtitle: 'coin.name',
      },
      prepare(selection) {
        const { title, subtitle } = selection;
        return {
          title,
          subtitle,
        };
      },
    },
  },
  {
    name: 'cryptoTableColumn',
    title: 'Crypto Table Column',
    type: 'document',

    fields: [
      {
        name: 'order',
        type: 'number',
        validation: Rule => Rule.required(),
      },
      {
        name: 'key',
        type: 'reference',
        to: [{ type: 'dictionary' }],
        validation: Rule => Rule.required(),
      },
      {
        name: 'className',
        type: 'string',
      },
      {
        name: 'size',
        type: 'string',
      },
      {
        name: 'tooltip',
        type: 'reference',
        title: 'Choose a key',
        to: [{ type: 'dictionary' }],
      },
    ],
    preview: {
      select: {
        title: 'key.key',
        subtitle: 'order',
        // changePercent: 'changePercent',
        // change: 'change',
        // media: 'coin.icon'
      },
      prepare(selection) {
        const { title, subtitle } = selection;
        return {
          title,
          subtitle: 'Order: ' + subtitle,
        };
      },
    },
  },
  {
    name: 'ioscoForm',
    type: 'document',
    title: 'IOSCO Principles Form',
    fields: [
      {
        name: 'firstName',
        type: 'string',
      },
      {
        name: 'lastName',
        type: 'string',
      },
      {
        name: 'jobTitle',
        type: 'string',
      },
      {
        name: 'companyEmail',
        type: 'string',
      },
      {
        name: 'companyName',
        type: 'string',
      },
      {
        name: 'companyType',
        type: 'string',
      },
      {
        name: 'country',
        type: 'string',
      },
      {
        name: 'benchmarkFamily',
        type: 'string',
      },
    ],
    preview: {
      select: {
        firstName: 'firstName',
        lastName: 'lastName',
        companyEmail: 'companyEmail',
      },
      prepare(selection) {
        const { firstName, lastName, companyEmail } = selection;
        return {
          title: `${firstName} ${lastName}`,
          subtitle: companyEmail,
        };
      },
    },
  },
  {
    name: 'sectorHeatmap',
    title: 'Sector Heatmap',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'yAxis',
        type: 'array',
        of: [
          {
            type: 'reference',
            title: 'Choose a sector',
            to: [{ type: 'dictionary' }],
          },
        ],
      },
      {
        name: 'xAxis',
        type: 'array',
        of: [
          {
            type: 'reference',
            title: 'Choose a label',
            to: [{ type: 'dictionary' }],
          },
        ],
      },
      {
        name: 'columns',
        type: 'array',
        of: [
          {
            name: 'row',
            type: 'object',
            fields: [
              {
                name: 'values',
                type: 'array',
                of: [
                  {
                    type: 'number',
                    validation: Rule =>
                      Rule.required().custom(val => {
                        if (typeof val === 'undefined') {
                          return '"Value" must be defined';
                        }

                        if (val >= -100) {
                          return true;
                        } else {
                          return '"Value" must be within [-100, ∞]';
                        }
                      }),
                  },
                ],
                validation: Rule => Rule.required(),
              },
            ],
            validation: Rule => Rule.required(),
          },
        ],
        validation: Rule => Rule.required(),
      },
    ],
    preview: {
      select: {
        title: 'name',
      },
      prepare(selection) {
        const { title } = selection;
        return {
          title,
          subtitle: 'There should be only one heatmap in this list',
        };
      },
    },
  },
  {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'metaTitle',
        type: 'string',
      },
      {
        name: 'metaDescription',
        type: 'string',
      },
      {
        name: 'metaUrl',
        type: 'string',
      },
      {
        name: 'metaKeywords',
        type: 'string',
      },
    ],
  },
  {
    name: 'dictionary',
    title: 'Content Key',
    type: 'document',
    fields: [
      {
        name: 'key',
        type: 'string',
      },
    ],
  },
  {
    name: 'languageTag',
    title: 'Language Tag (BP-47)',
    type: 'document',
    fields: [
      {
        name: 'tag',
        type: 'string',
      },
    ],
  },
  {
    name: 'index',
    type: 'document',
    fields: [
      {
        name: 'rank',
        type: 'number',
      },
      {
        name: 'ticker',
        type: 'string',
      },
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'shortName',
        type: 'string',
      },
      {
        name: 'label',
        type: 'string',
      },
      {
        name: 'type',
        type: 'string',
        options: {
          list: [
            { title: 'Single Digital Asset', value: 'sda' },
            { title: 'Multi Digital Asset', value: 'mda' },
            { title: 'Systematic Strategy', value: 'sys' },
          ],
        },
        validation: Rule =>
          Rule.error().custom(val => {
            if (val == 'sda' || val == 'mda' || val == 'sys') {
              return true;
            } else {
              return 'Invalid value';
            }
          }),
      },
      {
        name: 'tags',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'tag' }],
          },
        ],
      },
      {
        name: 'products',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'product' }],
          },
        ],
      },
      {
        name: 'constituents',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'constituent' }],
          },
        ],
      },
      {
        name: 'documents',
        type: 'array',
        of: [
          {
            type: 'indexDocument',
          },
        ],
      },
      {
        name: 'd1',
        title: '1D',
        type: 'number',
      },
      {
        name: 'mtd',
        title: 'MTD',
        type: 'number',
      },
      {
        name: 'qtd',
        title: 'QTD',
        type: 'number',
      },
      {
        name: 'ytd',
        title: 'YTD',
        type: 'number',
      },
    ],
    preview: {
      select: {
        name: 'name',
        ticker: 'ticker',
      },
      prepare(selection) {
        return {
          title: selection.name,
          subtitle: selection.ticker,
        };
      },
    },
  },
  {
    name: 'indexCategory',
    title: 'Index Categories',
    type: 'document',
    fields: [
      {
        name: 'rank',
        type: 'number',
      },
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'tag',
        type: 'reference',
        to: [{ type: 'tag' }],
      },
    ],
  },
  {
    name: 'indexDocument',
    title: 'Index Document',
    type: 'object',
    fields: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'url',
        type: 'string',
      },
      {
        name: 'date',
        type: 'date',
      },
    ],
  },
  {
    name: 'partner',
    title: 'Partners',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'url',
        type: 'string',
      },
      {
        name: 'image',
        type: 'image',
      },
    ],
  },
  {
    name: 'cdn',
    title: 'CDN',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'value',
        type: 'text',
      },
    ],
  },
  {
    name: 'product',
    title: 'Products',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'url',
        type: 'string',
      },
      {
        name: 'ticker',
        type: 'string',
      },
      {
        name: 'partner',
        type: 'reference',
        to: [{ type: 'partner' }],
      },
    ],
  },
  {
    name: 'cesrUser',
    title: 'CESR Users',
    type: 'document',
    fields: [
      {
        name: 'firm',
        type: 'string',
      },
      {
        name: 'productName',
        type: 'string',
      },
      {
        name: 'sales',
        type: 'string',
      },
       {
        name: 'licenseType',
        type: 'string',
      },
    ],
  },
  {
    name: 'content',
    title: 'Text Content',
    type: 'document',
    fields: [
      {
        name: 'languageTagRef',
        type: 'reference',
        to: [{ type: 'languageTag' }],
      },
      {
        name: 'path',
        type: 'string',
      },
      {
        name: 'page',
        type: 'reference',
        to: [{ type: 'page' }],
        validation: Rule =>
          Rule.warning().custom(val => {
            if (val == null) {
              return 'A null value creates content for all pages';
            } else {
              return true;
            }
          }),
      },
      {
        name: 'mapping',
        type: 'array',
        title: 'Mapping',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'richText', type: 'body', title: 'Rich Text' },
              { name: 'value', type: 'string', title: 'Value' },
              {
                name: 'keyObj',
                type: 'reference',
                to: [{ type: 'dictionary' }],
                title: 'Content key',
              },
            ],
            preview: {
              select: {
                title: 'keyObj.key',
              },
              prepare(selection) {
                const { title } = selection;
                return {
                  title,
                };
              },
            },
          },
        ],
        validation: Rule => Rule.required(),
      },
    ],
    preview: {
      select: {
        title: 'page.name',
        subtitle: 'languageTagRef.tag',
      },
      prepare(selection) {
        let { title, subtitle } = selection;

        if (title == null) {
          title = 'All components';
        } else {
          title = title + ' component';
        }

        return {
          title,
          subtitle: subtitle,
        };
      },
    },
  },
];
