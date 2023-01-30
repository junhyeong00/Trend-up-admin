import { useNavigate } from 'react-router-dom';

import Proudcts from '../components/Products';

export default function ProudctsPage() {
  const navigate = useNavigate();

  return (
    <Proudcts
      navigate={navigate}
    />
  );
}
