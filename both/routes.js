Router.configure({
	layoutTemplate: 'main',
	loadingTemplate: 'loading'
});

Router.map(function() {
	this.route('home', {
		path: '/',
		template: 'home'
	});

	this.route('students', {
		path: '/students',
		template: 'studentList',
		waitOn: function() {
			return Meteor.subscribe('Students');
		}
	});

	this.route('createStudent', {
		path: '/students/create',
		template: 'studentCreate',
		onBeforeAction: function() {
			var currentUser = Meteor.userId();
			if (currentUser) {
				this.next();
			} else {
				this.render('signIn');
			}
		}
	});

	this.route('studentDetails', {
		path: '/students/:_id',
		template: 'studentDetails',
		waitOn: function() {
			return Meteor.subscribe('Students');
		},
		data: function() {
			var studentId = this.params._id;
			return Students.findOne({
				_id: studentId
			});
		}
	});

	this.route('signin', {
		path: '/signin',
		template: 'signIn'
	});

	this.route('signup', {
		path: '/signup',
		template: 'signUp'
	});


});