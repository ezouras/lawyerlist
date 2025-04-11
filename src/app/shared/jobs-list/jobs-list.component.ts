import { Component, Input, signal } from '@angular/core';
import { CollarCounty, Job } from '../../app.models';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CountyColors } from '../../app.models';
import { JobPanelComponent } from './job-panel/job-panel.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-jobs-list',
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    JobPanelComponent,
    CommonModule,
  ],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss',
})
export class JobsListComponent {
  @Input() jobs: Job[] = [];
  jobsByCounty: Record<string, Job[]> = {};
  countyColors = { ...CountyColors };
  counties: CollarCounty[] = [];
  ngOnInit() {
    this.setJobsByCounty();
    this.setCounties();
  }

  setJobsByCounty() {
    this.jobsByCounty = this.jobs.reduce((acc, job) => {
      const county = job.county;
      if (!acc[county]) {
        acc[county] = [];
      }
      acc[county].push(job);
      return acc;
    }, {} as Record<string, Job[]>);
  }

  setCounties() {
    this.counties = Object.keys(this.jobsByCounty) as CollarCounty[];
  }
  step = signal(0);

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update((i) => i + 1);
  }

  prevStep() {
    this.step.update((i) => i - 1);
  }
}
