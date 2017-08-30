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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_dragula_1 = require("ng2-dragula");
var testing_1 = require("@angular/http/testing");
var http_2 = require("@angular/http");
var app_component_1 = require("../components/app.component");
var app_routing_1 = require("./app.routing");
var angular2_toaster_1 = require("angular2-toaster");
var index_1 = require("../_directives/index");
var index_2 = require("../_guards/index");
var index_3 = require("../_services/index");
var index_4 = require("../components/home/index");
var index_5 = require("../components/login/index");
var index_6 = require("../components/register/index");
var index_7 = require("../components/tickets/index");
var index_8 = require("../components/users/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
            ng2_dragula_1.DragulaModule,
            angular2_toaster_1.ToasterModule
        ],
        declarations: [
            app_component_1.AppComponent,
            index_1.AlertComponent,
            index_4.HomeComponent,
            index_5.LoginComponent,
            index_6.RegisterComponent,
            index_7.TicketsComponent,
            index_7.ShowTicketComponent,
            index_7.ClosedTicketsComponent,
            index_8.UsersComponent,
            index_7.NewTicketComponent,
            index_7.AddAssignee
        ],
        providers: [
            index_2.AuthGuard,
            index_2.AdminAuthGuard,
            index_3.AlertService,
            index_3.ApiCaller,
            angular2_toaster_1.ToasterService,
            { provide: index_3.UserService, useClass: index_3.UserService, deps: [index_3.ApiCaller] },
            { provide: index_3.TicketService, useClass: index_3.TicketService, deps: [index_3.ApiCaller] },
            { provide: index_3.AuthenticationService, useClass: index_3.AuthenticationService, deps: [index_3.ApiCaller] },
            testing_1.MockBackend,
            http_2.BaseRequestOptions
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map