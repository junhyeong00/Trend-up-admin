import { render, screen } from '@testing-library/react';
import OptionRegister from './OptionRegister';

describe('OptionRegister', () => {
  function renderOptionRegister() {
    render(<OptionRegister />);
  }

  it('renders screen', () => {
    renderOptionRegister();

    screen.getByText('옵션 등록');
  });
});
