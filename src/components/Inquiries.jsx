import { useEffect } from 'react';

import styled from 'styled-components';

import PageNumbers from './PageNumbers';

import useInquiriesStore from '../hooks/useInquiriesStore';
import Inquiry from './Inquiry';

const Container = styled.div`
  min-width: 1024px;
  padding: 1em;
  padding-right: 2em;
`;

const List = styled.ul`
  li {
    padding: 1em;
    border-bottom: 1px solid #D9D9D9;
  }

  button {
    padding: 1em;
  }
`;

const Thead = styled.summary`
  display: grid;
  width: 100%;
  margin-top: 1em;
  border-top: 2px solid #000000;
  border-bottom: 1px solid #D9D9D9;
  padding: 1em;
  grid-template-columns: 1.5fr 5fr 1.3fr 1fr 1fr;

  p {
    text-align: center;
    vertical-align: middle;
    font-weight: 700;
  }
`;

const Empty = styled.p`
  padding-top: 1em;
`;

export default function Inquiries({ navigate }) {
  const inquiriesStore = useInquiriesStore();

  const {
    inquiries, totalPageCount,
  } = inquiriesStore;

  const { currentPage } = inquiriesStore;

  useEffect(() => {
    inquiriesStore.fetchInquiries(currentPage);
  }, []);

  const handleClickPage = (page) => {
    inquiriesStore.changePage(page);
  };

  const handleClickInquriy = (inquiry) => {
    navigate(
      '/answer/write',
      { state: inquiry },
    );
  };

  return (
    <Container>
      <h2>상품 문의</h2>
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
              handleClickInquriy={handleClickInquriy}
            />
          ))}
        </List>
      ) : <Empty>작성된 문의가 없습니다</Empty>}
      <PageNumbers
        totalPageCount={totalPageCount}
        handleClickPage={handleClickPage}
      />
    </Container>
  );
}
