import { Component, Input, OnInit } from '@angular/core';

import { UserService, TicketService } from '../../../_services/index';
import { ToasterService} from 'angular2-toaster';

@Component({
  moduleId: module.id,
  selector: 'add-assignee',
  templateUrl: 'add-assignee.component.html'
})

export class AddAssignee implements OnInit{
  public currentUser;
  public assignee: Object;
  @Input() ticketId: number;
  constructor(
    private UserService: UserService,
    private TicketService: TicketService,
    private ToasterService: ToasterService
   ) { }

  ngOnInit() {
    this.currentUser = this.UserService.getCurrentUser();
    this.UserService.getAll('?only_support=true').subscribe((data) => {
      this.users = data;
    });
  }

  changeAssignee(userId: number){
    this.TicketService.update({
      id: this.ticketId,
      assigneeId: userId
    }).subscribe((data: any) => {
      this.ToasterService.pop('success', 'Success', data.message);
    })
  }
}
