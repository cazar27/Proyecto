import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserData, UserUpdate, apiResponse } from '../../core/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getUsers(page?: number, limit?: number): Observable<apiResponse<UserData>> {
    let url = `${this._baseUrl}/users`;
    if(page&&limit) {
      url += `/?page=${page}&limit=${limit}`;
    }
    return this.http.get(url);
  }

  getUserById(userId: string): Observable<apiResponse<UserData>> {
    const url = `${this._baseUrl}/user/${userId}`;
    return this.http.get(url);
  }

  updateUser(userId: string, updatedUser: UserUpdate): Observable<apiResponse<UserData>> {
    const url = `${this._baseUrl}/user/${userId}`;
    return this.http.put(url, updatedUser);
  }

  deleteUser(userId: string): Observable<apiResponse<UserData>> {
    const url = `${this._baseUrl}/user/${userId}`;
    return this.http.delete(url);
  }
}
