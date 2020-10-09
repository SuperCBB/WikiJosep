import { GeneralError } from '@feathersjs/errors';
import { HookContext } from '@feathersjs/feathers';

const filterByLanguage = (
  hook: HookContext<{ language: string }>
): HookContext<{ language: string }> => {
  const language = hook.params.headers ? hook.params.headers.language : null;
  if (language) {
    hook.params.query = { ...hook.params.query, language };
    return hook;
  }
  throw new GeneralError('Not language');
};

const assignLanguage = (
  hook: HookContext<{ language: string }>
): HookContext<{ language: string }> => {
  const language = hook.params.headers ? hook.params.headers.language : null;
  console.log('LANGUAGE =>', language);
  if (language) {
    hook.data = { ...hook.data, language };
    return hook;
  }
  throw new GeneralError('Not language');
};

export { filterByLanguage, assignLanguage };
