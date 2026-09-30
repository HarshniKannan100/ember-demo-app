import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostRoute extends Route {
  @service('posts') postsService;

  model(params) {
    console.log(params.post_id);
    let id = params.post_id;
    return this.postsService.allPosts[id - 1];
  }
}
