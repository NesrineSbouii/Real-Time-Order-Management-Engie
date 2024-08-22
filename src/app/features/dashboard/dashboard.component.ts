import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DashboardFacade } from './facades';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {


  private readonly dashboardFacade = inject(DashboardFacade)

  orders$ = this.dashboardFacade.orders$

  productsGroupedByCategory$ = this.dashboardFacade.productsGroupedByCategory$

  connected$ = this.dashboardFacade.connected$

  count$ = this.dashboardFacade.count$

  public ngOnInit(): void {
    this.dashboardFacade.connect();
  }

  public ngOnDestroy(): void {
    this.dashboardFacade.disconnect();
  }

  public open(): void {
    this.dashboardFacade.connect();
  }

  public close(): void {
    this.dashboardFacade.disconnect();
  }

  public chooseCount(count: number): void {
    this.dashboardFacade.changeCount(count);
  }

}
