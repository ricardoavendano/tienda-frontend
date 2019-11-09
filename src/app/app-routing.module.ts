import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { LibrosListComponent } from "./libro/libro.component";
import { CarritoComponent } from "./carrito/carrito.component";
import { HistorialComponent } from "./historial/historial.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'libro-list', component: LibrosListComponent,canActivate:[AuthGaurdService] },
  { path: 'carrito-list', component: CarritoComponent,canActivate:[AuthGaurdService] },
  { path: 'carrito-hist-list', component: HistorialComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
