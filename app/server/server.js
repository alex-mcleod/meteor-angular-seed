Meteor.startup(function () {
    if (Messages.find().count() === 0) {
        Messages.insert({
        	username: 'Alex', 
        	content: 'Hello world!'
        });
    }
});