import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SideNavigationBar from './SideNavigationBar';

describe('SideNavigationBar', () => {
  const title = '상품 관리';
  const menus = [
    { id: 1, title: '상품 등록', to: '/product/register' },
    { id: 2, title: '상품 목록', to: '/products' },
  ];

  it('renders screen', () => {
    render(
      <MemoryRouter>
        <SideNavigationBar
          title={title}
          menus={menus}
        />
      </MemoryRouter>,
    );

    screen.getByText('상품 등록');
    screen.getByText('상품 목록');
  });
});
