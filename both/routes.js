Router.configure({
	layoutTemplate: 'main'
});

Router.map(function() {
	this.route('home', {
		path: '/',
		template: 'home'
	});

	this.route('students', {
		path: '/students',
		template: 'studentList'
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

	this.route('signin', {
		path: '/signin',
		template: 'signIn'
	});

	this.route('signup', {
		path: '/signup',
		template: 'signUp'
	});


});