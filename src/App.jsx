import { Route, Routes } from 'react-router-dom';
import ProudctRegisterPage from './pages/ProductRegisterPage';

import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/product/register" element={<ProudctRegisterPage />} />
      </Routes>
    </div>
  );
}
