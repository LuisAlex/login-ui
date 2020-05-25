import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Constants} from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  isUserLoggedIn(){
    const user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('token');
  }

  executeJWTAuthenticationService(username: string, password: string){
    return this.httpClient.post<any>(Constants.DEV_URL + 'authenticate', {username, password}).pipe(
        map(
            data => {
              sessionStorage.setItem('authenticateUser', username);
              sessionStorage.setItem('token', `Bearer ${data.token}`);
              return true;
            }
        )
    );
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticateUser');
  }

  getAuthenticatedToken(){
    if (this.getAuthenticatedUser()){
      return sessionStorage.getItem('token');
    }
  }
}
