import app from '../../src/app';

describe('\'article\' service', () => {
  it('registered the service', () => {
    const service = app.service('article');
    expect(service).toBeTruthy();
  });
});
