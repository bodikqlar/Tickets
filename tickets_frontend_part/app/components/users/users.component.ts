import { Component, OnInit } from '@angular/core';

import { UserService, ApiCaller } from '../../_services/index';
import { ToasterService} from 'angular2-toaster';

@Component({
  moduleId: module.id,
  templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit {
  public users: Array<any>;
  public roles: Array<string>;
  public currentUser: any;
  constructor(
    private UserService: UserService,
    private ApiCaller: ApiCaller,
    private ToasterService: ToasterService
  ) {
  }

  ngOnInit() {
    this.currentUser = this.UserService.getCurrentUser();

    this.getUsers();
    this.getRoles();
  }

  deleteUser(id: number) {
    this.UserService.delete(id).subscribe((data: any) => {
      this.ToasterService.pop('success', 'Success', data.message);
      this.getUsers()
    });
  }

  changeRole(user_id: number, role: string){
    this.ApiCaller.put(`/api/v1/roles/${user_id}`, { role }).subscribe(
      (data: any) => {
        this.ToasterService.pop('success', 'Success', data.message);
      },
      (error: any) => {
        this.ToasterService.pop('error', 'Error', error.message);
    });
  }
  private getUsers() {
    this.UserService.getAll().subscribe((data: any) => {
      this.users = data;
    });
  }

  private getRoles(){
    this.ApiCaller.get(`/api/v1/roles`).subscribe((data: Array<string>) => {
      this.roles = data;
    })
  }
}
