import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChangePasswordRequest, LoginCredentials, UserRegistration } from '../../core/interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _baseUrl: string = environment.baseUrl;
  private _http: HttpClient = inject(HttpClient);
  private _id: string = '0';

  private usernameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  username$: Observable<string | null> = this.usernameSubject.asObservable();

  register(user: UserRegistration): Observable<any> {
    const url = `${this._baseUrl}/user`;
    return this._http.post(url, user);
  }

  login(credentials: LoginCredentials): Observable<any> {
    const url = `${this._baseUrl}/login`;
    return this._http.post(url, credentials);
  }

  logout(): void {
    sessionStorage.clear();
  }

  changePassword(userId: string, passwords: ChangePasswordRequest): Observable<any> {
    const url = `${this._baseUrl}/user/change_password/${userId}`;
    return this._http.put(url, passwords);
  }

  setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  getToken(): string | null {
    const token = sessionStorage.getItem('token');
    return token;
  }

  setIdUser(id: string): void {
    this._id = id;
  }

  getIdUser(): string {
    return this._id;
  }

  setUsername(username: string): void {
    this.usernameSubject.next(username);
  }

}
