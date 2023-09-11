import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
});

export default client;
