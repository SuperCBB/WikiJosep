import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isTokenExpired = this.authenticationService.isTokenExpired();
    if (isTokenExpired) {
      this.userService.removeUser();
      this.authenticationService.removeAccesToken();
      this.router.navigate(['/login']);
    }
    return !isTokenExpired;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isTokenExpired = this.authenticationService.isTokenExpired();
    if (isTokenExpired) {
      this.userService.removeUser();
      this.authenticationService.removeAccesToken();
      this.router.navigate(['/login']);
    }
    return !isTokenExpired;
  }
}
