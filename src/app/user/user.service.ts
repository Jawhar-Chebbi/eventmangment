import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from './models/user.model';


@Injectable(
   {providedIn: 'root'}
)
export class UserService {

  endpointService: string;

  constructor(private http: HttpClient) {
    this.endpointService = environment.apiBaseUrl + '/user';
  }


  authenticate(user: User): Observable<any> {
   return  this.http.post<any>(`${this.endpointService}/authenticate`, user)
  }

  signUp(user: User): Observable<User> {
    return this.http.post<any>(`${this.endpointService}/signup`, user);
  }

  update(id:number , user: User): Observable<User> {
    return this.http.put<User>(`${this.endpointService}/${id}`,user);
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpointService}`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.endpointService}/${id}`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.endpointService}/${id}`);
  }

  topUsers(): Observable<any> {
    return this.http.get<any>(`${this.endpointService}/topusers`);
  }

  worstUsers(): Observable<any> {
    return this.http.get<any>(`${this.endpointService}/worstUsers`);
  }

  newUsers(month: number): Observable<any> {
    return this.http.get<any>(`${this.endpointService}/newUsers/${month}`);
  }

  percentage(): Observable<any> {
    return this.http.get<any>(`${this.endpointService}/percentage`);
  }


  getCreationDateDistribution(): Observable<any> {
    return this.http.get<any>(`${this.endpointService}/creationdatedistribution`);
  }


}

