import { cleanup, render, screen } from '@testing-library/react';
import ProudctRegister from './ProductRegister';

describe('ProudctRegister', () => {
  afterEach(() => {
    cleanup();
  });

  function renderProudctRegister() {
    render(<ProudctRegister />);
  }

  it('renders screen', () => {
    renderProudctRegister();

    screen.getByText('상품 등록');
  });
});
