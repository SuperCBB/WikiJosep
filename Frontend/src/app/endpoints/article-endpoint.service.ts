import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as buildUrl from 'build-url';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { URL_ARTICLES } from '../constants/http-constants';
import { Article } from '../interface/article.interface';
import { PaginatedData } from '../interface/paginate-data';
@Injectable({
  providedIn: 'root',
})
export class ArticleEndpointService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<PaginatedData<Article>> {
    const url = buildUrl(`${environment.backendUrl}${URL_ARTICLES}`);
    return this.http.get<PaginatedData<Article>>(url);
  }
  getById(id: string): Observable<Article> {
    const url = buildUrl(`${environment.backendUrl}${URL_ARTICLES}${id}`);
    return this.http.get<Article>(url);
  }

  create(article: Partial<Article>): Observable<Article> {
    const url = buildUrl(`${environment.backendUrl}${URL_ARTICLES}`);
    return this.http.post<Article>(url, article);
  }

  update(article: Article): Observable<Article> {
    const url = buildUrl(`${environment.backendUrl}${URL_ARTICLES}${article._id}`);
    return this.http.put<Article>(url, article);
  }
}
