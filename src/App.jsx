import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProudctRegisterPage from './pages/ProductRegisterPage';

import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/product/register" element={<ProudctRegisterPage />} />
      </Routes>
    </div>
  );
}
