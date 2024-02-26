import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import { ModuleFederationConfig, composePlugins, withNx } from '@nx/webpack';
import baseConfig from './module-federation.config';

const config: ModuleFederationConfig = { ...baseConfig };

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config)
);
