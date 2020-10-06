import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';
import { URL_USERS } from '../constants/http-constants';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (
      request.url.includes(environment.localePath) ||
      (request.url.includes(URL_USERS) && request.method === 'POST') ||
      request.url.includes('authentication')
    ) {
      return next.handle(request);
    } else {
      const accesToken = this.userService.accesToken;
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
          Authorization: accesToken,
        },
      });
      return next.handle(request);
    }
  }
}
