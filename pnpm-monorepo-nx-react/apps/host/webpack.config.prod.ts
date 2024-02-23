import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import { ModuleFederationConfig, composePlugins, withNx } from '@nx/webpack';
import baseConfig from './module-federation.config';

const prdConfig: ModuleFederationConfig = {
  ...baseConfig,
  remotes: ['product', 'http://localhost:4201/remoteEntry.js'],
};

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prdConfig)
);
