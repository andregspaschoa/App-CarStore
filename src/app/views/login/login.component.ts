import { Component } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/services/alert.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public requestLogin: RequestLogin;

    constructor(private loginService: LoginService, private alertService: AlertService) {}

    ngOnInit(): void {
      this.requestLogin = new RequestLogin();
    }

    public doLogin():void {
      this.loginService.doLogin(this.requestLogin).subscribe(
        data =>{
         this.alertService.info('Funcionalidade não implementada')
      },
      httpError => {
        this.alertService.error(httpError.error.message);
      }
    );
  }
}
