import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Job } from '../../../app.models';

@Component({
  selector: 'app-job-panel',
  imports: [DatePipe, CommonModule],
  templateUrl: './job-panel.component.html',
  styleUrl: './job-panel.component.scss',
})
export class JobPanelComponent {
  @Input() job: Job = {} as Job;
}
