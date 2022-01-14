import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EscuelasService } from 'src/app/service/escuelas.service';
import { PHONE_REGEX } from '../data';

@Component({
  selector: 'app-registro-escuela',
  templateUrl: './registro-escuela.component.html',
  styleUrls: ['./registro-escuela.component.css']
})
export class RegistroEscuelaComponent implements OnInit {
  public escuelaForm!: any;

  constructor(
    private _dialogRef: MatDialogRef<RegistroEscuelaComponent>,
    private _escuelaService: EscuelasService,
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.escuelaForm = this._fb.group({
      usuario: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required, Validators.pattern(PHONE_REGEX)]),
      correo: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  createEscuela() {
    if (this.escuelaForm.valid) {
      this._escuelaService.createEscuela(this.escuelaForm.value).then((res: any) => {
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

}
