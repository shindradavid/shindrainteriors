import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'shindradesignstudio',
  basePath: '/studio',
  projectId: '10s406h0',
  dataset: 'production',
  plugins: [deskTool() /*visionTool()*/],
  schema: {
    // types: schemaTypes,
  }
});
