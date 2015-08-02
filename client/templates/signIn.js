Template.signIn.events({
	'submit form': function(event) {
		event.preventDefault();
	}
});

Template.signIn.onRendered(function() {
	$('form[name="userLogin"]').validate({
		rules: {
			userName: {
				required: true,
				minlength: 6
			},
			password: {
				required: true,
				minlength: 6
			}
		},
		messages: {
			userName: {
				required: 'User Name is required.',
				minlength: 'User name should have at least {0} characters.'
			},
			password: {
				required: 'Password is required.'
			}
		},
		submitHandler: function(event) {
			var userName = $('[name="userName"]').val();
			var password = $('[name="password"]').val();
			Meteor.loginWithPassword(userName, password, function(err) {
				console.log('B');
				if (err) {
					console.log(err.reason);
				} else {
					console.log('A');
					var currentRoute = Router.current().route.getName();
					if (currentRoute == "signin") {
						Router.go('home');
					}
				}
			});
		}
	});
});