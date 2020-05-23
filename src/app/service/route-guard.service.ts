import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {HardcodeAuthenticationService} from './hardcode-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (this.hardcodeAuthenticationService.isUserLoggedIn()) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
  }

  constructor(private hardcodeAuthenticationService: HardcodeAuthenticationService,
              private router: Router) { }
}
