import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComitesService } from 'src/app/service/comites.service';
import { EscuelasService } from 'src/app/service/escuelas.service';
import { PHONE_REGEX } from '../data';

@Component({
  selector: 'app-registro-comite',
  templateUrl: './registro-comite.component.html',
  styleUrls: ['./registro-comite.component.css']
})
export class RegistroComiteComponent implements OnInit {
  public comiteForm!: any;
  public escuelas: any = [];

  constructor(
    private _dialogRef: MatDialogRef<RegistroComiteComponent>,
    private _comiteService: ComitesService,
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _escuelaService: EscuelasService
  ) {
    this.comiteForm = this._fb.group({
      usuario: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required, Validators.pattern(PHONE_REGEX)]),
      escuela: new FormControl('',[Validators.required]),
      correo: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.setEscuelas();
  }
  
  setEscuelas() {
    this._escuelaService.getEscuelas().then((res: any) => {
      res.forEach((doc: any) => {
        let escuela = {id: doc.id, ...doc.data()};
        this.escuelas.push(escuela);
      });
    });
  }

  createcomite() {
    if (this.comiteForm.valid) {
      this._comiteService.createComite(this.comiteForm.value).then((res: any) => {
        this._snackBar.open('Registro exitoso', '', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        this._dialogRef.close(false);
      });
    } else {
      this._snackBar.open('Por favor llene todos los campos requeridos', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
    }
  }

  cancel() {
    this._dialogRef.close(false);
  }

  setComiteEscuela(escuela: any){
    let tmpEscuela = {
      id: escuela.id,
      nombre: escuela.nombre      
    }
    this.comiteForm.controls['escuela'].setValue(tmpEscuela);
  }

}
