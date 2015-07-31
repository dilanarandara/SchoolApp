Template.studentCreate.events({
	'submit form': function(event) {
		event.preventDefault();
		var firstName = $('#firstName').val();
		var lastName = $('#lastName').val();
		var email = $('#email').val();
		var age = $('#age').val();
		var student = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			age: age
		};
		Students.insert(student);
		$('#firstName').val('');
		$('#lastName').val('');
		$('#email').val('');
		$('#age').val('');
	}
});