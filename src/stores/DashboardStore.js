import { apiService } from '../services/ApiService';

import Store from './Store';

export default class DashboardStore extends Store {
  constructor() {
    super();

    this.salesData = [];
    this.totalSales = 0;
    this.monthlySales = 0;

    this.deliveryInformation = {};
  }

  async fetchSalesData() {
    const { salesData, totalSales, monthlySales } = await apiService.fetchSalesData();

    this.salesData = salesData;
    this.totalSales = totalSales;
    this.monthlySales = monthlySales;

    this.publish();
  }

  async fetchDeliveryInformation() {
    const { shippedCount, inTransitCount, deliveredCount } = await
    apiService.fetchDeliveryInformation();

    this.deliveryInformation = { shippedCount, inTransitCount, deliveredCount };

    this.publish();
  }
}

export const dashboardStore = new DashboardStore();
