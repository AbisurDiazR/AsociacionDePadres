import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesoriaComponent } from './asesoria/asesoria.component';
import { ComiteComponent } from './comite/comite.component';
import { EscuelaComponent } from './escuela/escuela.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { TallerComponent } from './taller/taller.component';

const routes: Routes = [
  {
    path: 'escuela',
    component: EscuelaComponent
  },
  {
    path: 'asesoria',
    component: AsesoriaComponent
  },
  {
    path: 'comite',
    component: ComiteComponent
  },
  {
    path: 'solicitud',
    component: SolicitudComponent
  },
  {
    path: 'taller',
    component: TallerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
