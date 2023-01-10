/* eslint-disable import/order */
import { useEffect } from 'react';

import styled from 'styled-components';

import useOrdersStore from '../hooks/useOrdersStore';

import numberFormat from '../utils/NumberFormat';

import PageNumbers from './PageNumbers';

const Container = styled.div`
  padding: 1em;
`;

const List = styled.ul`
  li {
    display: grid;
    grid-template-columns: 1fr .8fr 1.5fr 1fr 1.2fr .8fr;
    margin-block: .5em;
    padding: 1em;
    border: 1px solid black;
    align-items: center;
    text-align: center;
  }
`;

const Thead = styled.div`
  display: grid;
  grid-template-columns: 1fr .8fr 1.5fr 1fr 1.2fr .8fr;
  align-items: center;
  text-align: center;
  padding-block: .5em;
`;

export default function Orders({ navigate }) {
  const ordersStore = useOrdersStore();

  const {
    orders, totalPageCount, currentPage,
  } = ordersStore;

  useEffect(() => {
    ordersStore.fetchOrders(currentPage);
  }, []);

  const handlePageClick = (page) => {
    ordersStore.changePage(page);
  };

  const orderCountFormat = (number) => {
    if (number === 1) {
      return '';
    }

    return ` 외 ${number - 1}건`;
  };

  const handleChangeDeliveryStatus = (e, orderId) => {
    ordersStore.changeDeliveryStatus(orderId, e.target.value);
  };

  return (
    <Container>
      <div>
        <h3>주문 목록</h3>
        <Thead>
          <p>주문번호</p>
          <p>주문일</p>
          <p>주문 상품</p>
          <p>주문 금액</p>
          <p>배송지 정보</p>
          <p>주문 상태</p>
        </Thead>
        <List>
          {orders.map((order) => (
            <li key={order.id}>
              <p>{order.id}</p>
              <p>{order.createAt}</p>
              <p>
                {order.orderProducts[0].productName}
                {orderCountFormat(order.orderProducts.length)}
              </p>
              <p>
                {numberFormat(order.payment)}
                원
              </p>
              <div>
                <p>{order.receiver}</p>
                <p>
                  (
                  {order.zipCode}
                  )
                  {' '}
                  {order.roadAddress}
                  {' '}
                  {order.detailAddress}
                </p>
              </div>
              <div>
                <select
                  value={order.deliveryStatus}
                  onChange={(e) => handleChangeDeliveryStatus(e, order.id)}
                >
                  <option value="배송 준비중">배송 준비중</option>
                  <option value="배송중">배송중</option>
                  <option value="배송완료">배송완료</option>
                </select>
              </div>
            </li>
          ))}
        </List>
      </div>
      <PageNumbers
        totalPageCount={totalPageCount}
        handlePageClick={handlePageClick}
      />
    </Container>
  );
}
