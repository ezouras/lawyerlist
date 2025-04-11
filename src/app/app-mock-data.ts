import { first } from 'rxjs';
import { Job, CollarCounty, LawyerProfile } from './app.models';

export const FakeAmounts = [
  '$100.00',
  '$150.00',
  '$200.00',
  '$250.00',
  '$300.00',
];
export const Lawyers: Array<LawyerProfile> = [
  {
    first_name: 'John',
    last_name: 'Doe',
    phone: '(555) 123-4567',
    email: 'JohnDoe@gmail.com',
  },
  {
    first_name: 'Jill',
    last_name: 'Doe',
    phone: '(555) 132-4567',
    email: 'JillDoe@gmail.com',
  },
  {
    first_name: 'Samantha',
    last_name: 'Jones',
    phone: '(555) 123-4867',
    email: 'SamanthaJones@gmail.com',
  },
  {
    first_name: 'Leslie',
    last_name: 'Brown',
    phone: '(555) 123-9567',
    email: 'LeslieBrown@gmail.com',
  },
  {
    first_name: 'Paul',
    last_name: 'Dupont',
    phone: '(555) 123-4333',
    email: 'PaulDupont@gmail.com',
  },
  {
    first_name: 'Rachel',
    last_name: 'Blue',
    phone: '(555) 993-4567',
    email: 'RachelBlue@gmail.com',
  },
  {
    first_name: 'Luey',
    last_name: 'Pissios',
    phone: '(545) 103-4567',
    email: 'LueyPissios@gmail.com',
  },
  {
    first_name: 'Gerrald',
    last_name: 'Smith',
    phone: '(555) 123-4567',
    email: 'GerraldSmith@gmail.com',
  },
  {
    first_name: 'Zachariah',
    last_name: 'Johnson',
    phone: '(987) 784-4567',
    email: 'ZachariahJohnson@gmail.com',
  },
];
