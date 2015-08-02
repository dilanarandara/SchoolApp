Template.signUp.events({
	'submit form': function(event) {
		event.preventDefault();
	}
});

Template.signUp.onRendered(function() {
	$('form[name="userRegister"]').validate({
		rules: {
			userName: {
				required: true,
				minlength: 6
			},
			email: {
				required: true
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
			email: {
				required: 'Email is required.'
			},
			password: {
				required: 'Password is required.'
			}
		},
		submitHandler: function(event) {
			var userName = $('[name="userName"]').val();
			var email = $('[name="email"]').val();
			var password = $('[name="password"]').val();
			var data = {
				username: userName,
				email: email,
				password: password
			}
			Accounts.createUser(data, function(err, res) {
				if (err) {
					console.log(err.reason);
				} else {
					Router.go('home');
				}
			});
		}
	});
});