import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SideNavigationBar from './SideNavigationBar';

describe('SideNavigationBar', () => {
  it('renders screen', () => {
    render(
      <MemoryRouter>
        <SideNavigationBar />
      </MemoryRouter>,
    );

    screen.getByText('카테고리');
    screen.getByText('상품 등록');
    screen.getByText('상품 목록');
  });
});
