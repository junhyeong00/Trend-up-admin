import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ProudctRegister from '../components/ProductRegister';
import SideNavigationBar from '../components/SideNavigationBar';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  padding: 1em;
`;

export default function ProudctRegisterPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <SideNavigationBar />
      <ProudctRegister
        navigate={navigate}
      />
    </Container>
  );
}
