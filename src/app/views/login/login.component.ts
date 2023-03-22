import { Component } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/services/alert.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public requestLogin: RequestLogin;

    constructor(
      private loginService: LoginService,
      private alertService: AlertService,
      private router: Router
      ) {}

    ngOnInit(): void {
      this.requestLogin = new RequestLogin();
    }

    public doLogin():void {
      this.loginService.doLogin(this.requestLogin).subscribe(
        data =>{
          this.router.navigate(['dashboard']),
          this.alertService.success('Login realizado com sucesso!') ;
      },
      httpError => {
        this.alertService.error(httpError.error.message);
      }
    );
  }
}
