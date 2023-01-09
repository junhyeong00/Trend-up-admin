import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  border: 1px solid black;

  li {
    margin-block: .3em;
  }
`;

const Navigation = styled.div`
  width: 10em;
  margin-top: .5em;
`;

export default function SideNavigationBar() {
  return (
    <Container>
      <Navigation>
        <Menu>
          <h3>상품 관리</h3>
          <ul>
            <li>
              카테고리
            </li>
            <li>
              <Link to="/product/register">상품 등록</Link>
            </li>
            <li>
              상품 목록
            </li>
          </ul>
        </Menu>
      </Navigation>
    </Container>
  );
}
