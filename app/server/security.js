Messages.allow({
  insert : function (userId, doc) {
  	doc.createdAt = new Date().getTime();
  	return true; 
  },
  update : function (userId, doc) {
  	doc.updatedAt = new Date().getTime();
  	return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});