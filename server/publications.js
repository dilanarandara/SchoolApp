Meteor.publish('Students', function() {
	return Students.find();
});