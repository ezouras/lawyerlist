import { Component } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { JobsListComponent } from '../shared/jobs-list/jobs-list.component';

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, JobsListComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
