Template.navigation.events({
	'click .signout': function(event) {
		event.preventDefault();
		Meteor.logout();
		Router.go('home');
	}
});