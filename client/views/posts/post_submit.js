Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      author: $(e.target).find('[name=author]').val(),
      content: $(e.target).find('[name=content]').val()
    }

    post._id = Posts.insert(post);
    Meteor.Router.to('postPage', post);
  }
});