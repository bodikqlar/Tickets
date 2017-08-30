"use strict";
var router_1 = require("@angular/router");
var index_1 = require("../components/login/index");
var index_2 = require("../components/register/index");
var index_3 = require("../components/tickets/index");
var index_4 = require("../components/users/index");
var index_5 = require("../_guards/index");
var appRoutes = [
    { path: '', component: index_3.TicketsComponent, canActivate: [index_5.AuthGuard] },
    { path: 'tickets', component: index_3.TicketsComponent, canActivate: [index_5.AuthGuard] },
    { path: 'closed_tickets', component: index_3.ClosedTicketsComponent, canActivate: [index_5.AuthGuard] },
    { path: 'tickets/new', component: index_3.NewTicketComponent, canActivate: [index_5.AuthGuard] },
    { path: 'tickets/:id', component: index_3.ShowTicketComponent, canActivate: [index_5.AuthGuard] },
    { path: 'users', component: index_4.UsersComponent, canActivate: [index_5.AdminAuthGuard] },
    { path: 'login', component: index_1.LoginComponent },
    { path: 'register', component: index_2.RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map