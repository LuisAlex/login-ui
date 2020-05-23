import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodeAuthenticationService} from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = 'javado';
password = '';
errorMessage = 'Invalid credentials';
invalidLogin = false;
  constructor(private router: Router,
              private hardcodeAuthenticationService: HardcodeAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.hardcodeAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
