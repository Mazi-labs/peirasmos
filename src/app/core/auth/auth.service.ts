import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private apiService = inject(ApiService);

  isLoggedIn = signal<boolean>(false);

  login(email: string, password: string): Observable<{ token: string }> {
    return this.apiService
      .post<{ token: string }>('/api/auth/login', {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          localStorage.setItem('access_token', response.token);
          this.isLoggedIn.set(true);
          this.router.navigate(['/dashboard']);
          return response;
        })
      );
  }
}
