import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job, CountyCourts } from '../../app.models';
import { Lawyers, FakeAmounts } from '../../app-mock-data';

@Injectable({
  providedIn: 'root',
})
export class JobsListService {
  jobs = new BehaviorSubject<Job[]>([]);

  constructor() {
    this.setJobs();
  }

  setJobs() {
    let localJobs: Job[] = [];
    for (let i = 0; i < 20; i++) {
      localJobs.push(this.createJob(i.toString()));
      //return this.http.get(this.apiUrl);
    }
    this.jobs.next(localJobs);
  }

  getJobs(): Observable<Job[]> {
    return this.jobs.asObservable();
  }

  createJob(id: string): Job {
    let fakeAmount =
      FakeAmounts[Math.floor(Math.random() * FakeAmounts.length)];
    let fakeLawyer = Lawyers[Math.floor(Math.random() * Lawyers.length)];
    let fakeCourt =
      CountyCourts[Math.floor(Math.random() * CountyCourts.length)];
    let job: Job = {
      id,
      date: new Date(),
      time: new Date(),
      lawyer: fakeLawyer,
      court: fakeCourt,
      county: fakeCourt.county,
      job_description: `Job Description for ${id}`,
      amount: fakeAmount,
    };
    return job;
  }

  updateJob(jobId: string, updatedJobProperties: Partial<Job>): void {
    let currentJobs = this.jobs.getValue();
    let jobIndex = currentJobs.findIndex((job) => job.id === jobId);
    if (jobIndex !== -1) {
      let job = currentJobs[jobIndex];
      currentJobs[jobIndex] = { ...job, ...updatedJobProperties };
      this.jobs.next(currentJobs);
    }
  }

  getJob(jobId: string): Job | undefined {
    return this.jobs.getValue().filter((job) => job.id === jobId)[0];
  }
  addJob(job: any): void {
    let currentJobs = this.jobs.getValue();
    currentJobs.push(job);
    this.jobs.next(currentJobs);
  }
}
