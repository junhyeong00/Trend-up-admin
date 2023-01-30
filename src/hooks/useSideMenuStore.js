import { sideMenuStore } from '../stores/SideMenuStore';
import useStore from './useStore';

export default function useSideMenuStore() {
  return useStore(sideMenuStore);
}
