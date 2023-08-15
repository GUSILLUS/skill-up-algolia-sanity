import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

const client = createClient({
  projectId: "lmg5ihsi",
  dataset: "staging",
  apiVersion: "2021-10-21",
  useCdn: false
});

export default client;
