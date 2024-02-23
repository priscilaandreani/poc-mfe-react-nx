import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'product',
  exposes: {
    './Product': './src/remote-entry.ts',
  },
};

export default config;
