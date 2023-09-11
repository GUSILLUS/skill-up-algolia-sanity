/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {crossDatasetDuplicator} from '@sanity/cross-dataset-duplicator'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, projectId } from './src/shared/sanity/env'
import { schema } from './src/shared/sanity/schema';


export default defineConfig(
  [
    {
      projectId: projectId,
      dataset: 'production',
      name: 'production-workspace',
      basePath: '/production',
      title: 'Default Workspace',
      plugins: [
        deskTool(),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({defaultApiVersion: apiVersion}),
        crossDatasetDuplicator({
          // Required settings to show document action
          types: ['article', 'page', 'pet'],
          // Optional settings
          tool: true,
          filter: '_type != "product"',
          follow: []
        })
      ],
      schema,
    },
    {
      projectId: projectId,
      dataset: 'staging',
      name: 'staging-workspace',
      basePath: '/staging',
      title: 'Another Workspace!',
      plugins: [
        deskTool(),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({defaultApiVersion: apiVersion}),
        crossDatasetDuplicator({
          // Required settings to show document action
          types: [ 'document'],
          // Optional settings
          tool: true,
          filter: '_type != "product"',
          follow: []
        })
      ],
      schema,
    },
  ]
)
