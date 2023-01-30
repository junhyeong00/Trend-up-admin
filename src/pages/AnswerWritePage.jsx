import { useNavigate } from 'react-router-dom';

import AnswerWrite from '../components/AnswerWrite';

export default function AnswerWritePage() {
  const navigate = useNavigate();

  return (
    <AnswerWrite
      navigate={navigate}
    />
  );
}
