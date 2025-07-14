import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = API_BASE_URL;

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');

    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    });
  }

  get<T>(path: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`, {
      headers: this.getHeaders(),
      params,
    });
  }

  post<T>(path: string, body: object): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${path}`, body, {
      headers: this.getHeaders(),
    });
  }

  put<T>(path: string, body: object): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${path}`, body, {
      headers: this.getHeaders(),
    });
  }

  delete<T>(path: string, params?: HttpParams): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${path}`, {
      headers: this.getHeaders(),
      params,
    });
  }
}
