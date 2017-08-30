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
var constants_1 = require("../../../_constants/constants");
var ClosedTicketsComponent = (function () {
    function ClosedTicketsComponent(ticketService, UserService, router, route) {
        this.ticketService = ticketService;
        this.UserService = UserService;
        this.router = router;
        this.route = route;
    }
    Object.defineProperty(ClosedTicketsComponent.prototype, "generateLink", {
        get: function () {
            var token = this.UserService.getCurrentUser().token;
            return constants_1.CONST.apiUrl("/api/v1/closed_tickets/export_pdf?access_token=Bearer+" + token);
        },
        enumerable: true,
        configurable: true
    });
    ClosedTicketsComponent.prototype.ngOnInit = function () {
        this.getTickets();
    };
    ClosedTicketsComponent.prototype.getTickets = function () {
        var _this = this;
        this.ticketService.getClosed().subscribe(function (data) {
            _this.tickets = data;
        });
    };
    return ClosedTicketsComponent;
}());
ClosedTicketsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'closed-tickets.component.html',
        styleUrls: ['../tickets/tickets.component.css']
    }),
    __metadata("design:paramtypes", [index_1.TicketService,
        index_1.UserService,
        router_1.Router,
        router_1.ActivatedRoute])
], ClosedTicketsComponent);
exports.ClosedTicketsComponent = ClosedTicketsComponent;
//# sourceMappingURL=closed-tickets.component.js.map