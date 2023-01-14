import { cleanup, render, screen } from '@testing-library/react';

import ProductRegisterPage from './ProductRegisterPage';

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

describe('ProductRegisterPage', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders screen', () => {
    render(<ProductRegisterPage />);

    screen.getAllByText('상품 등록');
  });
});
