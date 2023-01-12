import styled from 'styled-components';

import { useState } from 'react';

const Tbody = styled.li`
  display: grid;
  width: 100%;
  grid-template-columns: 1.5fr 5fr 1.3fr 1fr 1fr;
  cursor: pointer;

  p {
    text-align: center;
    vertical-align: middle;
  }

  p:nth-child(2){
  text-align: start;
  }
`;

export default function Inquiry({ inquiry, handleClickInquriy }) {
  return (
    <div>
      <Tbody type="button" onClick={() => handleClickInquriy(inquiry)}>
        <p>{inquiry.productName}</p>
        <p>
          {inquiry.title}
        </p>
        <p>{inquiry.userName}</p>
        <p>{inquiry.createAt}</p>
        <p>{inquiry.answerStatus ? '답변완료' : '미답변'}</p>
      </Tbody>
    </div>
  );
}