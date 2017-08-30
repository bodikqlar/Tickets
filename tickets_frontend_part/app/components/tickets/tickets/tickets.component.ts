import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User, Ticket } from '../../../_models/index';
import { DragulaService } from 'ng2-dragula';
import { TicketService } from '../../../_services/index';
import { ToasterService} from 'angular2-toaster';


declare let DeepDiff: any;

@Component({
  moduleId: module.id,
  templateUrl: 'tickets.component.html',
  styleUrls: ['tickets.component.css']
})

export class TicketsComponent implements OnInit {
  public data: Array<any>;
  public cachedData: Array<any>;

  constructor(
    private dragulaService: DragulaService,
    private ticketService: TicketService,
    private toasterService: ToasterService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    dragulaService.dropModel.subscribe((value: any) => {
      this.updateTicket();
  });

  }

  ngOnInit() {
    this.getTickets();
  }

  private getTickets() {
    this.ticketService.getAll().subscribe((data: any) => {
      this.data = data;
      this.updateCachedData(data);
    });
  }

  private updateTicket(){
    let changes = this.formatTicketChanges();
    this.updateCachedData(this.data);
    this.ticketService.update(changes).subscribe(
      (data: any) => {
        this.toasterService.pop('success', 'Success', 'Status has been successfully updated.');
      },
      (error: any) => {
        this.toasterService.pop('error', 'Error', error.message);
    });
  }

  private updateCachedData(object: Object) {
    this.cachedData = JSON.parse(JSON.stringify(object));
  }

  private formatTicketChanges(){
    // Verifies to what column ticket was moved
    let changes = DeepDiff.diff(this.cachedData, this.data).find((i: any) => { if(i.item) return i.item.kind == 'N' });

    let statusIndex = changes.path[0];
    let ticketId = changes.item.rhs.id;

    return {
      id: ticketId,
      ticketStatusId: this.data[statusIndex].statusId
    };
  }
}
