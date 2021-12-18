import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisionRoutingModule } from './vision-routing.module';
import { VisionComponent } from './vision/vision.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VisionComponent
  ],
  imports: [
    CommonModule,
    VisionRoutingModule,
    SharedModule
  ]
})
export class VisionModule { }
