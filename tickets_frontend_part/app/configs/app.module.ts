import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula';


import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from '../components/app.component';
import { routing }        from './app.routing';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AlertComponent } from '../_directives/index';
import { AuthGuard, AdminAuthGuard } from '../_guards/index';
import { AlertService, AuthenticationService, UserService, ApiCaller, TicketService } from '../_services/index';
import { HomeComponent } from '../components/home/index';
import { LoginComponent } from '../components/login/index';
import { RegisterComponent } from '../components/register/index';
import { TicketsComponent, ShowTicketComponent, ClosedTicketsComponent, NewTicketComponent, AddAssignee} from '../components/tickets/index';
import { UsersComponent } from '../components/users/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DragulaModule,
    ToasterModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TicketsComponent,
    ShowTicketComponent,
    ClosedTicketsComponent,
    UsersComponent,
    NewTicketComponent,
    AddAssignee
  ],
  providers: [
    AuthGuard,
    AdminAuthGuard,
    AlertService,
    ApiCaller,
    ToasterService,
    { provide: UserService, useClass: UserService, deps: [ApiCaller] },
    { provide: TicketService, useClass: TicketService, deps: [ApiCaller] },
    { provide: AuthenticationService, useClass: AuthenticationService, deps: [ApiCaller] },
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
