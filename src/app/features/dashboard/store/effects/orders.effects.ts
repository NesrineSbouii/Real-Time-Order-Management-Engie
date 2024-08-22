import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, combineLatestWith, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { OrdersActions } from '../actions';
import { OrdersService } from '@features/dashboard/services';
import { Action } from '@ngrx/store';

@Injectable()
export class OrdersEffects {


  connectToSocket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.openConnection),
      tap(() =>
        this.ordersService.connect()
      ),
      map(() => {
        return OrdersActions.connectionOpened()
      })
    )
  );


  disconnectFromSocket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.closeConnection),
      tap(() => this.ordersService.disconnect()),
      map(() => {
        return OrdersActions.connectionClosed()
      }
      )
    )
  );

  listenToOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.connectionOpened),
      switchMap(() => {
        return this.ordersService.listenToSocketWithEventName('get-orders')
          .pipe(
            map((order) => OrdersActions.orderRetreived({ order }))
          )
      }),
      catchError((error) => of(OrdersActions.orderRetreivingFailed({ error })))

    )
  );


  constructor(
    private actions$: Actions,
    private ordersService: OrdersService
  ) { }
}