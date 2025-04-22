import { Component, inject } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { JobsListComponent } from '../shared/jobs-list/jobs-list.component';
import { JobsListService } from '../shared/jobs-list/jobs-list.service';
import { Job } from '../app.models';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, JobsListComponent, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  jobsListService = inject(JobsListService);
  jobs: Job[] = [];
  ngOnInit() {
    this.jobsListService.getJobs().subscribe((data) => {
      this.jobs = data;
    });
  }
}
