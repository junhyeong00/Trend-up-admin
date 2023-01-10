import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Proudcts from '../components/Products';
import SideNavigationBar from '../components/SideNavigationBar';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  padding: 1em;
`;

export default function ProudctsPage() {
  const navigate = useNavigate();

  const title = '상품 관리';
  const menus = [
    { id: 1, title: '상품 등록', to: '/product/register' },
    { id: 2, title: '상품 목록', to: '/products' },
  ];

  return (
    <Container>
      <SideNavigationBar
        title={title}
        menus={menus}
      />
      <Proudcts
        navigate={navigate}
      />
    </Container>
  );
}
