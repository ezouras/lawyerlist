import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './login.models';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private user: User = { firstName: '', lastName: '' };

  constructor() {}

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User {
    return { ...this.user };
  }
  getUserFirstName(): string {
    return this.user.firstName;
  }
}
