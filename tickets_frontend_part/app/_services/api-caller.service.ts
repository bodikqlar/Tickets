import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { CONST } from '../_constants/index';

@Injectable()
export class ApiCaller {
  constructor(private http: Http) { }

  get(url: string) {
    return this.genericRequest('get', url);
  }

  post(url: string, data: any) {
    return this.genericRequest('post', url, data);
  }

  put(url: string, data: any) {
    return this.genericRequest('put', url, data);
  }

  delete(url: string) {
    return this.genericRequest('delete', url);
  }

  private genericRequest(method: string, url: string, body?: any): any{
    let args = [
      CONST.apiUrl(url),
      body,
      this.jwt()
    ].filter((par) => par);

    return this.http[method](...args).map(this.extractData);
  }

  private jwt() {
      // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
        return new RequestOptions({ headers: headers });
    }
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}
