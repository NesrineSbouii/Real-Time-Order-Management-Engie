import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectConnected, selectCount, selectOrders, selectProductsByCategory, selectProductsGroupedByCategory } from "../store/selectors";
import { OrdersActions } from "../store/actions";

@Injectable({
    providedIn: 'root'
})
export class DashboardFacade {

    private readonly store = inject(Store)

    public readonly orders$ = this.store.select(selectOrders);

    public readonly productsGroupedByCategory$ = this.store.select(selectProductsGroupedByCategory);

    public readonly connected$ = this.store.select(selectConnected);

    public readonly count$ = this.store.select(selectCount);

    public connect(): void {
        this.store.dispatch(OrdersActions.openConnection())
    }

    public disconnect(): void {
        this.store.dispatch(OrdersActions.closeConnection())
    }

    public changeCount(count: number): void {
        this.store.dispatch(OrdersActions.changeCount({ count }))
    }
}