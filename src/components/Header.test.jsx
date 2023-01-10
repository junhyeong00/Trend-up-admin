import {
  cleanup, render, screen,
} from '@testing-library/react';
import Header from './Header';

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
  useNavigate() {
    return navigate;
  },
}));

describe('Header', () => {
  afterEach(() => {
    cleanup();
  });

  it('render screen', () => {
    render(<Header />);

    screen.getByText('admin');
    screen.getByText('상품 관리');
    screen.getByText('주문 관리');
    screen.getByText('회원 관리');
    screen.getByText('대시보드');
  });
});
