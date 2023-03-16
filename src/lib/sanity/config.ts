import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
// import {schemaTypes} from './schemas'
import { colorInput } from '@sanity/color-input';

export default defineConfig({
  name: 'default',
  title: 'shindrainteriors',
  basePath: '/studio',
  projectId: '10s406h0',
  dataset: 'production',
  plugins: [deskTool(), colorInput(), visionTool()],
  schema: {
    // types: schemaTypes,
  }
});
