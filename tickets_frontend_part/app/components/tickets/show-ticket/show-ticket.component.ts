import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User, Ticket } from '../../../_models/index';

import { TicketService } from '../../../_services/index';
import { ToasterService} from 'angular2-toaster';


@Component({
  moduleId: module.id,
  templateUrl: 'show-ticket.component.html',
  styleUrls: ['../tickets/tickets.component.css']
})

export class ShowTicketComponent implements OnInit {
  public ticket: Object;
  public cachedData: Array<any>;

  constructor(
    private ticketService: TicketService,
    private ToasterService: ToasterService,
    private router: Router,
    private route: ActivatedRoute
    ) {

  }

  ngOnInit() {
    this.getTicket();
  }

  destroyTicket(ticket: Ticket){
    this.ticketService.delete(ticket.id).subscribe((data: any) => {
      this.ToasterService.pop('success', 'Success', data.message);
      this.router.navigate(['/tickets']);
    })
  }
  private getTicket() {
    let id = this.route.snapshot.params['id'];
    this.ticketService.getById(id).subscribe((data: any) => {
      this.ticket = data;
    });;
  }
}
