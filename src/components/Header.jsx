import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
  min-width: 1024px;
  display: flex;
  width: 100%;
  padding: 1em 1.5em;
  border-bottom: 1px solid rgb(217,217,217);

  ul {
    display: flex;
    align-items: center;
  }

  li {
    margin-inline: 2em;
  }
`;

const H1 = styled.h1`
    margin-inline: 1em 3em;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;
`;

const Button = styled.li`
    a {
    color: ${({ isActive }) => (isActive ? '#303030' : '#808080')};
  }
`;

export default function Header() {
  const location = useLocation();

  function isActive(url) {
    return location.pathname.startsWith(url);
  }

  return (
    <Container>
      <H1>
        <Link to="/">admin</Link>
      </H1>
      <Menu>
        <ul>
          <Button
            isActive={isActive('/product') || isActive('/inquiries')}
          >
            <Link
              to="/products"
            >
              상품 관리
            </Link>
          </Button>
          <Button
            isActive={isActive('/orders')}
          >
            <Link to="/orders">주문 관리</Link>
          </Button>
          <Button
            isActive={isActive('/users')}
          >
            <Link to="/users">회원 관리</Link>
          </Button>
          <Button
            isActive={isActive('/dashboard')}
          >
            <Link to="/dashboard">대시보드</Link>
          </Button>
        </ul>
      </Menu>
    </Container>
  );
}
