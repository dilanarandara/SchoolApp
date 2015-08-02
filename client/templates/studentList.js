Template.studentList.helpers({
	'students': function() {
		return Students.find({}, {
			sort: {
				firstName: 1
			},
			limit: 5
		});
	}
});