Meteor.publish('Posts', function() {
  return Posts.find();
});