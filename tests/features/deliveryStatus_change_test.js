Feature('배송 상태 변경 - 관리자는 구매자에게 배송 상태변경을 알리기 위해 배송 상태를 변경할 수 있다.');

Before(({ I }) => {
  // Given
  I.setupProducts();
  I.setupOrders();

  I.amOnPage('/');
});

Scenario('배송상태를 변경하지 않은 경우', ({ I }) => {
  // When
  I.click('주문 관리');

  // Then
  I.see('패딩');
  I.see('배송 준비중');
});

Scenario('배송상태를 배송중으로 변경한 경우', ({ I }) => {
  // When
  I.click('주문 관리');

  I.see('패딩');
  I.click('배송 준비중');
  I.click('배송중');

  // Then
  I.see('배송중');
});

Scenario('배송상태를 배송완료로 변경한 경우', ({ I }) => {
  // When
  I.click('주문 관리');

  I.see('패딩');
  I.click('배송 준비중');
  I.click('배송완료');

  // Then
  I.see('배송완료');
});
