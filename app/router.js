import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('room');
  this.route('bidding');
  this.route('player');
  this.resource('players', {path: '/players/:key'});
 

  this.route('game');
/*  this.resource('bidding', { path: 'biddings/:bidding_id' }, function() { 
  });*/
});

export default Router;
