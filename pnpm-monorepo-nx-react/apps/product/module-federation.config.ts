import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'product',
  remotes: ['host'],
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
