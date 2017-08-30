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
var router_1 = require("@angular/router");
var index_1 = require("../../../_services/index");
var angular2_toaster_1 = require("angular2-toaster");
var NewTicketComponent = (function () {
    function NewTicketComponent(ticketService, ToasterService, router, route) {
        this.ticketService = ticketService;
        this.ToasterService = ToasterService;
        this.router = router;
        this.route = route;
        this.ticket = {};
    }
    NewTicketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ticketService.urgencies().subscribe(function (data) {
            _this.ticketUrgencies = data;
        });
        this.ticketService.statuses().subscribe(function (data) {
            _this.ticketStatuses = data;
        });
    };
    NewTicketComponent.prototype.createTicket = function () {
        var _this = this;
        this.ticketService.create(this.ticket).subscribe(function (data) {
            _this.ToasterService.pop('success', 'Success', data.message);
            _this.router.navigate(['/tickets']);
        }, function (data) {
            _this.ToasterService.pop('error', 'Error', data.message);
        });
    };
    return NewTicketComponent;
}());
NewTicketComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'new-ticket.component.html',
        styleUrls: ['../tickets/tickets.component.css']
    }),
    __metadata("design:paramtypes", [index_1.TicketService,
        angular2_toaster_1.ToasterService,
        router_1.Router,
        router_1.ActivatedRoute])
], NewTicketComponent);
exports.NewTicketComponent = NewTicketComponent;
//# sourceMappingURL=new-ticket.component.js.map