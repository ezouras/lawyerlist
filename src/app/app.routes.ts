// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'Login Page' },
  { path: 'main', component: MainComponent, title: 'About Us' },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect empty path to home
  { path: '**', component: LoginComponent }, // Wildcard route for not found pages
];
