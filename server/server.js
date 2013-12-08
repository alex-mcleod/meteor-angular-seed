Meteor.startup(function () {
    if (Courses.find().count() === 0) {
        Courses.insert({
        	title: 'Foundations of Algorithms', 
        	description : 'Introductory algorithms course.'
        });
        Courses.insert({
        	title: 'Design of Algorithms', 
        	description : 'More indepth analysis of algorithms and data structures.'
        });
        Courses.insert({
        	title: 'Object Orientated Software Development', 
        	description : 'Introduction to OOP and software design.'
        });
    }
    if (Reviews.find().count() === 0) {
        //Reviews.insert({name: 'Party 1'});
    }
});