import { apiService } from '../services/ApiService';

import Store from './Store';

export default class OrdersStore extends Store {
  constructor() {
    super();

    this.orders = [];

    this.totalPageCount = 0;
    this.currentPage = 0;
  }

  async fetchOrders(currentPage) {
    const { orders, totalPageCount } = await apiService
      .fetchOrders(currentPage, 8);

    this.orders = orders;
    this.totalPageCount = totalPageCount;
    this.publish();
  }

  async changePage(page) {
    this.currentPage = page - 1;

    await this.fetchOrders(page - 1);
    this.publish();
  }
}

export const ordersStore = new OrdersStore();
