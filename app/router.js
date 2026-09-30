import EmberRouter from '@ember/routing/router';
import config from 'ember-app-3/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('posts', function () {
    this.route('post', { path: '/:post_id' });
  });
  this.route('add-post');
  this.route('demo');
});
