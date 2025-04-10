import { Component, computed, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // or ReactiveFormsModule
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-login-form',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  username = signal('');
  password = signal('');
  isFormValid = computed(
    () => this.username().length && this.password().length >= 8
  );
  setUserName($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.username.set(input.value);
  }
  setPassword($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.password.set(input.value);
  }
}
