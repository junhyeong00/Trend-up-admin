/* eslint-disable react/jsx-props-no-spreading */

import styled from 'styled-components';

import useProductRegisterStore from '../hooks/useProductRegisterStore';

import numberFormat from '../utils/NumberFormat';

import Error from './ui/Error';

export default function OptionRegister() {
  const productRegisterStore = useProductRegisterStore();

  const {
    options, optionName, optionPrice, optionErrorMessage,
  } = productRegisterStore;

  const addOption = () => {
    if (!optionName) {
      productRegisterStore.blackOptionName();
      return;
    }

    productRegisterStore.addOption({ optionName, optionPrice });
  };

  const handleClickDeleteOption = (id) => {
    productRegisterStore.deleteOption({ id });
  };

  return (
    <div>
      <h3>옵션 등록</h3>
      <div>
        <label htmlFor="input-optionName">옵션명</label>
        <input
          id="input-optionName"
          type="text"
          value={optionName}
          onChange={(e) => productRegisterStore.changeOptionName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="input-optionPrice">추가 금액</label>
        <input
          id="input-optionPrice"
          type="number"
          value={optionPrice}
          onChange={(e) => productRegisterStore.changeOptionPrice(e.target.value)}
        />
        <span>원</span>
      </div>
      <button
        type="button"
        onClick={addOption}
      >
        추가
      </button>
      <Error>{optionErrorMessage}</Error>
      {options.options.length ? (
        <ul>
          {options.options.map((option) => (
            <li key={option.id}>
              <p>{option.optionName}</p>
              <p>
                {numberFormat(option.optionPrice)}
                원
              </p>
              <button
                type="button"
                onClick={() => handleClickDeleteOption(option.id)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
