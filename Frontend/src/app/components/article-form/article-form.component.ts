import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleEndpointService } from 'src/app/endpoints/article-endpoint.service';
import { Article } from 'src/app/interface/article.interface';
import * as _ from 'lodash';

enum ArticleFields {
  description = 'description',
  title = 'title',
}
@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.sass'],
})
export class ArticleFormComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private articlesEndpoint: ArticleEndpointService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.isNewModel = !this.id;
  }
  private readonly id: string;
  readonly articleFields = ArticleFields;
  readonly isNewModel: boolean;
  form: FormGroup;

  async ngOnInit(): Promise<void> {
    if (!this.isNewModel) {
      try {
        const article = await this.articlesEndpoint.getById(this.id).toPromise();
        this.form = this.getForm(article);
      } catch (error) {
        console.log(error);
        alert('HA OCURRIDO UN ERROR xd');
      }
    } else {
      this.form = this.getForm();
    }
  }

  getForm(article?: Article): FormGroup {
    return new FormGroup({
      [ArticleFields.title]: new FormControl(_.get(article, ArticleFields.title), {
        validators: Validators.required,
      }),
      [ArticleFields.description]: new FormControl(_.get(article, ArticleFields.description), {
        validators: Validators.required,
      }),
    });
  }

  saveData(): void {
    if (this.form.valid) {
      const article: Article = this.form.getRawValue();
      if (this.isNewModel) {
        this.articlesEndpoint.create(article).subscribe(
          (article) => {
            alert('ARTICULO CREADO');
            this.router.navigate(['/articles']);
          },
          (error) => {
            alert('ERROR');
          }
        );
      } else {
        this.articlesEndpoint.update(article).subscribe(
          (article) => {
            alert('ARTICULO CREADO');
            this.router.navigate(['/articles']);
          },
          (error) => {
            alert('ERROR');
          }
        );
      }
    }
  }
}
