/* eslint-disable react/jsx-props-no-spreading */

import { useEffect } from 'react';

import { useForm } from 'react-hook-form';

import styled from 'styled-components';

import useCategoriesStore from '../hooks/useCategoriesStore';
import useProductRegisterStore from '../hooks/useProductRegisterStore';

import OptionRegister from './OptionRegister';

import Error from './ui/Error';
import Input from './ui/Input';
import PrimaryButton from './ui/PrimaryButton';
import SecondaryButton from './ui/SecondaryButton';

const Container = styled.div`
  padding: 1em;
  min-width: 1024px;
  margin-right: 1em;

  h2 {
    margin-bottom: 1em;
  }
  
  form > div {
    margin-block: 1em;
  }

  select {
    margin-left: 1em;
    border-color: #CCCCCC;
    padding: .5em 1em;
  }

  input {
    margin-inline: 1em .2em;
  }
`;

const PhotoUpload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap:.5em;
  height: 15em;

  input {
    display: none;
  }

  button {
    margin: 10px 0;
    width: 100px;
    height: 30px;
    border-radius: 10px;
  }

  label {
    width: 150px;
    height: 30px;
    background: #fff;
    border: 1px solid rgb(77,77,77);
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Box = styled.img`
  background: center url(${(props) => props.url}) no-repeat;
  background-size: contain;
  width: 12em;
  height: 12em;
  /* padding: 10px; */
`;

const RegisterButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 12em;
  }

  p {
    margin-top: .4em;
  }
`;

export default function ProudctRegister({ navigate }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const categoriesStore = useCategoriesStore();
  const productRegisterStore = useProductRegisterStore();

  const { categories } = categoriesStore;

  const {
    imageUrl, errorMessage,
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
      navigate('/products');
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
          <Input
            id="input-productName"
            error={errors.productName}
            {...register(
              'productName',
              { required: { value: true, message: '상품명을 입력해주세요' } },
            )}
          />
          <Error>{errors.productName ? errors.productName.message : null}</Error>
        </div>
        <div>
          <label htmlFor="input-price">판매가</label>
          <Input
            id="input-price"
            type="number"
            error={errors.price}
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
          <Input
            id="input-description"
            error={errors.description}
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
            {imageUrl ? <Box url={imageUrl} /> : <p>사진을 업로드 해주세요</p>}
            <label htmlFor="input-image">이미지 업로드</label>
            <input
              id="input-image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </PhotoUpload>
        </div>
        <RegisterButton>
          <PrimaryButton type="submit">상품 등록</PrimaryButton>
          <Error>{errorMessage}</Error>
        </RegisterButton>
      </form>
    </Container>
  );
}
