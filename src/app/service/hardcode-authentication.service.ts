import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }

  authenticate(userName, password){
    if (userName === 'javado' && password === '1234'){
      sessionStorage.setItem('authenticateUser', userName);
      console.log(userName);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(){
    const user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
  }
}
