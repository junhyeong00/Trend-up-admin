import { productRegisterStore } from '../stores/ProductRegisterStore';
import useStore from './useStore';

export default function useProductRegisterStore() {
  return useStore(productRegisterStore);
}
