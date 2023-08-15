import { type SchemaTypeDefinition } from 'sanity'
import pet from './schemas/pet';
import food from './schemas/array';
import place from './schemas/place';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet, food, place,]
}
