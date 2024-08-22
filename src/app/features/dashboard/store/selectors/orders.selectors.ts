import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ordersFeatureKey, OrdersState } from '../reducers';
import { Order } from '@features/dashboard/models/order.model';
import { Analytics } from '@features/dashboard/models';

export const selectOrdersFeature =
  createFeatureSelector<OrdersState>(ordersFeatureKey);

export const selectOrders = createSelector(
  selectOrdersFeature,
  (state: OrdersState): Order[] => state.orders
);

export const selectConnected = createSelector(
  selectOrdersFeature,
  (state: OrdersState): boolean => state.connected
);

export const selectCount = createSelector(
  selectOrdersFeature,
  (state: OrdersState): number => state.count
);

export const selectProductsByCategory = createSelector(
  selectOrdersFeature,
  (state: OrdersState): Record<string, Order[]> =>
    state.orders
      .reduce((result: Record<string, Order[]>, currentValue: Order) => {
        (result[currentValue['category']] =
          result[currentValue['category']] || []).sort((a: Order, b: Order) => {
            return new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()
              ? 1
              : -1;
          }).push(currentValue);
        return result;
      }, {})
);

export const selectProductsGroupedByCategory = createSelector(
  selectProductsByCategory,
  selectCount,
  (products: Record<string, Order[]>, count): Analytics[] => {
    return Object.keys(products).map((category) => {
      return {
        category: category,
        products: products[category]
          .reduce((result: Record<string, Order[]>, currentValue: Order) => {
            (result[currentValue['product']] =
              result[currentValue['product']] || []).push(currentValue);
            return result;
          }, {}),
      };
    });
  }
);
