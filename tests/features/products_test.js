Feature('상품 목록 조회 - 관리자는 쇼핑몰에 상품을 추가하기위해 상품등록을 할 수 있다.');

Before(({ I }) => {
  // Given
  I.setupProducts();

  I.amOnPage('/products');
});

Scenario('상품 조회', ({ I }) => {
  // When
  I.click('상품 관리');

  // Then
  I.see('가디건');
  I.see('패딩');
  I.see('청바지');
});
