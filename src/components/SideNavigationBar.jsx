import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';

import useSideMenuStore from '../hooks/useSideMenuStore';

const Container = styled.div`
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;

  h2 {
    border-bottom: 1px solid #D9D9D9;
    padding-block: 1em;
  }

  li {
    margin-block: 1em;
    font-weight: 500;
  }
`;

const Navigation = styled.div`
  width: 10em;
`;

export default function SideNavigationBar() {
  const location = useLocation();

  const sideMenuStore = useSideMenuStore();

  const { title, menus } = sideMenuStore;

  useEffect(() => {
    sideMenuStore.fetchMenu(location.pathname);
  });

  return (
    <Container>
      <Navigation>
        <Menu>
          <h2>{title}</h2>
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
