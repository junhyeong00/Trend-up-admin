import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import ProudctsPage from './pages/ProductsPage';
import ProudctRegisterPage from './pages/ProductRegisterPage';

import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/products" element={<ProudctsPage />} />
        <Route path="/product/register" element={<ProudctRegisterPage />} />
      </Routes>
    </div>
  );
}
