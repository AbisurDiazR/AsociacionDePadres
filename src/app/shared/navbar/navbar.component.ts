import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public registers: any[] = [
    {name: 'Escuelas', route: 'registro/escuela'},
    {name: 'Comites', route: 'registro/comite'},
    {name: 'Asesoria', route: 'registro/asesoria'},
    {name: 'Talleres/Programas', route: 'registro/taller'},
    {name: 'Solicitudes de apoyo', route: 'registro/solicitud'}
  ];

  public donations: any[] = [
    {name: 'Paypal', route: 'donacion/paypal'},
    {name: 'Productos', route: 'donacion/productos'}
  ];

  public closeResult!: string;

  constructor(
    private _modalService: NgbModal
  ) { }

  open(content: any){
    this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Cerrado con: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Minimizado con: ${this.getDissmissReason(reason)}`
    });
  }
  
  public getDissmissReason(reason: any) {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

}
