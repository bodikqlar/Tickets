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
var index_1 = require("../../_services/index");
var angular2_toaster_1 = require("angular2-toaster");
var RegisterComponent = (function () {
    function RegisterComponent(router, userService, ToasterService) {
        this.router = router;
        this.userService = userService;
        this.ToasterService = ToasterService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.ToasterService.pop('success', 'Success', data.message);
            _this.router.navigate(['/login']);
        }, function (data) {
            var messages = data.json().message;
            var errorMessage = '';
            Object.keys(messages).forEach(function (key) {
                errorMessage += key + " " + messages[key].join(', ') + ".";
            });
            _this.ToasterService.pop('error', 'Error', errorMessage);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'register.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.UserService,
        angular2_toaster_1.ToasterService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map