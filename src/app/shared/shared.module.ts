import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { SessionComponent } from './session/session.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// MDB Angular Pro
import { TabsModule, WavesModule } from 'ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

export function HttpLoaderFactory(http: HttpClient): any{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegistroEscuelaComponent } from './registro-escuela/registro-escuela.component';
import { RegistroComiteComponent } from './registro-comite/registro-comite.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CarrouselComponent,
    SessionComponent,
    RegistroEscuelaComponent,
    RegistroComiteComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    }),
    NgbModule,
    TabsModule.forRoot(),
    WavesModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    NavbarComponent,
    TranslateModule,
    CarrouselComponent,
    SessionComponent,
    NgbModule,
    TabsModule,
    WavesModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
