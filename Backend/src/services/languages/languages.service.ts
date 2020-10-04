// Initializes the `languages` service on path `/languages`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Languages } from './languages.class';
import hooks from './languages.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'languages': Languages & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/languages', new Languages(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('languages');

  service.hooks(hooks);
}
