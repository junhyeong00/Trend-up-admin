import OrdersStore from './OrdersStore';

describe('OrdersStore', () => {
  let ordersStore;

  beforeEach(() => {
    ordersStore = new OrdersStore();
  });

  describe('fetchOrders', () => {
    it('전체 주문 목록 확인', async () => {
      await ordersStore.fetchOrders(1);

      expect(ordersStore.orders.length).toBe(3);
      expect(ordersStore.orders[0].id).toBe(1);
    });
  });
});
