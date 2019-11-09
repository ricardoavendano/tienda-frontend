import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  CarritoList: any = [];
  constructor(private router: Router, public restApi: AuthenticationService) { }
  ngOnInit() {
    this.loadCompra();
  }
  
  loadCompra() {
    return this.restApi.getCompra().subscribe((data: {}) => {
      this.CarritoList = data;
    });
  }

  finalizarCompra(){
    if (window.confirm('Esta seguro de finalizar la compra')){
      this.restApi.finalizarCompraConfirmar().subscribe(data => {
        //this.loadCompra();
        this.router.navigate(['libro-list']);
      })
    }
  }

  cancelarCompra(){
    if (window.confirm('Esta seguro de cancelar la compra')){
      this.restApi.cancelarCompraConfirmar().subscribe(data => {
        //this.loadCompra();
        this.router.navigate(['libro-list']);
      })
    }
  }

  cancelarItemCompra(idCompra:number){
    if (window.confirm('Esta seguro de eliminar el item de la compra')){
      this.restApi.cancelarItemCompraConfirmar(idCompra).subscribe(data => {
        //this.loadCompra();
        this.router.navigate(['libro-list']);
      })
    }
  }

}
