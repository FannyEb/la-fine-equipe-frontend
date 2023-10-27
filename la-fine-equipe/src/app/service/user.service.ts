import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intervention } from '../model/intervention';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) {}

  signin(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}sign-in`, user);
  }

  signup(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}sign-up`, user);
  }
}
