import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		bidding: function() {
			var bidding = document.getElementById('bidding');
			var scoring = document.getElementById('scoring');		
			scoring.style.display="none";
			bidding.style.display="block";
		},
		scoring: function() {
			var bidding = document.getElementById('bidding');
			var scoring = document.getElementById('scoring');
			scoring.style.display="block";
			bidding.style.display="none";
		}
	} 	
});
