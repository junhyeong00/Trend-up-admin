import { render, screen } from '@testing-library/react';

import AnswerWritePage from './AnswerWritePage';

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
  useLocation: () => ({
    state: {
      inquiry: [{
        id: 1, title: '재입고 문의', content: '재입고 언제되나요?',
      }],
    },
  }),
}));

describe('AnswerWritePage', () => {
  it('renders screen', () => {
    render(<AnswerWritePage />);

    screen.getAllByText('답변 작성');
  });
});
