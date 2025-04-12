export interface TaskFilterItem {
  icon?: string;
  color?: string;
  title: string;
  filterCount?: number;
}

export const TaskFilterItems: TaskFilterItem[] = [
  {
    icon: 'date_range',
    title: 'Calendar',
  },
  {
    icon: 'fast_forward',
    title: 'Upcoming',
    filterCount: 12,
  },
  {
    icon: 'assignment',
    title: 'Today',
    filterCount: 5,
  },
];

export const LocationFilterItems: TaskFilterItem[] = [
  {
    title: 'Lake',
    color: '#6e0d0e',
    filterCount: 3,
  },
  {
    title: 'McHenry',
    color: '#fba91a',
    filterCount: 2,
  },
  {
    title: 'Kane',
    color: '#4a9852',
  },
  {
    title: 'DuPage',
    color: '#d2a62c',
  },
  { title: 'Cook', color: '#2d5058' },
  {
    title: 'Will',
    color: '#bc2126',
  },
];
