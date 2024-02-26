import { Suspense, lazy } from 'react';
import NxWelcome from './nx-welcome';

// build time remote import
const Product = lazy(() => import('product/Module'));
const Cart = lazy(() => import('cart/Module'));

export function App() {
  return (
    <div>
      <NxWelcome title="host" />
      <Suspense fallback="Loading remotes">
        <Product />
        <Cart />
      </Suspense>
    </div>
  );
}

export default App;
