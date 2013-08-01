Template.postEdit.helpers({
  post: function() {
    return Posts.findOne(Session.get('currentPostId'));
  }
});


Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = Session.get('currentPostId');

    var postProperties = {
        url: $(e.target).find('[name=url]').val(),
      	content: $(e.target).find('[name=content]').val(),
      	sticky: $(e.target).find('[name=sticky]:checked').val(),
        imageUrl: $(e.target).find('[name=imageUrl]').val()
    }

    Posts.update(currentPostId, {$set: postProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
    	Meteor.Router.to('postsList', currentPostId);
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = Session.get('currentPostId');
      Posts.remove(currentPostId);
      Meteor.Router.to('postsList');
    }
  }
});