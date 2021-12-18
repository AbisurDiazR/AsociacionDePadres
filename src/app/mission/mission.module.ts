import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionRoutingModule } from './mission-routing.module';
import { MissionComponent } from './mission/mission.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MissionComponent
  ],
  imports: [
    CommonModule,
    MissionRoutingModule,
    SharedModule
  ]
})
export class MissionModule { }
