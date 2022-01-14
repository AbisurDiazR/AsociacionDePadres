import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EscuelasService } from 'src/app/service/escuelas.service';
import { RegistroEscuelaComponent } from 'src/app/shared/registro-escuela/registro-escuela.component';

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.component.html',
  styleUrls: ['./escuela.component.css']
})
export class EscuelaComponent implements OnInit {
  public escuelas: any = [];

  constructor(
    private _dialog: MatDialog,
    private _escuelaServices: EscuelasService
  ) { }

  ngOnInit(): void {
    this.getAllEscuelas();
  }
  
  public getAllEscuelas() {
    this.escuelas = [];
    this._escuelaServices.getEscuelas().then((res: any) => {
      res.forEach((doc: any) => {
        let escuela = {id: doc.id, ...doc.data()};
        this.escuelas.push(escuela);
      });
    });
  }

  public showFormSchool(){
    this._dialog.open(RegistroEscuelaComponent,{
      width: 'fit-content',
      height: 'fit-content',
      panelClass: 'ap-dialog-style'
    }).afterClosed().subscribe(() => {
      this.getAllEscuelas();
    });
  }

}
