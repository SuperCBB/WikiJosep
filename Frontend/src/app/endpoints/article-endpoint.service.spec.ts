import { TestBed } from '@angular/core/testing';

import { ArticleEndpointService } from './article-endpoint.service';

describe('ArticleEndpointService', () => {
  let service: ArticleEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
