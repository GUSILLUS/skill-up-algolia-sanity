import { type SchemaTypeDefinition } from 'sanity';

import document from './schemas/document';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [document],
};
