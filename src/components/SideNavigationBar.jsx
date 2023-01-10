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

export default function SideNavigationBar({ title, menus }) {
  return (
    <Container>
      <Navigation>
        <Menu>
          <h3>{title}</h3>
          <ul>
            {menus.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.to}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </Menu>
      </Navigation>
    </Container>
  );
}
