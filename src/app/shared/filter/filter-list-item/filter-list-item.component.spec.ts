import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListItemComponent } from './filter-list-item.component';

describe('FilterListItemComponent', () => {
  let component: FilterListItemComponent;
  let fixture: ComponentFixture<FilterListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
