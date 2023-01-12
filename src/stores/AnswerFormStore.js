import { apiService } from '../services/ApiService';

import Store from './Store';

export default class AnswerFormStore extends Store {
  constructor() {
    super();

    this.comment = '';

    this.errorMessage = '';
  }

  reset() {
    this.comment = '';
    this.errorMessage = '';
  }

  async write({ inquiryId }) {
    if (!this.comment) {
      this.errorMessage = '답변 내용을 입력해주세요';

      this.publish();
      return '';
    }

    const answerId = await apiService.writeAnswer({ inquiryId, comment: this.comment });

    this.reset();

    this.publish();
    return answerId;
  }

  changeComment(comment) {
    this.comment = comment;

    this.publish();
  }
}

export const answerFormStore = new AnswerFormStore();
