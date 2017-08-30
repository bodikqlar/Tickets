import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../_models/index';
import { ApiCaller } from '../_services/index';

@Injectable()
export class UserService {
  constructor(private ApiCaller: ApiCaller) { }

  getAll(query) {
    return this.ApiCaller.get(`/api/v1/users${query}`);
  }

  getById(id: number) {
    return this.ApiCaller.get(`/api/v1/users/${id}`);
  }

  create(user: User) {
    return this.ApiCaller.post('/api/v1/users', { user: user });
  }

  update(user: User) {
    return this.ApiCaller.put('/api/v1/users', { user: user });
  }

  delete(id: number) {
    return this.ApiCaller.delete(`/api/v1/users/${id}`);
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
