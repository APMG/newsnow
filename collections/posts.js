Posts = new Meteor.Collection('posts');

Posts.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});



// Posts.allow({
//   update: ownsDocument,
//   remove: ownsDocument
// });

// Posts.deny({
//   update: function(userId, post, fieldNames) {
//     // may only edit the following two fields:
//     return (_.without(fieldNames, 'url', 'content').length > 0);
//   }
// });

Meteor.methods({
  post: function(postAttributes) {
    var user = Meteor.user(),
    postWithSameLink = Posts.findOne({url: postAttributes.url});

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new stories");

    // ensure the post has a content
    if (!postAttributes.content)
      throw new Meteor.Error(422, 'Please fill in a some post content');

    // ensure the post has a URL
    // if (!postAttributes.url)
    //   throw new Meteor.Error(422, 'Please make sure the post has a URL');

    // // check that there are no previous posts with the same link
    // if (postAttributes.url && postWithSameLink) {
    //   throw new Meteor.Error(302, 'This link has already been posted', postWithSameLink._id);
    // }

    // pick out the whitelisted keys
    var post = _.extend(_.pick(postAttributes, 'content', 'title', 'message'), {
      content: postAttributes.content,  //+ (this.isSimulation ? '(client)' : '(server)'),
      userId: user._id, 
      author: typeof user.username !== 'undefined' ? user.username : user.profile.name,
      submitted: new Date().getTime(),
      sticky: postAttributes.sticky == '1' ? true : false
    });

    console.log(post);

    // wait for 5 seconds
    // if (! this.isSimulation) {
    //   var Future = Npm.require('fibers/future');
    //   var future = new Future();
    //   Meteor.setTimeout(function() {
    //     future.ret();
    //   }, 5 * 1000);
    //   future.wait();
    // }

    var postId = Posts.insert(post);

    return postId;
  }
});