import { Order } from '@features/dashboard/models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const OrdersActions = createActionGroup({
    source: 'Orders',
    events: {

        'Open Connection ': emptyProps(),

        'Close Connection ': emptyProps(),

        'Connection Opened': emptyProps(),

        'Connection Closed': emptyProps(),

        'Connection Opening Failed': emptyProps(),

        'Order Retreived': props<{ order: Order }>(),

        'Order Retreiving Failed': props<{ error: Error }>(),

        'Change Count': props<{ count: number }>(),
    },
});