import { createReducer, on } from '@ngrx/store';
import { OrdersActions } from '../actions';
import { Order } from '@features/dashboard/models';
import { differenceInSeconds } from 'date-fns';

export const ordersFeatureKey = 'orders';

export interface OrdersState {
  orders: Order[];
  connected: boolean;
  count: number;
}

export const initialState: OrdersState = {
  orders: [],
  connected: false,
  count: 30,
};

export const ordersReducer = createReducer(
  initialState,
  on(OrdersActions.connectionOpened, (state) => ({
    ...state,
    connected: true,
  })),
  on(OrdersActions.orderRetreived, (state, { order }) => ({
    ...state,
    orders: [...state.orders, order].filter((order) => {
      return (
        differenceInSeconds(new Date(), new Date(order.createdAt)) < state.count
      );
    }),
  })),
  on(OrdersActions.closeConnection, (state) => ({
    ...state,
    connected: false,
  })),
  on(OrdersActions.connectionOpeningFailed, (state) => ({
    ...state,
    connected: false,
  })),
  on(OrdersActions.connectionOpeningFailed, (state) => ({
    ...state,
    connected: false,
  })),
  on(OrdersActions.changeCount, (state, { count }) => ({
    ...state,
    count: count,
    orders: state.orders.filter((order) => {
      return differenceInSeconds(new Date(), new Date(order.createdAt)) < count;
    }),
  }))
);
