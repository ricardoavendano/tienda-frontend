import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  CarritoListHist: any = [];
  constructor(public restApi: AuthenticationService) { }
  ngOnInit() {
    this.loadCompraHistorica();
  }
  
  loadCompraHistorica() {
    return this.restApi.getCompraHistorica().subscribe((data: {}) => {
      this.CarritoListHist = data;
    });
  }

}

