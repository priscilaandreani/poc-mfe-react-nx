import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  remotes: ['product'],
};

export default config;
