import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user.interface';
import * as buildUrl from 'build-url';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  private readonly ACCES_TOKEN_KEY = 'accesToken';
  private _accesToken = localStorage.getItem(this.ACCES_TOKEN_KEY);

  get accesToken(): string {
    return this._accesToken || null;
  }

  set accesToken(value: string) {
    localStorage.setItem(this.ACCES_TOKEN_KEY, value);
    this._accesToken = value;
  }

  removeAccesToken(): void {
    this.accesToken = null;
    localStorage.removeItem(this.ACCES_TOKEN_KEY);
  }

  isTokenExpired(): boolean {
    const jwtHelperService = new JwtHelperService();
    return jwtHelperService.isTokenExpired(this.accesToken);
  }

  login(
    user: Partial<User> & { strategy?: string }
  ): Observable<{ accessToken: string; strategy: string; user: User }> {
    user = { ...user, strategy: 'local' };
    const url = buildUrl(`${environment.backendUrl}authentication`);
    return this.http.post<{ accessToken: string; strategy: string; user: User }>(url, user);
  }
}
