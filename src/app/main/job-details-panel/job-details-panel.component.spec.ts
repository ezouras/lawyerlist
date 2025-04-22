import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsPanelComponent } from './job-details-panel.component';

describe('JobDetailsPanelComponent', () => {
  let component: JobDetailsPanelComponent;
  let fixture: ComponentFixture<JobDetailsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
