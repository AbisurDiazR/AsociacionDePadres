import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComitesService } from 'src/app/service/comites.service';
import { RegistroComiteComponent } from 'src/app/shared/registro-comite/registro-comite.component';

@Component({
  selector: 'app-comite',
  templateUrl: './comite.component.html',
  styleUrls: ['./comite.component.css']
})
export class ComiteComponent implements OnInit {
  public comites: any = [];

  constructor(
    private _dialog: MatDialog,
    private _comiteServices: ComitesService
  ) { }

  ngOnInit(): void {
    this.getAllcomites();
  }
  
  public getAllcomites() {
    this.comites = [];
    this._comiteServices.getComites().then((res: any) => {
      res.forEach((doc: any) => {
        let comite = {id: doc.id, ...doc.data()};
        this.comites.push(comite);
      });
    });
  }

  public showFormComite(){
    this._dialog.open(RegistroComiteComponent,{
      width: 'fit-content',
      height: 'fit-content',
      panelClass: 'ap-dialog-style'
    }).afterClosed().subscribe(() => {
      this.getAllcomites();
    });
  }
}
