import { render, screen } from '@testing-library/react';
import Inquiry from './Inquiry';

const context = describe;

describe('Inquiry', () => {
  function renderInquiry(inquiry) {
    render(<Inquiry
      inquiry={inquiry}
    />);
  }

  it('문의글 확인', () => {
    const inquiry = {
      id: 1,
      title: '재입고 문의',
      content: '재입고 언제 되나요?',
      isSecret: false,
    };

    renderInquiry(inquiry);

    screen.getByText('재입고 문의');
  });
});
