import { Component, inject } from '@angular/core';
import { FilterComponent } from '../shared/filter/filter.component';
import { JobsListComponent } from '../shared/jobs-list/jobs-list.component';
import { Job } from '../app.models';
import { JobsListService } from '../shared/jobs-list/jobs-list.service';

@Component({
  selector: 'app-main',
  imports: [FilterComponent, JobsListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  user = 'Evie';
  jobsListService = inject(JobsListService);
  jobs: Job[] = [];
  ngOnInit() {
    this.jobsListService.getJobs().subscribe((data) => {
      this.jobs = data;
      console.log('EZ jobs in login are ', this.jobs);
    });
  }
}
