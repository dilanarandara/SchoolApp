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
		template: 'studentCreate'
	});
});