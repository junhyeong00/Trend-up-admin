import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import ProudctsPage from './pages/ProductsPage';
import ProudctRegisterPage from './pages/ProductRegisterPage';
import OrdersPage from './pages/OrdersPage';

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
      </Routes>
    </div>
  );
}
