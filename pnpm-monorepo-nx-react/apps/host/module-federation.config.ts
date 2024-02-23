import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host',
  remotes: ['product'],
  exposes: {
    './Host': './src/remote-entry.ts',
  },
};

export default config;
