import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import ProudctsPage from './pages/ProductsPage';
import ProudctRegisterPage from './pages/ProductRegisterPage';
import OrdersPage from './pages/OrdersPage';
import InquiriesPage from './pages/InquiriesPage';
import AnswerWritePage from './pages/AnswerWritePage';
import DashboardPage from './pages/DashboardPage';

import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/products" element={<ProudctsPage />} />
        <Route path="/product/register" element={<ProudctRegisterPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/inquiries" element={<InquiriesPage />} />
        <Route path="/answer/write" element={<AnswerWritePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}
