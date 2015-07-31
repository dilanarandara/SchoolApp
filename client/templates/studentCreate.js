Template.studentCreate.events({
	'submit form': function(event) {
		event.preventDefault();
		var firstName = $('[name="firstName"]').val();
		var lastName = $('[name="lastName"]').val();
		var email = $('[name="email"]').val();
		var age = $('[name="age"]').val();
		var student = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			age: age
		};
		Students.insert(student);
		$('[name="firstName"]').val('');
		$('[name="lastName"]').val('');
		$('[name="email"]').val('');
		$('[name="age"]').val('');
	}
});

Template.studentCreate.onRendered(function() {
	$('.form-horizontal').validate({
		rules : {
			firstName : {
				required : true,
				minlength : 2
			},
			lastName : {
				required : true,
				minlength : 2
			},
			email : {
				required : true
			},
			age : {
				required : true,
				maxlength : 2
			}
		},
		messages: {
			firstName: {
				required: 'First Name is required.',
				minlength : 'First name should have at least {0} characters.'
			},
			lastName: {
				required: 'Last Name is required.',
				minlength : 'Last name should have at least {0} characters.'
			},
			email: {
				required: 'Email is required.'
			},
			age: {
				required: 'Age is required.'
			}
		}
	});
});