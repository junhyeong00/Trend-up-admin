Feature('상품 등록 - 관리자는 쇼핑몰에 상품을 추가하기위해 상품등록을 할 수 있다.');

Before(({ I }) => {
  // Given
  I.setupProducts();

  I.amOnPage('/product/register');
});

Scenario('상품 등록 성공', ({ I }) => {
  // When
  I.click('카테고리 선택');

  I.click('상의');

  I.fillField('상품명', '맨투맨');
  I.fillField('판매가', '30000');
  I.fillField('설명', '평범');

  I.fillField('옵션명', '기본');

  I.click('추가');

  // 이미지 추가

  I.click('등록');

  // Then
});
