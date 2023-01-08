import { useNavigate } from 'react-router-dom';

import ProudctRegister from '../components/ProductRegister';

export default function ProudctRegisterPage() {
  const navigate = useNavigate();

  return (
    <ProudctRegister
      navigate={navigate}
    />
  );
}
