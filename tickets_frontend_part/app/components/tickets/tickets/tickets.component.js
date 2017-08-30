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
var ng2_dragula_1 = require("ng2-dragula");
var index_1 = require("../../../_services/index");
var angular2_toaster_1 = require("angular2-toaster");
var TicketsComponent = (function () {
    function TicketsComponent(dragulaService, ticketService, toasterService, router, route) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.ticketService = ticketService;
        this.toasterService = toasterService;
        this.router = router;
        this.route = route;
        dragulaService.dropModel.subscribe(function (value) {
            _this.updateTicket();
        });
    }
    TicketsComponent.prototype.ngOnInit = function () {
        this.getTickets();
    };
    TicketsComponent.prototype.getTickets = function () {
        var _this = this;
        this.ticketService.getAll().subscribe(function (data) {
            _this.data = data;
            _this.updateCachedData(data);
        });
    };
    TicketsComponent.prototype.updateTicket = function () {
        var _this = this;
        var changes = this.formatTicketChanges();
        this.updateCachedData(this.data);
        this.ticketService.update(changes).subscribe(function (data) {
            _this.toasterService.pop('success', 'Success', 'Status has been successfully updated.');
        }, function (error) {
            _this.toasterService.pop('error', 'Error', error.message);
        });
    };
    TicketsComponent.prototype.updateCachedData = function (object) {
        this.cachedData = JSON.parse(JSON.stringify(object));
    };
    TicketsComponent.prototype.formatTicketChanges = function () {
        // Verifies to what column ticket was moved
        var changes = DeepDiff.diff(this.cachedData, this.data).find(function (i) { if (i.item)
            return i.item.kind == 'N'; });
        var statusIndex = changes.path[0];
        var ticketId = changes.item.rhs.id;
        return {
            id: ticketId,
            ticketStatusId: this.data[statusIndex].statusId
        };
    };
    return TicketsComponent;
}());
TicketsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'tickets.component.html',
        styleUrls: ['tickets.component.css']
    }),
    __metadata("design:paramtypes", [ng2_dragula_1.DragulaService,
        index_1.TicketService,
        angular2_toaster_1.ToasterService,
        router_1.Router,
        router_1.ActivatedRoute])
], TicketsComponent);
exports.TicketsComponent = TicketsComponent;
//# sourceMappingURL=tickets.component.js.map