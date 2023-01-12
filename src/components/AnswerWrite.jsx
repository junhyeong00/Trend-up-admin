/* eslint-disable react/jsx-props-no-spreading */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

import useAnswerFormStore from '../hooks/useAnswerFormStore';

import Error from './ui/Error';

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
    <div>
      <h3>답변 작성</h3>
      <div>
        <div>
          <p>제목</p>
          <p>{inquiry.title}</p>
        </div>
        <div>
          <p>내용</p>
          <pre>{inquiry.content}</pre>
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="input-comment">내용</label>
          <textarea
            id="input-comment"
            type="text"
            rows="12"
            cols="55"
            maxLength="1000"
            value={comment}
            onChange={(e) => answerFormStore.changeComment(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleClickRegister}
        >
          등록
        </button>
        <button
          type="button"
          onClick={handleClickCancel}
        >
          취소
        </button>
        <Error>{errorMessage}</Error>
      </div>
    </div>
  );
}
