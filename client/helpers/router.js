Meteor.Router.add({
  '/': 'postsList',
  '/login': 'login',
  '/submit': 'postSubmit',
  //we do not have a /posts page right now
  '/posts/:_id/edit': {
    to: 'postEdit', 
    and: function(id) { Session.set('currentPostId', id); }    
  },
});



//only allow access to submit page if user is logged in
Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else
      return 'accessDenied';
  }
});
Meteor.Router.filter('requireLogin', {only: 'postSubmit'});