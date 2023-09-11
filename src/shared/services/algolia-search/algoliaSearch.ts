import { SanityDocument } from '@sanity/client';
import algoliasearch from 'algoliasearch';

import client from '../../sanity/lib/client';
import { SampleModel } from '../../types/sample-model';

export const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string;
export const algoliaAdminApiKey = process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY as string;
export const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME as string;

export const algoliaClient = algoliasearch(algoliaAppId, algoliaAdminApiKey);
export const algoliaIndex = algoliaClient.initIndex(indexName);

export async function syncDataToAlgolia() {
  try {
    const sanityData: SanityDocument<SampleModel>[] = await client.fetch('*[_type == "sampleModel"]');

    const records = sanityData.map(item => ({
      objectID: item._id,
      name: item.name,
      description: item.description,
      date: item.date,
      tags: item.tags,
    }));

    records.forEach(async el => await algoliaIndex.saveObject(el, { autoGenerateObjectIDIfNotExist: true }));

    console.log('Data synced to Algolia.');
  } catch (error) {
    console.error('Error syncing data to Algolia:', error);
  }
}
