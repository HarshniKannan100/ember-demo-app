import Route from '@ember/routing/route';

export default class PostsRoute extends Route {
  model() {
    return {
      key: 'model val 1',
    };
  }
}
