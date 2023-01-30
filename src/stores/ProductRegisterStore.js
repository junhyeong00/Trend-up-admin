import Option from '../models/Option';
import { apiService } from '../services/ApiService';

import Store from './Store';

export default class ProductRegisterStore extends Store {
  constructor() {
    super();

    this.categoryId = 0;
    this.imageUrl = '';
    this.errorMessage = '';

    this.options = [];
    this.optionName = '';
    this.optionPrice = '';
    this.optionErrorMessage = '';
  }

  reset() {
    this.categoryId = 0;
    this.imageUrl = '';
    this.errorMessage = '';

    this.options = [];
    this.optionErrorMessage = '';
  }

  async registerProduct({
    productName, price, description,
  }) {
    if (!this.categoryId) {
      this.notChoiceCategory();
      return '';
    }

    if (!this.options.length) {
      this.notAddOption();
      return '';
    }

    if (!this.imageUrl) {
      this.notUploadImage();
      return '';
    }

    const productId = await apiService.createProduct({
      productName,
      price,
      description,
      categoryId: this.categoryId,
      options: this.options,
      imageUrl: this.imageUrl,
    });

    this.reset();

    this.publish();

    return productId;
  }

  addOption({
    optionName, optionPrice,
  }) {
    const id = Math.max(0, ...this.options.map((i) => i.id)) + 1;
    const option = new Option({
      id,
      optionName,
      optionPrice: Number(optionPrice),
    });

    this.options = [...this.options, option];

    this.optionName = '';
    this.optionPrice = '';

    this.publish();
  }

  deleteOption({
    id,
  }) {
    const index = this.options.findIndex((i) => i.id === id);

    this.options = [
      ...this.options.slice(0, index),
      ...this.options.slice(index + 1),
    ];

    this.optionErrorMessage = '';
    this.optionName = '';
    this.optionPrice = '';

    this.publish();
  }

  async uploadImage(imageFile) {
    const imageUrl = await apiService.upload(imageFile);

    this.imageUrl = imageUrl;
    this.publish();
  }

  changeOptionName(optionName) {
    this.optionName = optionName;
    this.publish();
  }

  changeOptionPrice(optionPrice) {
    this.optionPrice = optionPrice;
    this.publish();
  }

  changeCategory(categoryId) {
    this.categoryId = categoryId;

    this.publish();
  }

  notChoiceCategory() {
    this.errorMessage = '카테고리를 선택해주세요';
    this.publish();
  }

  notAddOption() {
    this.errorMessage = '옵션을 1개 이상 추가해주세요';
    this.publish();
  }

  blackOptionName() {
    this.optionErrorMessage = '옵션명을 입력해주세요';
    this.publish();
  }

  notUploadImage() {
    this.errorMessage = '사진을 등록해주세요';
    this.publish();
  }
}

export const productRegisterStore = new ProductRegisterStore();
