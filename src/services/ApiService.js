/* eslint-disable class-methods-use-this */

import axios from 'axios';

import config from '../../config';

const { cloudinaryName, cloudinaryKey } = config;

const baseUrl = config.apiBaseUrl;

export default class ApiService {
  async upload(imageFile) {
    const url = `https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload/`;

    const formData = new FormData();

    formData.append('api_key', cloudinaryKey);
    formData.append('upload_preset', 'qvnby8qv');
    formData.append('timestamp', (Date.now() / 1000) || 0);
    formData.append('file', imageFile);

    const configOfUpload = {
      header: { 'Content-Type': 'multipart/form-data' },
    };

    const { data } = await axios.post(url, formData, configOfUpload);

    return data.url;
  }

  async fetchCategories() {
    const url = `${baseUrl}/categories`;
    const { data } = await axios.get(url);

    return data;
  }

  async createProduct({
    productName,
    price,
    description,
    categoryId,
    options,
    imageUrl,
  }) {
    const url = `${baseUrl}/product`;
    const { data } = await axios.post(url, {
      productName,
      price,
      description,
      categoryId,
      options,
      imageUrl,
    });

    return data;
  }

  async fetchProducts({ page, categoryId }) {
    const url = `${baseUrl}/products`;
    const { data } = await axios.get(url, {
      params: { page, categoryId },
    });

    return {
      products: data.products.content,
      totalPageCount: data.totalPageCount,
    };
  }

  async fetchOrders(page, size) {
    const url = `${baseUrl}/admin-orders`;
    const { data } = await axios.get(
      url,
      {
        params: { page, size },
      },
    );
    return {
      orders: data.orders,
      totalPageCount: data.totalPageCount,
    };
  }

  async changeDeliveryStatus(orderId, deliveryStatus) {
    const url = `${baseUrl}/admin-orders/${orderId}`;
    await axios.patch(
      url,
      { deliveryStatus },
    );
  }

  async fetchInquiries(page) {
    const url = `${baseUrl}/admin-inquiries`;
    const { data } = await axios.get(url, {
      params: { page },
    });

    return {
      inquiries: data.inquiries,
      totalPageCount: data.totalPageCount,
    };
  }

  async writeAnswer({ inquiryId, comment }) {
    const url = `${baseUrl}/answer`;
    const { data } = await axios.post(url, {
      inquiryId,
      comment,
    });

    return data;
  }
}

export const apiService = new ApiService();
