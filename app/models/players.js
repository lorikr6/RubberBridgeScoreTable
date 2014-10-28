import DS from 'ember-data';

export default DS.Model.extend({
	key: DS.attr('string'),
	collection: DS.attr('string'),
	ref: DS.attr('string') 
});
