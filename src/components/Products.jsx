import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import numberFormat from '../utils/NumberFormat';

import PageNumbers from './PageNumbers';

import useProductsStore from '../hooks/useProductsStore';

const Container = styled.div`
  padding: 1em;

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
  padding-block: .6em;
`;

const Product = styled.li`
  button {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
    align-items: center;
  }
`;

export default function Products({ navigate }) {
  const productsStore = useProductsStore();

  const { products, totalPageCount } = productsStore;

  const { currentPage } = productsStore;

  useEffect(() => {
    productsStore.fetchProducts(currentPage);
  }, []);

  const handlePageClick = (page) => {
    productsStore.changePage(page);
  };

  // const handleProductClick = (productId) => {
  //   navigate(`/products/${productId}`);
  // };

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
          <Product key={product.id}>
            <button
              type="button"
              // onClick={() => handleProductClick(product.id)}
            >
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>
                {numberFormat(product.price)}
                원
              </p>
              <p>{product.createAt}</p>
              <div>
                <button type="button">수정</button>
                <button type="button">삭제</button>
              </div>
            </button>
          </Product>
        ))}
      </div>
      <PageNumbers
        totalPageCount={totalPageCount}
        handlePageClick={handlePageClick}
      />
    </Container>
  );
}
