import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const AppRouterModule = RouterModule.forRoot(appRoutes);