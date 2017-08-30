import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TicketService } from '../../../_services/index';
import { ToasterService} from 'angular2-toaster';


@Component({
  moduleId: module.id,
  templateUrl: 'new-ticket.component.html',
  styleUrls: ['../tickets/tickets.component.css']
})

export class NewTicketComponent implements OnInit {
  public ticket: Object = {};
  public ticketUrgencies: Array<string>;
  public ticketStatuses: Array<string>;

  constructor(
    private ticketService: TicketService,
    private ToasterService: ToasterService,
    private router: Router,
    private route: ActivatedRoute
    ) {

  }

  ngOnInit() {
    this.ticketService.urgencies().subscribe((data: Array<string>) => {
      this.ticketUrgencies = data;
    });

    this.ticketService.statuses().subscribe((data: Array<any>) => {
      this.ticketStatuses = data;
    })
  }

  createTicket() {
    this.ticketService.create(this.ticket).subscribe((data: any) => {
      this.ToasterService.pop('success', 'Success', data.message);
      this.router.navigate(['/tickets']);
    }, (data: any) => {
      this.ToasterService.pop('error', 'Error', data.message);
    });
  }
}
