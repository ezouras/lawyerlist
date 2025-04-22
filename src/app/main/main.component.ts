import { Component, inject } from '@angular/core';
import { FilterComponent } from '../shared/filter/filter.component';
import { JobsListComponent } from '../shared/jobs-list/jobs-list.component';
import { Job } from '../app.models';
import { JobsListService } from '../shared/jobs-list/jobs-list.service';
import { LoginService } from '../login/login.service';
import { JobDetailsPanelComponent } from './job-details-panel/job-details-panel.component';

@Component({
  selector: 'app-main',
  imports: [FilterComponent, JobsListComponent, JobDetailsPanelComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  user = '';
  jobsListService = inject(JobsListService);
  loginService = inject(LoginService);
  jobs: Job[] = [];
  ngOnInit() {
    this.jobsListService.getJobs().subscribe((data) => {
      this.jobs = data;
      console.log('EZ jobs in login are ', this.jobs);
    });
    this.user = this.loginService.getUserFirstName();
  }
}
