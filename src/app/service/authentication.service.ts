import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user/user.model';
import { Observable, throwError } from 'rxjs';
import { Libro } from '../libro/libro';
import { retry, catchError } from 'rxjs/operators';
import { Compra } from '../libro/compra';

@Injectable({
    providedIn: 'root'
  })
  export class AuthenticationService {

    apiURL = 'http://localhost:8081/tienda';
    constructor(private http: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }  

    authenticate(user): Observable<User> {
        return this.http.post<User>(this.apiURL + '/login', JSON.stringify(user), this.httpOptions)
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
        
      }

      getLibros(): Observable<Libro> {
        return this.http.get<Libro>(this.apiURL + '/listar/libro')
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }

      getCompra(): Observable<Compra> {
        return this.http.get<Compra>(this.apiURL + '/listar/compra-pendiente/usuario/'+sessionStorage.getItem('idUsuario'))
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }

      getCompraHistorica(): Observable<Compra> {
        return this.http.get<Compra>(this.apiURL + '/listar/compra-finalizada/usuario/'+sessionStorage.getItem('idUsuario'))
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }

      agregarCompraCarrito(compra): Observable<String> {
        return this.http.post<String>(this.apiURL + '/compra/agregar-elemento', JSON.stringify(compra), this.httpOptions)
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
        
      }

      finalizarCompraConfirmar(): Observable<String> {
        return this.http.get<String>(this.apiURL + '/finalizar/compra/'+sessionStorage.getItem('idUsuario'))
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }

      cancelarCompraConfirmar(): Observable<String> {
        return this.http.get<String>(this.apiURL + '/cancelar/compra/'+sessionStorage.getItem('idUsuario')+"/-1")
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }

      cancelarItemCompraConfirmar(idCompra): Observable<String> {
        return this.http.get<String>(this.apiURL + '/cancelar/compra/'+sessionStorage.getItem('idUsuario')+"/"+idCompra)
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }
      
      handleError(error) {
        let errorMessage = '';
          if(error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          window.alert(errorMessage);
          return throwError(errorMessage);
     }
  
    sessionStorageValue(idUsuario:string) {
      sessionStorage.setItem("idUsuario", idUsuario);
    }

    isUserLoggedIn() {
      let user = sessionStorage.getItem('idUsuario')
      console.log(!(user === null))
      return !(user === null)
    }
  
    logOut() {
      sessionStorage.removeItem('idUsuario')
    }
}