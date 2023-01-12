import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import AnswerWrite from './AnswerWrite';

const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    state: {
      inquiry: [{
        id: 1, title: '재입고 문의', content: '재입고 언제되나요?',
      }],
    },
  }),
}));

describe('AnswerWrite', () => {
  function renderAnswerWrite() {
    render(<AnswerWrite
      navigate={navigate}
    />);
  }

  it('renders screen', () => {
    renderAnswerWrite();

    screen.getAllByText('답변 작성');
  });

  it('lestens for register event', async () => {
    renderAnswerWrite();

    fireEvent.change(screen.getByLabelText('내용'), {
      target: { value: '해당 상품은 일주일 내로 재입고 될 예정입니다' },
    });

    fireEvent.click(screen.getByText('등록'));

    await waitFor(() => {
      expect(navigate).toBeCalled();
    });
  });

  context('제목을 입력하지 않았을 때', () => {
    it('register failed', async () => {
      renderAnswerWrite();

      fireEvent.change(screen.getByLabelText('내용'), {
        target: { value: '' },
      });

      fireEvent.click(screen.getByText('등록'));

      screen.getByText('답변 내용을 입력해주세요');
    });
  });
});
