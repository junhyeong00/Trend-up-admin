import {
  cleanup,
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import Inquiries from './Inquiries';

describe('Inquiries', () => {
  function renderInquiries(productId) {
    render(<Inquiries
      productId={productId}
    />);
  }

  afterEach(() => {
    cleanup();
  });

  it('renders screen', () => {
    renderInquiries(1);

    screen.getByText('상품 문의');
  });
});
