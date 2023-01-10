import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Orders from '../components/Orders';
import SideNavigationBar from '../components/SideNavigationBar';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  padding: 1em;
`;

export default function OrdersPage() {
  const navigate = useNavigate();

  const title = '주문 관리';
  const menus = [
    { id: 1, title: '주문 목록', to: '/orders' },
  ];

  return (
    <Container>
      <SideNavigationBar
        title={title}
        menus={menus}
      />
      <Orders
        navigate={navigate}
      />
    </Container>
  );
}
