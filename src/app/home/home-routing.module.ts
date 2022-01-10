import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'forget-password',
    component: RestorePasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
