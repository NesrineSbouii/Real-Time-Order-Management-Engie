import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OrdersService } from './services/orders.service';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { DashboardFacade } from './facades';


@NgModule({
  declarations: [DashboardComponent, CategoryCardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CurrencyPipe
  ],
  providers: [OrdersService, DashboardFacade]
})
export class DashboardModule { }
