Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      //author: $(e.target).find('[name=author]').val(),
      content: $(e.target).find('[name=content]').val(),
      sticky: $(e.target).find('[name=sticky]:checked').val()
    }

    Meteor.call('post', post, function(error, id) {
      if (error)
        return alert(error.reason);

      Meteor.Router.to('postsList', post);
    });

  }
});