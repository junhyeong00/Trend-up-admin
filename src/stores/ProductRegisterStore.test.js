import { waitFor } from '@testing-library/react';

import ProductRegisterStore from './ProductRegisterStore';

const context = describe;

describe('ProductRegisterStore', () => {
  let productRegisterStore;

  beforeEach(() => {
    productRegisterStore = new ProductRegisterStore();
  });

  describe('registerProduct', () => {
    context('등록 성공', () => {
      it('productId 확인', async () => {
        productRegisterStore.addOption({
          optionName: '기본', optionPrice: 0,
        });

        productRegisterStore.changeCategory(1);

        await productRegisterStore.uploadImage('이미지');

        const { productId } = await productRegisterStore.registerProduct({
          productName: '가디건', price: 100, description: '부드럽다',
        });

        await waitFor(() => {
          expect(productId).toBe(1);
        });
      });
    });

    context('카테고리를 선택하지 않았을 때', () => {
      it('"카테고리를 선택해주세요" error message 확인', () => {
        productRegisterStore.registerProduct({
          productName: '가디건', price: 100, description: '부드럽다',
        });

        expect(productRegisterStore.errorMessage).toBe('카테고리를 선택해주세요');
      });
    });

    context('옵션을 추가하지 않았을 때', () => {
      it('"옵션을 1개 이상 추가해주세요" error message 확인', () => {
        productRegisterStore.changeCategory(1);

        productRegisterStore.registerProduct({
          productName: '가디건', price: 100, description: '부드럽다',
        });

        expect(productRegisterStore.errorMessage).toBe('옵션을 1개 이상 추가해주세요');
      });
    });

    context('이미지가 없을 때', () => {
      it('"사진을 등록해주세요" error message 확인', () => {
        productRegisterStore.addOption({
          optionName: '기본', optionPrice: 0,
        });

        productRegisterStore.changeCategory(1);

        productRegisterStore.registerProduct({
          productName: '가디건', price: 100, description: '부드럽다',
        });

        expect(productRegisterStore.errorMessage).toBe('사진을 등록해주세요');
      });
    });
  });

  describe('addOption', () => {
    it('add Option', () => {
      productRegisterStore.addOption({
        optionName: '기본', optionPrice: 0,
      });

      expect(productRegisterStore.options.options).toHaveLength(1);
    });
  });

  describe('deleteOption', () => {
    it('delete Option', () => {
      productRegisterStore.addOption({
        optionName: '기본', optionPrice: 0,
      });

      expect(productRegisterStore.options.options).toHaveLength(1);

      productRegisterStore.deleteOption({ id: 1 });

      expect(productRegisterStore.options.options).toHaveLength(0);
    });
  });
});
