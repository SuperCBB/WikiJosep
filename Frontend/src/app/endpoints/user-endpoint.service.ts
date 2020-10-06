import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../interface/user.interface';
import * as buildUrl from 'build-url';
import { environment } from 'src/environments/environment';
import { URL_USERS } from '../constants/http-constants';
import { PaginatedData } from '../interface/paginate-data';

@Injectable({
  providedIn: 'root',
})
export class UserEndpointService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    const url = buildUrl(`${environment.backendUrl}${URL_USERS}`);
    return this.http.get<PaginatedData<User>>(url).pipe(map((result) => result.data));
  }

  getById(id = '5f789ace558721a03fa3eac2'): Observable<User> {
    const url = buildUrl(`${environment.backendUrl}${URL_USERS}${id}`);
    return this.http.get<User>(url);
  }

  create(user: User): Observable<User> {
    const url = buildUrl(`${environment.backendUrl}${URL_USERS}`);
    return this.http.post<User>(url, user);
  }

  login(
    user: Partial<User> & { strategy?: string }
  ): Observable<{ accessToken: string; strategy: string; user: User }> {
    user = { ...user, strategy: 'local' };
    const url = buildUrl(`${environment.backendUrl}authentication`);
    return this.http.post<{ accessToken: string; strategy: string; user: User }>(url, user);
  }
}
