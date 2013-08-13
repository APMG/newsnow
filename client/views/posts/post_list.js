Template.postsList.helpers({
    // stickyPosts: function(){
    // 	return Posts.find({sticky: true}, {sort: {submitted: -1}});
    // },

    posts: function() {
        return Posts.find({}, {sort: {sticky: -1, submitted: -1}});
    }


});
