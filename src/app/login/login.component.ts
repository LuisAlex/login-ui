import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BasicAuthenticationService} from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = 'javaDoTest';
password = '';
errorMessage = 'Invalid credentials';
invalidLogin = false;

  constructor(private router: Router,
              private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
            data => {
              console.log(),
                  this.router.navigate(['welcome', this.username]),
                  this.invalidLogin = false;
            },
            error => {
              console.log(error),
              this.invalidLogin = true;
            }
        );
  }
}
