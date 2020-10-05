import { Id, NullableId, Paginated, Params, ServiceMethods } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import path from 'path';
import fs from 'fs';

interface Data {}
interface ServiceOptions { }

export class Languages implements ServiceMethods<Data> {
  app: Application;
  options: ServiceOptions;

  constructor(options: ServiceOptions = {}, app: Application) {
    this.options = options;
    this.app = app;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async find(params?: Params): Promise<string[] | Paginated<Data>> {
    const languages = this.getLanguages();
    return languages;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get(id: Id, params?: Params): Promise<Data> {
    const languages = this.getLanguages();
    const language = params && params.headers ? params.headers.language : null;
    const languageFound = languages.find(lang => lang === language) || '';
    return languageFound;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(string: Partial<Data> | Partial<Data>[], params?: Params): Promise<Data> {
    throw new Error('Not allowed')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: NullableId, string: string, params?: Params): Promise<Data> {
    throw new Error('Not allowed')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async patch(id: NullableId, string: Partial<Data>, params?: Params): Promise<Data> {
    throw new Error('Not allowed')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remove(id: NullableId, params?: Params): Promise<Data> {
    throw new Error('Not allowed')
  }


  private getLanguages(): string[] {
    const localesDir = path.resolve(process.cwd()) + '/public/locales/';
    const locales = fs.readdirSync(localesDir);
    return locales.map(locale => locale.split('.')[0])
  }
}
