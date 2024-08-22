import { Component, inject, input, Input } from '@angular/core';
import { Order } from './../../models/order.model'
import { DashboardFacade } from '@features/dashboard/facades';
@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
})
export class CategoryCardComponent {

  @Input() category = '';

  @Input() products: Record<string, Order[]> = {};

  private readonly dashboardFacade = inject(DashboardFacade)

  public count$ = this.dashboardFacade.count$


  public identify(index: number, item: Record<string, Order[]>) {
    return 'key' + index;
  }
}
