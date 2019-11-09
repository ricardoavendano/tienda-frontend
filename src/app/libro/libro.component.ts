
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibrosListComponent implements OnInit {
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
}
