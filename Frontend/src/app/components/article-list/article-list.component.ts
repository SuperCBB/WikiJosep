import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ArticleEndpointService } from 'src/app/endpoints/article-endpoint.service';
import { Article } from 'src/app/interface/article.interface';
import { Option } from 'src/app/interface/option.interface';
import { SearchQuery } from 'src/app/types/search-query.type';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.sass']
})
export class ArticleListComponent implements OnInit {

  constructor(private articleEndpoint: ArticleEndpointService) { }
  readonly options: Option<SearchQuery<Article>>[] = [
    {
      label: 'Titulo',
      selected: false,
      value: { title: 'title' }
    }
    // {
    //   label: 'Autor',
    //   selected: false,
    //   value: { title: 'title' }
    // },
  ]

  total: number;
  article$: Observable<Article[]>;
  ngOnInit(): void {
    this.article$ = this.articleEndpoint.getAll().pipe(
      tap(result => {
        this.total = result.total;
      }),
      map(result => result.data));
  }

  searchBy(text: string): void {

  }

}
