/* eslint-disable import/order */
import { useEffect } from 'react';

import styled from 'styled-components';

import useOrdersStore from '../hooks/useOrdersStore';

import numberFormat from '../utils/NumberFormat';

import PageNumbers from './PageNumbers';

const Container = styled.div`
  min-width: 1024px;
  padding: 1em;
  margin-right: 1em;

  h2 {
    margin-bottom: 1em;
  }
`;

const List = styled.ul`
  li {
    display: grid;
    grid-template-columns: 1fr .8fr 1.5fr 1fr 1.2fr .8fr;
    margin-block: .5em;
    padding: 1em;
    border-bottom: 1px solid #D9D9D9;
    align-items: center;
    text-align: center;
  }
`;

const Thead = styled.div`
  display: grid;
  grid-template-columns: 1fr .8fr 1.5fr 1fr 1.2fr .8fr;
  align-items: center;
  text-align: center;
  border-top: 2px solid #000000;
  border-bottom: 1px solid #D9D9D9;
  padding: 1em;
  font-weight: 700;
`;

export default function Orders({ navigate }) {
  const ordersStore = useOrdersStore();

  const {
    orders, totalPageCount, currentPage,
  } = ordersStore;

  useEffect(() => {
    ordersStore.fetchOrders(currentPage);
  }, []);

  const handleClickPage = (page) => {
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
        <h2>주문 목록</h2>
        <Thead>
          <p>주문번호</p>
          <p>주문일</p>
          <p>주문 상품</p>
          <p>주문 금액</p>
          <p>배송지 정보</p>
          <p>주문 상태</p>
        </Thead>
        {orders.length ? (
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
        ) : <p>주문내역이 없습니다</p>}
      </div>
      <PageNumbers
        totalPageCount={totalPageCount}
        handleClickPage={handleClickPage}
      />
    </Container>
  );
}
