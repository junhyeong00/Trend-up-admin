import { dashboardStore } from '../stores/DashboardStore';
import useStore from './useStore';

export default function useDashboardStore() {
  return useStore(dashboardStore);
}
