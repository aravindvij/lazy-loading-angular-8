import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from '../customers/customer-list/customer-list.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [{path: '',
component: OrderListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
