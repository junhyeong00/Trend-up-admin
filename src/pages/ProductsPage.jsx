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

  return (
    <Container>
      <SideNavigationBar />
      <Proudcts
        navigate={navigate}
      />
    </Container>
  );
}
