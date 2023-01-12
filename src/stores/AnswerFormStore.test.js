import { waitFor } from '@testing-library/react';

import AnswerFormStore from './AnswerFormStore';

const context = describe;

describe('AnswerFormStore', () => {
  let answerFormStore;

  beforeEach(() => {
    answerFormStore = new AnswerFormStore();
  });

  describe('write', () => {
    context('등록 성공', () => {
      it('answerId 확인', async () => {
        answerFormStore.changeComment('해당상품은 일주일 내로 재입고 될 예정입니다');

        const { answerId } = await answerFormStore.write({
          inquiryId: 1,
        });

        await waitFor(() => {
          expect(answerId).toBe(1);
        });
      });
    });

    context('내용을 입력하지 않았을 때', () => {
      it('"답변 내용을 입력해주세요" error message 확인', () => {
        answerFormStore.write({ inquiryId: 1 });

        expect(answerFormStore.errorMessage).toBe('답변 내용을 입력해주세요');
      });
    });
  });
});
