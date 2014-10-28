import DS from 'ember-data';

export default DS.Model.extend({
  	name: DS.attr('string'),
  	password: DS.attr('string'),
  	score: DS.attr('number'),
  	contracts: DS.attr('number'),
  	slam: DS.attr('number')
});
