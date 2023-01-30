import { useNavigate } from 'react-router-dom';

import Orders from '../components/Orders';

export default function OrdersPage() {
  const navigate = useNavigate();

  return (
    <Orders
      navigate={navigate}
    />
  );
}
