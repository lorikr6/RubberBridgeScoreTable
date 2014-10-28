import Ember from 'ember';


export default Ember.Controller.extend({
	actions: {
		startPlayer: function() {
			var player = document.getElementById('player');
			var start = document.getElementById('startPlayer');
			var stop = document.getElementById('stopPlayer');			
			start.style.display="none";
			stop.style.display="block";
			player.play();
		},
		stopPlayer: function() {
			var player = document.getElementById('player');
			var start = document.getElementById('startPlayer');
			var stop = document.getElementById('stopPlayer');			
			stop.style.display="none";
			start.style.display="block";
			player.pause();
		}
	} 
});
