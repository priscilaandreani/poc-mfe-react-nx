import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cart',
  exposes: {
    // map to the internal file path
    './Module': './src/remote-entry.ts',
  },
};

export default config;
