import Store from './Store';

export default class SideMenuStore extends Store {
  constructor() {
    super();

    this.title = '';

    this.menus = [];
  }

  reset() {
    this.comment = '';
    this.errorMessage = '';
  }

  fetchMenu(url) {
    if (url.startsWith('/product') || url.startsWith('/inquiries')) {
      this.title = '상품 관리';
      this.menus = [
        { id: 1, title: '상품 등록', to: '/product/register' },
        { id: 2, title: '상품 목록', to: '/products' },
        { id: 3, title: '문의 관리', to: '/inquiries' },
      ];
    }

    if (url.startsWith('/orders')) {
      this.title = '주문 관리';
      this.menus = [
        { id: 1, title: '주문 목록', to: '/orders' },
      ];
    }

    if (url.startsWith('/users')) {
      this.title = '회원 관리';
      this.menus = [
        { id: 1, title: '회원 목록', to: '/users' },
      ];
    }

    if (url.startsWith('/dashboard')) {
      this.title = '대시보드';
      this.menus = [
        { id: 1, title: '대시보드', to: '/dashboard' },
      ];
    }

    this.publish();
  }
}

export const sideMenuStore = new SideMenuStore();
