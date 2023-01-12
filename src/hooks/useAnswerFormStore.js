import { answerFormStore } from '../stores/AnswerFormStore';
import useStore from './useStore';

export default function useAnswerFormStore() {
  return useStore(answerFormStore);
}
