import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EscuelaComponent } from './escuela/escuela.component';
import { ComiteComponent } from './comite/comite.component';
import { AsesoriaComponent } from './asesoria/asesoria.component';
import { TallerComponent } from './taller/taller.component';
import { SolicitudComponent } from './solicitud/solicitud.component';


@NgModule({
  declarations: [
    EscuelaComponent,
    ComiteComponent,
    AsesoriaComponent,
    TallerComponent,
    SolicitudComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    SharedModule
  ]
})
export class RegistroModule { }
