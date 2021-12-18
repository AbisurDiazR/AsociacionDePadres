import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
