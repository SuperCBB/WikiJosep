// Initializes the `article` service on path `/article`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Article } from './article.class';
import createModel from '../../models/article.model';
import hooks from './article.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    articles: Article & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/articles', new Article(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('articles');

  service.hooks(hooks);
}
