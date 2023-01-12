Feature('답변 작성 - 관리자는 회원의 문의에 대한 답을 주기 위해 답변을 작성할 수 있다.');

Before(({ I }) => {
  // Given
  I.setupProducts();
  I.setupInquiries();

  I.amOnPage('/inquiries');
  I.click('재입고 문의');
});

Scenario('답변 작성', ({ I }) => {
  // When
  I.fillFeiled('내용', '해당상품은 일주일 내로 재입고 될 예정입니다');

  I.click('등록');

  // Then
  I.see('문의 목록');
});

Scenario('답변 작성 실패 - 내용을 입력하지 않은 경우', ({ I }) => {
  // When
  I.fillFeiled('내용', '');

  I.click('등록');

  // Then
  I.see('답변 내용을 입력해주세요');
});
