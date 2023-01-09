import { render, screen } from '@testing-library/react';

import ProudctRegisterPage from './ProductRegisterPage';

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

describe('ProudctRegisterPage', () => {
  it('renders screen', () => {
    render(<ProudctRegisterPage />);

    screen.getAllByText('상품 등록');
  });
});
