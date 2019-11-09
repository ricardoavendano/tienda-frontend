
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
import { Compra } from './compra';
@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibrosListComponent implements OnInit {

  //@Input() cantidadComprada: number;
  Libros: any = [];
  constructor(public restApi: AuthenticationService) { }
  ngOnInit() {
    this.loadLibros();
  }
  // Get employees list
  loadLibros() {
    return this.restApi.getLibros().subscribe((data: {}) => {
      this.Libros = data;
    });
  }

  agregarCompra(idLibro:number, precio:number, cantidadComprada:number) {
    const compra = new Compra();
    compra.idLibro = idLibro;
    compra.estado = "1";
    compra.valorCompra = cantidadComprada * precio;
    compra.idUsuario = sessionStorage.getItem('idUsuario');
    compra.cantidadComprada = cantidadComprada;

    if (window.confirm('Esta seguro de hacer esta compra')){
      this.restApi.agregarCompraCarrito(compra).subscribe(data => {
        this.loadLibros()
      })
    }
  }  
}
