import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent implements OnInit {

    /*idUsuario = ''
    password = ''*/
    invalidLogin = false

    @Input() loginDetails = { idUsuario: '', password: ''}
  
    constructor(private router: Router,
      private loginservice: AuthenticationService, private httpClient: HttpClient) { }
  
    ngOnInit() {
    }
  
    checkLogin(dataEmployee) {

      this.loginservice.authenticate(this.loginDetails).subscribe((data: {}) => {
        this.loginservice.sessionStorageValue(this.loginDetails.idUsuario);
        this.router.navigate(['']);
        this.invalidLogin = false;
      })
      
    }

}
