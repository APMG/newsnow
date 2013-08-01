Posts = new Meteor.Collection('posts');


//TODO: Validators need to get more specific and hook into permissions/roles at some point
Posts.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  update: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }

});


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
        
    //try to figure out a username for the user
    var author = 'MPR News Staff'; //default to MPR news staff
    if (typeof user.username == 'string'){
        author = user.username;
    } else if( !_.isUndefined(user.profile) && typeof user.profile.name == 'string' ){
        author = user.profile.name;
    }
    

    // pick out the whitelisted keys
    var post = _.extend(_.pick(postAttributes, 'content', 'title', 'message'), {
      content: postAttributes.content,  //+ (this.isSimulation ? '(client)' : '(server)'),
      userId: user._id, 
      url: postAttributes.url,
      author: author,
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