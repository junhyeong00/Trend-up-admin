/* eslint-disable react/jsx-props-no-spreading */

import { useEffect } from 'react';

import { useForm } from 'react-hook-form';

import styled from 'styled-components';

import useCategoriesStore from '../hooks/useCategoriesStore';
import useProductRegisterStore from '../hooks/useProductRegisterStore';

import OptionRegister from './OptionRegister';

import Error from './ui/Error';

const Container = styled.div`
  div {
    margin-block: 1em;
  }
`;

const PhotoUpload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  height: 15em;

  input {
    /* display: none; */
  }

  button {
    margin: 10px 0;
    width: 100px;
    height: 30px;
    border-radius: 10px;
  }
`;

const Box = styled.img`
  background: center url(${(props) => props.url}) no-repeat;
  background-size: contain;
  width: 12em;
  height: 12em;
  /* padding: 10px; */
`;

export default function ProudctRegister({ navigate }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const categoriesStore = useCategoriesStore();
  const productRegisterStore = useProductRegisterStore();

  const { categories } = categoriesStore;

  const {
    imageUrl, categoryId, errorMessage, options,
  } = productRegisterStore;

  useEffect(() => {
    categoriesStore.fetchCategories();
  }, []);

  const handleImageChange = (e) => {
    productRegisterStore.uploadImage(e.target.files[0]);
  };

  const handleChangeCategory = (e) => {
    productRegisterStore.changeCategory(e.target.value);
  };

  const onSubmit = async (data) => {
    const { productName, price, description } = data;

    const proudctId = await productRegisterStore.registerProduct({
      productName, price, description,
    });

    if (proudctId) {
      navigate('/');
      // TODO 이동할 페이지 필요
    }
  };

  return (
    <Container>
      <h2>상품 등록</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>상품 정보 입력</h3>
        <div>
          <label htmlFor="categories">카테고리</label>
          <select
            id="categories"
            onChange={handleChangeCategory}
          >
            <option
              value={0}
            >
              {' '}
              카테고리 선택
              {' '}
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="input-productName">상품명</label>
          <input
            id="input-productName"
            {...register(
              'productName',
              { required: { value: true, message: '상품명을 입력해주세요' } },
            )}
          />
          <Error>{errors.productName ? errors.productName.message : null}</Error>
        </div>
        <div>
          <label htmlFor="input-price">판매가</label>
          <input
            id="input-price"
            type="number"
            {...register(
              'price',
              { required: { value: true, message: '가격을 입력해주세요' } },
            )}
          />
          <span>원</span>
          <Error>{errors.price ? errors.price.message : null}</Error>
        </div>
        <div>
          <label htmlFor="input-description">설명</label>
          <input
            id="input-description"
            {...register(
              'description',
              { required: { value: true, message: '설명을 입력해주세요' } },
            )}
          />
          <Error>{errors.description ? errors.description.message : null}</Error>
        </div>
        <OptionRegister />
        <div>
          <PhotoUpload>
            <label htmlFor="input-image">이미지 추가</label>
            {imageUrl ? <Box url={imageUrl} /> : <p>사진을 업로드 해주세요</p>}
            <input
              id="input-image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </PhotoUpload>
        </div>
        <button type="submit">등록</button>
        <Error>{errorMessage}</Error>
      </form>
    </Container>
  );
}
