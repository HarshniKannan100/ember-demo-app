import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PostsAddPostController extends Controller {
  @tracked title = '';
  @tracked content = '';

  @service('posts') postsService;

  @action
  postFunction() {
    this.postsService.allPosts = [
      ...this.postsService.allPosts,
      {
        title: this.title,
        content: this.content,
        index: this.postsService.allPosts.length + 1,
      },
    ];
    this.title = '';
    this.content = '';
    console.log(this.postsService.allPosts);
  }
}
