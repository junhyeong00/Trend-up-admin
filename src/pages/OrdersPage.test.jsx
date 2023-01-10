import {
  cleanup, render,
} from '@testing-library/react';
import OrdersPage from './OrdersPage';

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

describe('OrdersPage', () => {
  afterEach(() => {
    cleanup();
  });

  it('render screen', async () => {
    render(<OrdersPage />);
  });
});
