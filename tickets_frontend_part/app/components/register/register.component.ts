import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../_services/index';
import { ToasterService } from "angular2-toaster";

@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html'
})

export class RegisterComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private ToasterService: ToasterService) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
        .subscribe(
          (data: any) => {
            this.ToasterService.pop('success', 'Success', data.message);
            this.router.navigate(['/login']);
          },
          (data: any) => {
            let messages = data.json().message;
            let errorMessage: string = '';
            Object.keys(messages).forEach((key)=>{
              errorMessage+=`${key} ${messages[key].join(', ')}.`;
            })
            this.ToasterService.pop('error', 'Error', errorMessage);
            this.loading = false;
          });
  }
}
