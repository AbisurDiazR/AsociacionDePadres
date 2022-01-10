import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonacionRoutingModule } from './donacion-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PaypalComponent } from './paypal/paypal.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    PaypalComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    DonacionRoutingModule,
    SharedModule
  ]
})
export class DonacionModule { }
