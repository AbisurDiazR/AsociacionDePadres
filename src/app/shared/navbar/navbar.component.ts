import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public registers: string[] = [
    'Escuelas',
    'Comites',
    'Asesoria',
    'Talleres/Programas',
    'Solicitudes de apoyo',
  ];

  public donations: string[] = [
    'Paypal',
    'productos'
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
