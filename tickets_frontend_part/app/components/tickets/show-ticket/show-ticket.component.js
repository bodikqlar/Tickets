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
var ShowTicketComponent = (function () {
    function ShowTicketComponent(ticketService, ToasterService, router, route) {
        this.ticketService = ticketService;
        this.ToasterService = ToasterService;
        this.router = router;
        this.route = route;
    }
    ShowTicketComponent.prototype.ngOnInit = function () {
        this.getTicket();
    };
    ShowTicketComponent.prototype.destroyTicket = function (ticket) {
        var _this = this;
        this.ticketService.delete(ticket.id).subscribe(function (data) {
            _this.ToasterService.pop('success', 'Success', data.message);
            _this.router.navigate(['/tickets']);
        });
    };
    ShowTicketComponent.prototype.getTicket = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.ticketService.getById(id).subscribe(function (data) {
            _this.ticket = data;
        });
        ;
    };
    return ShowTicketComponent;
}());
ShowTicketComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'show-ticket.component.html',
        styleUrls: ['../tickets/tickets.component.css']
    }),
    __metadata("design:paramtypes", [index_1.TicketService,
        angular2_toaster_1.ToasterService,
        router_1.Router,
        router_1.ActivatedRoute])
], ShowTicketComponent);
exports.ShowTicketComponent = ShowTicketComponent;
//# sourceMappingURL=show-ticket.component.js.map