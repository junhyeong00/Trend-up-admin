Feature('주문 목록 조회 - 관리자는 주문된 상품을 확인하기 위해 주문 조회를 할 수 있다.');

Before(({ I }) => {
  // Given
  I.setupProducts();
  I.setupOrders();

  I.amOnPage('/');
});

Scenario('주문 내역이 없는 경우', ({ I }) => {
  // When
  I.click('주문 관리');

  // Then
  I.see('주문 내역이 없습니다');
});

Scenario('주문 내역이 있는 경우', ({ I }) => {
  // When
  I.click('주문 관리');

  // Then
  I.see('패딩');
  I.see('배송 준비중');
});
