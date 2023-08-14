import { Injectable } from '@angular/core';
import { RestService } from './http.service';
import { LoginRequest } from '../models/requests/auth';
import { LoginResponse } from '../models/responses/auth';
import { catchError, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly endpoints = {
    login: '/login',
  };
  constructor(private http: RestService) {}

  get isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  login(request: LoginRequest) {
    return this.http.post<LoginResponse>(this.endpoints.login, request).pipe(
      switchMap((res) => {
        this.saveToken(res.token);
        return of({ success: true });
      }),
      catchError((err) => {
        return of({ success: false, error: err });
      })
    );
  }

  private saveToken(token: string) {
    localStorage.setItem('token', token);
  }
}
