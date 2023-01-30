import { useEffect } from 'react';

import styled from 'styled-components';
import numberFormat from '../utils/NumberFormat';

import PageNumbers from './PageNumbers';

import useProductsStore from '../hooks/useProductsStore';
import SecondaryButton from './ui/SecondaryButton';

const Container = styled.div`
  min-width: 1024px;
  padding: 1em;
  margin-right: 1em;

  h2 {
    margin-bottom: 1em;
  }

  img {
    width: 10em;
    height: 10em;
  }

  list-style: none;
`;

const Thead = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  align-items: center;
  text-align: center;
  border-top: 2px solid #000000;
  border-bottom: 1px solid #D9D9D9;
  padding-block: 1em;
  font-weight: 700;
`;

const Product = styled.button`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  font-size: .9em;
  border: 0;
  border-bottom: 1px solid #D9D9D9;
  background: none;
`;

export default function Products({ navigate }) {
  const productsStore = useProductsStore();

  const { products, totalPageCount } = productsStore;

  const { currentPage } = productsStore;

  useEffect(() => {
    productsStore.fetchProducts(currentPage);
  }, []);

  const handleClickPage = (page) => {
    productsStore.changePage(page);
  };

  const handleClickProduct = (productId) => {
    window.location.href = `http://localhost:8080/products/${productId}`;
  };

  if (!products.length) {
    return (<p>상품이 존재하지 않습니다</p>);
  }

  return (
    <Container>
      <h2>상품 목록</h2>
      <Thead>
        <p>상품 이미지</p>
        <p>상품명</p>
        <p>판매가</p>
        <p>등록일</p>
        <p>관리</p>
      </Thead>
      <div>
        {products.map((product) => (
          <li key={product.id}>
            <Product
              type="button"
              onClick={() => handleClickProduct(product.id)}
            >
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>
                {numberFormat(product.price)}
                원
              </p>
              <p>{product.createAt}</p>
              <div>
                <SecondaryButton type="button">수정</SecondaryButton>
                <SecondaryButton type="button">삭제</SecondaryButton>
              </div>
            </Product>
          </li>
        ))}
      </div>
      <PageNumbers
        totalPageCount={totalPageCount}
        handleClickPage={handleClickPage}
      />
    </Container>
  );
}
