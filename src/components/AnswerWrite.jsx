/* eslint-disable react/jsx-props-no-spreading */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

import useAnswerFormStore from '../hooks/useAnswerFormStore';

import Error from './ui/Error';
import PrimaryButton from './ui/PrimaryButton';
import SecondaryButton from './ui/SecondaryButton';
import Textarea from './ui/Textarea';

const Containter = styled.div`
  margin-right: 1em;
  
  h3 {
    margin-bottom: 1em;
  }
  label {
    display: none;
  }
  textarea {
    width: 100%;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;  
  gap: .7em;

  button {
    border-radius: 4px;
    padding: .8em 2em;
  }
`;

const Inquiry = styled.div`
  margin-bottom: 2.3em;
  background-color: #F7F7F7;
  padding-block: 1em;
  padding-inline: .1em;
  div {
    display: grid;
    grid-template-columns: 3em 1fr;
    margin-bottom: 1.2em;

    p:first-child {
      font-weight: 600;
    }
  }
`;

export default function AnswerWrite({ navigate }) {
  const location = useLocation();

  const answerFormStore = useAnswerFormStore();

  const inquiry = location.state;

  const { comment, errorMessage } = answerFormStore;

  const handleClickRegister = async () => {
    const answerId = await answerFormStore.write({ inquiryId: inquiry.id });

    if (answerId) {
      navigate('/inquiries');
    }
  };

  const handleClickCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    answerFormStore.reset();
  }, []);

  return (
    <Containter>
      <h3>답변 작성</h3>
      <Inquiry>
        <div>
          <p>제목</p>
          <p>{inquiry.title}</p>
        </div>
        <div>
          <p>내용</p>
          <pre>{inquiry.content}</pre>
        </div>
      </Inquiry>
      <div>
        <div>
          <label htmlFor="input-comment">내용</label>
          <Textarea
            id="input-comment"
            type="text"
            rows="12"
            cols="55"
            maxLength="1000"
            placeholder="답변 내용을 입력하세요"
            error={errorMessage}
            value={comment}
            onChange={(e) => answerFormStore.changeComment(e.target.value)}
          />
        </div>
        <Buttons>
          <PrimaryButton
            type="button"
            onClick={handleClickRegister}
          >
            등록
          </PrimaryButton>
          <SecondaryButton
            type="button"
            onClick={handleClickCancel}
          >
            취소
          </SecondaryButton>
        </Buttons>
        <Error>{errorMessage}</Error>
      </div>
    </Containter>
  );
}
