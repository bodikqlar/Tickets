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
var index_1 = require("../../../_services/index");
var angular2_toaster_1 = require("angular2-toaster");
var AddAssignee = (function () {
    function AddAssignee(UserService, TicketService, ToasterService) {
        this.UserService = UserService;
        this.TicketService = TicketService;
        this.ToasterService = ToasterService;
    }
    AddAssignee.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.UserService.getCurrentUser();
        this.UserService.getAll('?only_support=true').subscribe(function (data) {
            _this.users = data;
        });
    };
    AddAssignee.prototype.changeAssignee = function (userId) {
        var _this = this;
        this.TicketService.update({
            id: this.ticketId,
            assigneeId: userId
        }).subscribe(function (data) {
            _this.ToasterService.pop('success', 'Success', data.message);
        });
    };
    return AddAssignee;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AddAssignee.prototype, "ticketId", void 0);
AddAssignee = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-assignee',
        templateUrl: 'add-assignee.component.html'
    }),
    __metadata("design:paramtypes", [index_1.UserService,
        index_1.TicketService,
        angular2_toaster_1.ToasterService])
], AddAssignee);
exports.AddAssignee = AddAssignee;
//# sourceMappingURL=add-assignee.component.js.map