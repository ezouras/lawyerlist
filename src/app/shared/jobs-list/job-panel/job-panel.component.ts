import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Job } from '../../../app.models';
import { JobsListService } from '../jobs-list.service';

@Component({
  selector: 'app-job-panel',
  imports: [DatePipe, CommonModule],
  templateUrl: './job-panel.component.html',
  styleUrl: './job-panel.component.scss',
})
export class JobPanelComponent {
  jobsListService = inject(JobsListService);
  isSelected = false;
  @Input() job: Job = {} as Job;
  setSelectedJob() {
    this.jobsListService.setSelectedJob(this.job.id);
    this.isSelected = true;
  }
  ngOnInit() {
    this.jobsListService.getSelectedJob().subscribe((job: Job | undefined) => {
      if (job?.id === this.job.id) {
        console.log('The selected job is ', job.id);
        this.isSelected = true;
      } else {
        this.isSelected = false;
      }
    });
  }
}
