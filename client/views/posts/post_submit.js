Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      content: $(e.target).find('[name=content]').val(),
      sticky: $(e.target).find('[name=sticky]:checked').val(),
      imageUrl: $(e.target).find('[name=imageUrl]').val()

    }

    Meteor.call('post', post, function(error, id) {
      if (error)
        return alert(error.reason);

      Meteor.Router.to('postsList', post);
    });

  }
});