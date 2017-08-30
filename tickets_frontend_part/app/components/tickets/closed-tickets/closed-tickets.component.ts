import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TicketService, UserService } from '../../../_services/index';
import { CONST } from '../../../_constants/constants';

@Component({
  moduleId: module.id,
  templateUrl: 'closed-tickets.component.html',
  styleUrls: ['../tickets/tickets.component.css']
})

export class ClosedTicketsComponent implements OnInit {
  public tickets: Array<any>;

  constructor(
    private ticketService: TicketService,
    private UserService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  get generateLink() {
    let token = this.UserService.getCurrentUser().token;
    return CONST.apiUrl(`/api/v1/closed_tickets/export_pdf?access_token=Bearer+${token}`);
  }

  ngOnInit() {
    this.getTickets();
  }
  private getTickets() {
    this.ticketService.getClosed().subscribe((data: any) => {
      this.tickets = data;
    });
  }
}
