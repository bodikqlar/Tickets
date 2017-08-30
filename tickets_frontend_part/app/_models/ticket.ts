export interface Ticket {
  id: number;
  title: string;
  description: string;
  estimate: string;
  closedAt: string;
  urgency: string;
  assigneeId: number;
  ownerId: number;
  ticketStatusId: number;
}
