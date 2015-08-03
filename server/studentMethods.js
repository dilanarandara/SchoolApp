Meteor.methods({
	'InsertStudent': function(student) {
		var currentUser = Meteor.user();

		if (!currentUser) {
			throw new Meteor.Error(401, 'You do not have access to create a student.');
		}

		var isExistByEmail = Students.findOne({
			email: student.email
		});

		if (isExistByEmail) {
			throw new Meteor.Error(409, 'Student email already exists.');
		}

		var studentToInsert = {
			firstName: student.firstName,
			lastName: student.lastName,
			email: student.email,
			age: student.age
		};

		return Students.insert(studentToInsert);
	}
});