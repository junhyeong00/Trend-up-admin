import { Route, Routes } from 'react-router-dom';

import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/DefaultTheme';

import Header from './components/Header';

import ProudctsPage from './pages/ProductsPage';
import ProudctRegisterPage from './pages/ProductRegisterPage';
import OrdersPage from './pages/OrdersPage';
import InquiriesPage from './pages/InquiriesPage';
import AnswerWritePage from './pages/AnswerWritePage';
import DashboardPage from './pages/DashboardPage';
import SideNavigationBar from './components/SideNavigationBar';

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-width: 1024px;
  max-width: 1980px;
  width: 100%;
  margin: 0 auto;
  padding-inline: 1em;
  min-height: 500px;
  display: grid;
  grid-template-columns: 1fr 6fr;
  padding: 1em;
`;

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Main>
        <SideNavigationBar />
        <Routes>
          <Route path="/products" element={<ProudctsPage />} />
          <Route path="/product/register" element={<ProudctRegisterPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/inquiries" element={<InquiriesPage />} />
          <Route path="/answer/write" element={<AnswerWritePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}
