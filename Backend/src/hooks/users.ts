import { GeneralError } from '@feathersjs/errors';
import { HookContext } from '@feathersjs/feathers';

const assignUserId = (hook: HookContext<{ userId: string }>): HookContext<{ userId: string }> => {
  console.log('ASSIGN USER ID');
  const userId = hook.params.user ? hook.params.user._id : null;
  console.log('USER ID =>', userId);
  if (userId) {
    hook.data = { ...hook.data, userId };
    return hook;
  }
  throw new GeneralError('Not user ID found');
};

export { assignUserId };
