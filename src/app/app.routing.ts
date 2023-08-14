import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { MainComponent } from './layouts/main/main.component';
import {  UserLoggedInGuard, UserLoggedOutGuard } from './guards/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'login',
    canActivate:[UserLoggedOutGuard],
    component: LoginComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: 'forget-password',
    component: ForgetComponent
  },
  {
    path: 'auth',
    pathMatch: 'prefix',
    component: MainComponent,
    canActivate: [UserLoggedInGuard],

  },
  {
    path: '**',
    component:NotFoundComponent
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }