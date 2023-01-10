import { useEffect } from 'react';

import styled from 'styled-components';

import PageNumbers from './PageNumbers';

import useInquiriesStore from '../hooks/useInquiriesStore';
import Inquiry from './Inquiry';

const Container = styled.div`
  padding: 1em;
`;

const List = styled.ul`
  li {
    padding: 1em;
    border: 1px solid black;
  }

  button {
    padding: 1em;
  }

  p {
    padding-right: 1em;
  }
`;

const Thead = styled.summary`
  display: grid;
  width: 100%;
  margin-top: 1em;
  padding: 1em;
  grid-template-columns: 1.5fr 5fr 1.3fr 1fr 1fr;

  p {
    text-align: center;
    vertical-align: middle;
  }
`;

export default function Inquiries() {
  const inquiriesStore = useInquiriesStore();

  const {
    inquiries, totalPageCount,
  } = inquiriesStore;

  const { currentPage } = inquiriesStore;

  useEffect(() => {
    inquiriesStore.fetchInquiries(currentPage);
  }, []);

  const handlePageClick = (page) => {
    inquiriesStore.changePage(page);
  };

  return (
    <Container>
      <h3>상품 문의</h3>
      <div>
        <Thead>
          <p>상품명</p>
          <p>제목</p>
          <p>작성자</p>
          <p>작성일</p>
          <p>답변 상태</p>
        </Thead>
      </div>
      {inquiries.length ? (
        <List>
          {inquiries.map((inquiry) => (
            <Inquiry
              key={inquiry.id}
              inquiry={inquiry}
            />
          ))}
        </List>
      ) : <p>작성된 문의가 없습니다</p>}
      <PageNumbers
        totalPageCount={totalPageCount}
        handlePageClick={handlePageClick}
      />
    </Container>
  );
}
