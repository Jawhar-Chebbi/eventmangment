import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private jwtHelper: JwtHelperService;

  constructor() {
    this.jwtHelper = new JwtHelperService();
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    // Check if token is expired
    return !this.jwtHelper.isTokenExpired(token);
  }

  public setToken(token: string,userId : string): void {
    localStorage.setItem('currentUser',userId)
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public getCurrentUser(): string | null {
    return localStorage.getItem('currentUser');
  }

  public removeToken(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }
}
