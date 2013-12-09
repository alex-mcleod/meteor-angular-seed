Courses.allow({
  insert : function (userId, doc) {
  	// TODO This doesn't appear to work.
  	doc.createdAt = new Date().getTime();
  	return true; 
  },
  update : function (userId, doc) {
  	// TODO This doesn't appear to work.
  	doc.updatedAt = new Date().getTime();
  	return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});