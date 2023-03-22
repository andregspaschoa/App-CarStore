import { Injectable } from '@angular/core';
import { RequestLogin } from '../resources/models/RequestLogin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../resources/models/ResponseLogin';
import { tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
    ) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>(
      'http://localhost:8080/api/login',
       requestLogin
       ).pipe(
        tap(loginResponse => this.authService.loginResponse = loginResponse)
        );
  }
}
