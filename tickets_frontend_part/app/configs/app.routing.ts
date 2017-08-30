import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/index';
import { LoginComponent } from '../components/login/index';
import { RegisterComponent } from '../components/register/index';
import { TicketsComponent, ShowTicketComponent, ClosedTicketsComponent, NewTicketComponent } from '../components/tickets/index';
import { UsersComponent } from '../components/users/index';
import { AuthGuard, AdminAuthGuard} from '../_guards/index';

const appRoutes: Routes = [
    { path: '', component: TicketsComponent, canActivate: [AuthGuard] },
    { path: 'tickets', component: TicketsComponent, canActivate: [AuthGuard] },
    { path: 'closed_tickets', component: ClosedTicketsComponent, canActivate: [AuthGuard] },
    { path: 'tickets/new', component: NewTicketComponent, canActivate: [AuthGuard] },
    { path: 'tickets/:id', component: ShowTicketComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersComponent, canActivate: [AdminAuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
