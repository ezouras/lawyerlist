import { Component, Input } from '@angular/core';
import { TaskFilterItem } from '../filter.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-filter-list-item',
  imports: [CommonModule, MatIconModule],
  templateUrl: './filter-list-item.component.html',
  styleUrl: './filter-list-item.component.scss',
})
export class FilterListItemComponent {
  @Input() filterItem: TaskFilterItem | undefined;
  ngOnInit() {
    console.log(this.filterItem);
  }
}
