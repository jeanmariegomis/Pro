import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  private _loginUrl = 'http://localhost:8000/api/login_check'
  private headers = {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) };
  constructor(private http: HttpClient, private _router: Router) { }

  jwt: string;
  username: string;
  roles: Array<string>;

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user, this.headers)
  }

  loggedIn() {
return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  parseTWT() {
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles = objJWT.roles;
    console.log(this.roles);
  }
  isAdmin() {
    return this.roles.indexOf('ROLE_SUPERADMIN') >= 0;
  }
  isUser() {
    return this.roles.indexOf('ROLE_USER') >= 0;
  }
  isAuthenticated() {
    return this.roles;
  }
  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseTWT();

  }
  ROles() {
    return this.roles;
  }
  logOut() {
    localStorage.removeItem('token');
    this.initParams();
  }
  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }
}
