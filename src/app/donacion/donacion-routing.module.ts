import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaypalComponent } from './paypal/paypal.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductsComponent
  },
  {
    path: 'paypal',
    component: PaypalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonacionRoutingModule { }
