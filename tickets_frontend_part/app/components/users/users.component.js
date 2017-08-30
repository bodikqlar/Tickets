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
var index_1 = require("../../_services/index");
var angular2_toaster_1 = require("angular2-toaster");
var UsersComponent = (function () {
    function UsersComponent(UserService, ApiCaller, ToasterService) {
        this.UserService = UserService;
        this.ApiCaller = ApiCaller;
        this.ToasterService = ToasterService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.currentUser = this.UserService.getCurrentUser();
        this.getUsers();
        this.getRoles();
    };
    UsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.UserService.delete(id).subscribe(function (data) {
            _this.ToasterService.pop('success', 'Success', data.message);
            _this.getUsers();
        });
    };
    UsersComponent.prototype.changeRole = function (user_id, role) {
        var _this = this;
        this.ApiCaller.put("/api/v1/roles/" + user_id, { role: role }).subscribe(function (data) {
            _this.ToasterService.pop('success', 'Success', data.message);
        }, function (error) {
            _this.ToasterService.pop('error', 'Error', error.message);
        });
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.UserService.getAll().subscribe(function (data) {
            _this.users = data;
        });
    };
    UsersComponent.prototype.getRoles = function () {
        var _this = this;
        this.ApiCaller.get("/api/v1/roles").subscribe(function (data) {
            _this.roles = data;
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'users.component.html'
    }),
    __metadata("design:paramtypes", [index_1.UserService,
        index_1.ApiCaller,
        angular2_toaster_1.ToasterService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map