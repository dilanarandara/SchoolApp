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

	this.route('studentDetails', {
		path: '/students/:_id',
		template: 'studentDetails',
		data : function(){
			var studentId = this.params._id;
			console.log(Students.findOne({_id : studentId}));
			return Students.findOne({_id : studentId});
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