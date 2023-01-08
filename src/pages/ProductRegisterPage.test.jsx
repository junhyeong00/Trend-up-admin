import { render, screen } from '@testing-library/react';

import ProudctRegisterPage from './ProductRegisterPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => (
    navigate
  ),
}));

describe('ProudctRegisterPage', () => {
  it('renders screen', () => {
    render(<ProudctRegisterPage />);

    screen.getByText('상품 등록');
  });
});
