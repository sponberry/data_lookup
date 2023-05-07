import { CodegenConfig } from '@graphql-codegen/cli';

const REACT_APP_GRAPHQL_API_URL = 'https://localhost:3000/customers'

const config: CodegenConfig = {
  schema: REACT_APP_GRAPHQL_API_URL,
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;