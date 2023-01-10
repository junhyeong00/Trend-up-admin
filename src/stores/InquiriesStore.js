import { apiService } from '../services/ApiService';

import Store from './Store';

export default class InquiriesStore extends Store {
  constructor() {
    super();

    this.inquiries = [];
    this.totalPageCount = 0;
    this.currentPage = 0;

    this.inquiryId = 0;
  }

  async fetchInquiries(currentPage) {
    const { inquiries, totalPageCount } = await apiService
      .fetchInquiries(currentPage);

    this.inquiries = inquiries;
    this.totalPageCount = totalPageCount;

    this.publish();
  }

  async changePage(page) {
    this.currentPage = page - 1;

    this.publish();
  }

  changeInquiryId(inquiryId) {
    this.inquiryId = inquiryId;
    this.publish();
  }
}

export const inquiriesStore = new InquiriesStore();
