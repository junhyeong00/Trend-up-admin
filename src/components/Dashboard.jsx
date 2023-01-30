import { useEffect } from 'react';
import styled from 'styled-components';
import useDashboardStore from '../hooks/useDashboardStore';
import numberFormat from '../utils/NumberFormat';

import Graph from './Graph';

const Container = styled.div`
  min-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 1em;
  padding-right: 2em;
`;

const Title = styled.h2`
  margin-bottom: 1em;
`;

const Information = styled.div`
  margin-bottom: 1em;
  border: 1px solid black;
  border-radius: 8px;
  padding: 1em;
  width: 49%;
  height: 10em;
  background: hsla(0,0%,85%,.17);

  h3 {
    margin-bottom: .5em;
  }

  > div {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .4em;

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Sales = styled.div`
    /* width: 90vw; */
    height: 400px;
    margin: 0;
    border: 1px solid black;
    border-radius: 8px;
    padding: 1em;
    background: hsla(0,0%,85%,.17);
`;

const Informations = styled.div`
    display: flex;
    justify-content: space-between;
    /* width: 90vw; */
`;

export default function Dashboard() {
  const dashboardStore = useDashboardStore();

  const {
    salesData, deliveryInformation, totalSales, monthlySales,
  } = dashboardStore;

  useEffect(() => {
    dashboardStore.fetchSalesData();
    dashboardStore.fetchDeliveryInformation();
  }, []);

  if (!totalSales) {
    return (<p>로딩중</p>);
  }

  return (
    <Container>
      <Title>대시보드</Title>
      <Informations>
        <Information>
          <h3>배송현황</h3>
          <div>
            <div>
              <p>배송 준비중</p>
              <p>
                {deliveryInformation.shippedCount}
                건
              </p>
            </div>
            <div>
              <p>배송중</p>
              <p>
                {deliveryInformation.inTransitCount}
                건
              </p>
            </div>
            <div>
              <p>배송완료</p>
              <p>
                {deliveryInformation.deliveredCount}
                건
              </p>
            </div>
          </div>
        </Information>
        <Information>
          <h3>총 판매 금액</h3>
          <div>
            <div>
              <p>월 매출 금액</p>
              <p>
                {numberFormat(monthlySales)}
                원
              </p>
            </div>
            <div>
              <p>총 매출 금액</p>
              <p>
                {numberFormat(totalSales)}
                원
              </p>
            </div>
          </div>
        </Information>
      </Informations>
      <Sales>
        <h3>매출 통계 (최근 한달)</h3>
        <Graph
          data={[{ id: '매출', data: salesData }]}
        />
      </Sales>
    </Container>
  );
}
