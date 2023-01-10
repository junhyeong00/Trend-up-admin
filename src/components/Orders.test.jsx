import { render, screen } from '@testing-library/react';
import Orders from './Orders';

describe('Orders', () => {
  it('renders screen', () => {
    render(<Orders />);

    screen.getByText('주문 목록');
  });
});
