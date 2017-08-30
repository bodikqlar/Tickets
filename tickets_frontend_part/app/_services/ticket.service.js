"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var index_1 = require("../_services/index");
var TicketService = (function () {
    function TicketService(ApiCaller) {
        this.ApiCaller = ApiCaller;
    }
    TicketService.prototype.getAll = function () {
        return this.ApiCaller.get('/api/v1/tickets');
    };
    TicketService.prototype.urgencies = function () {
        return this.ApiCaller.get('/api/v1/ticket_urgencies');
    };
    TicketService.prototype.statuses = function () {
        return this.ApiCaller.get('/api/v1/ticket_statuses');
    };
    TicketService.prototype.getClosed = function () {
        return this.ApiCaller.get('/api/v1/closed_tickets');
    };
    TicketService.prototype.getById = function (id) {
        return this.ApiCaller.get("/api/v1/tickets/" + id);
    };
    TicketService.prototype.create = function (ticket) {
        return this.ApiCaller.post('/api/v1/tickets', { ticket: ticket });
    };
    TicketService.prototype.update = function (ticket) {
        return this.ApiCaller.put("/api/v1/tickets/" + ticket.id, { ticket: ticket });
    };
    TicketService.prototype.delete = function (id) {
        return this.ApiCaller.delete("/api/v1/tickets/" + id);
    };
    return TicketService;
}());
TicketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.ApiCaller])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map