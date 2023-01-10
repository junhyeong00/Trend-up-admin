import {
  cleanup, render,
} from '@testing-library/react';
import { productsStore } from '../stores/ProductsStore';
import ProductsPage from './ProductsPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line react/prop-types
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
  useNavigate: () => (
    navigate
  ),
}));

describe('ProductsPage', () => {
  afterEach(() => {
    cleanup();
  });

  it('render screen', async () => {
    render(<ProductsPage />);
    productsStore.fetchProducts(1);
  });
});
