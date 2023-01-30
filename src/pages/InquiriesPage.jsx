import { useNavigate } from 'react-router-dom';

import Inquiries from '../components/Inquiries';

export default function InquiriesPage() {
  const navigate = useNavigate();

  return (
    <Inquiries
      navigate={navigate}
    />
  );
}
