import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'mision',
    loadChildren: () => import('src/app/mission/mission.module').then(m => m.MissionModule)
  },
  {
    path: 'vision',
    loadChildren: () => import('src/app/vision/vision.module').then(m => m.VisionModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('src/app/about-us/about-us.module').then(m => m.AboutUsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
