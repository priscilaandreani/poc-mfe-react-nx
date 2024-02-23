// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Suspense, lazy } from 'react';
import NxWelcome from './nx-welcome';

const Product = lazy(() => import('product/Module'));

export function App() {
  return (
    <div>
      <NxWelcome title="host" />
      <Suspense fallback="Loading Product">
        <Product />
      </Suspense>
    </div>
  );
}

export default App;
