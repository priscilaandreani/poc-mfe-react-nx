import { Link, Outlet } from 'react-router-dom';

export function Menu() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={'/cart'}>Carrinho</Link>
          </li>

          <li>
            <Link to={'/product'}>Produto</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}
