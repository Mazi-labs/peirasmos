import { AuthService } from './../../../core/auth/auth.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="auth-container">
      <h2>Login</h2>
      <form [formGroup]="loginForm" (ngSubmit)="handleSubmitLogin()">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            id="email"
            type="email"
            formControlName="email"
            aria-label="Email address"
            aria-required="true"
            tabindex="0"
          />
          @if (loginForm.get('email')?.invalid && (loginForm.get('email')?.dirty
          || loginForm.get('email')?.touched)) {
          <div class="error-message">
            @if (loginForm.get('email')?.errors?.['required']) { Email is
            required. } @if (loginForm.get('email')?.errors?.['email']) {
            Invalid email format. }
          </div>
          }
        </div>

        <div class="form-group">
          <label for="password">Password:</label>
          <input
            id="password"
            type="password"
            formControlName="password"
            aria-label="Password"
            aria-required="true"
            tabindex="0"
          />
          @if (loginForm.get('password')?.invalid &&
          (loginForm.get('password')?.dirty ||
          loginForm.get('password')?.touched)) {
          <div class="error-message">
            @if (loginForm.get('password')?.errors?.['required']) { Password is
            required. } @if (loginForm.get('password')?.errors?.['minlength']) {
            Password must be at least 6 characters. }
          </div>
          }
        </div>

        <button
          type="submit"
          [disabled]="loginForm.invalid"
          tabindex="0"
          aria-label="Login"
        >
          Login
        </button>
      </form>
      <p>Don't have an account? <a routerLink="/signup">Sign Up</a></p>
      <p><a routerLink="/forgot-password">Forgot Password?</a></p>
    </div>
  `,
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  ngInit(): void {
    if (this.authService.isLoggedIn()) {
    }
  }

  handleSubmitLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const { email, password } = this.loginForm.getRawValue();
    if (email && password) {
      this.authService.login(email, password).subscribe();
    }
  }
}
