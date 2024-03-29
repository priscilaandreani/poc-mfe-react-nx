import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host',
  exposes: {
    // map to the internal file path
    './Module': './src/remote-entry.ts',
  },
  remotes: ['product', 'cart'],
};

export default config;
