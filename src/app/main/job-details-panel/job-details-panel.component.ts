import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { JobsListService } from '../../shared/jobs-list/jobs-list.service';
import { Job } from '../../app.models';

@Component({
  selector: 'app-job-details-panel',
  imports: [],
  templateUrl: './job-details-panel.component.html',
  styleUrl: './job-details-panel.component.scss',
})
export class JobDetailsPanelComponent {
  jobsListService = inject(JobsListService);
  selectedJob = toSignal<Job | undefined>(
    this.jobsListService.getSelectedJob(),
    {
      initialValue: undefined,
      requireSync: true,
    }
  );
}
