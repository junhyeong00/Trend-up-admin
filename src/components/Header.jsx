import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
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

  button {
    padding: .6em .8em;
  }
`;

export default function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <H1>
        <Link to="/">admin</Link>
      </H1>
      <Menu>
        <ul>
          <li>
            <Link to="/products">상품 관리</Link>
          </li>
          <li>
            <Link to="/orders">주문 관리</Link>
          </li>
          <li>회원 관리</li>
          <li>대시보드</li>
        </ul>
      </Menu>
    </Container>
  );
}
