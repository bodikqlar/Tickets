import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { ApiCaller } from '../_services/index';

@Injectable()
export class AuthenticationService {
  constructor(private ApiCaller: ApiCaller) { }

  login(email: string, password: string) {
    return this.ApiCaller.post('/api/v1/authenticate', { email: email, password: password })
      .map((response: any) => {
          // login successful if there's a jwt token in the response
        if (response.user && response.authToken) {
          let user = response.user;
          user.token = response.authToken;
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
      // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
