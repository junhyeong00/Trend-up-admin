import Options from '../models/Options';
import { apiService } from '../services/ApiService';

import Store from './Store';

export default class ProductRegisterStore extends Store {
  constructor() {
    super();

    this.categoryId = 0;
    this.imageUrl = '';
    this.errorMessage = '';

    this.options = new Options([]);
    this.optionName = '';
    this.optionPrice = '';
    this.optionErrorMessage = '';
  }

  reset() {
    this.categoryId = 0;
    this.imageUrl = '';
    this.errorMessage = '';

    this.options = new Options([]);
    this.optionErrorMessage = '';
  }

  async registerProduct({
    productName, price, description,
  }) {
    if (!this.categoryId) {
      this.notChoiceCategory();
      return '';
    }

    if (!this.options.options.length) {
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
      options: this.options.options,
      imageUrl: this.imageUrl,
    });

    this.reset();

    this.publish();

    return productId;
  }

  addOption({
    optionName, optionPrice,
  }) {
    this.options = this.options.addOption({
      optionName, optionPrice: Number(optionPrice),
    });

    this.optionErrorMessage = '';
    this.optionName = '';
    this.optionPrice = '';

    this.publish();
  }

  deleteOption({
    id,
  }) {
    this.options = this.options.deleteOption({
      id,
    });

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
