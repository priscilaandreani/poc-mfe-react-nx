import { Suspense, lazy } from 'react';
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import { Menu } from './features/Menu/Menu';

// build time remote import
const Product = lazy(() => import('product/Module'));
const Cart = lazy(() => import('cart/Module'));

const router = createBrowserRouter([{ path: '*', Component: Root }]);

function Root() {
  return (
    <Routes>
      <Route element={<Menu />}>
        <Route
          index
          path="/cart"
          element={
            <Suspense fallback="Loading...">
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/product"
          element={
            <Suspense fallback="Loading...">
              <Product />
            </Suspense>
          }
        />
        <Route path="*" Component={Cart} />
      </Route>
    </Routes>
  );
}

export function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
