import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  private _user: User = this.getUser();
  private _accesToken = localStorage.getItem('accesToken');
  private _user$: BehaviorSubject<User> = new BehaviorSubject<User>(this._user)

  get user$(): Observable<User> {
    return this._user$.asObservable();
  }

  get user(): User {
    return this._user;
  }

  set user(user: User) {
    if (this._user$) {
      localStorage.setItem('user', JSON.stringify(user))
      this._user = user;
      this._user$.next(this._user)
    }
  }

  get accesToken(): string {
    return this._accesToken || null;
  }

  set accesToken(value: string) {
    localStorage.setItem('accesToken', value);
    this._accesToken = value;
  }

  logout(): void {
    this._user = null;
    localStorage.removeItem('user');
    this._user$.next(null);
    this.router.navigate(['/login'])
  }

  private getUser(): User {
    const user: string = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user)
    }
  }
}
