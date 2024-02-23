// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { lazy } from 'react';
import NxWelcome from './nx-welcome';

const Product = lazy(() => import('product/Product'));

export function App() {
  return (
    <div>
      <NxWelcome title="host" />
    </div>
  );
}

export default App;
