import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PostsService extends Service {
  @tracked allPosts = [];
}
