import { Injectable } from '@angular/core';
import { Ticket } from '../_models/index';
import { ApiCaller } from '../_services/index';

@Injectable()
export class TicketService {
  constructor(private ApiCaller: ApiCaller) { }

  getAll() {
    return this.ApiCaller.get('/api/v1/tickets');
  }

  urgencies() {
    return this.ApiCaller.get('/api/v1/ticket_urgencies');
  }

  statuses() {
    return this.ApiCaller.get('/api/v1/ticket_statuses');
  }

  getClosed(){
    return this.ApiCaller.get('/api/v1/closed_tickets');
  }

  getById(id: number) {
    return this.ApiCaller.get(`/api/v1/tickets/${id}`);
  }

  create(ticket: Object) {
    return this.ApiCaller.post('/api/v1/tickets', { ticket: ticket });
  }

  update(ticket: any) {
    return this.ApiCaller.put(`/api/v1/tickets/${ticket.id}`, { ticket: ticket });
  }

  delete(id: number) {
    return this.ApiCaller.delete(`/api/v1/tickets/${id}`);
  }
}
