import { Component } from '@angular/core';
import { FilterListItemComponent } from './filter-list-item/filter-list-item.component';
import {
  LocationFilterItems,
  TaskFilterItems,
  TaskFilterItem,
} from './filter.model';

@Component({
  selector: 'app-filter',
  imports: [FilterListItemComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  taskFilterItems: TaskFilterItem[] = [...TaskFilterItems];
  locationFilterItems: TaskFilterItem[] = [...LocationFilterItems];
  applyTaskFilter(event: any) {
    console.log('Filter applied');
  }
  applyLocationFilter(event: any) {
    console.log('Location filter applied');
  }
}
