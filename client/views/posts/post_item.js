Template.postItem.helpers({
	domain: function() {
		var a = document.createElement('a');
		a.href = this.url;
		console.log(this.url);
		return a.hostname;
	}
});


//fires when the template has rendered
Template.postItem.rendered = function(){
    jQuery('article time').timeago();  //make it say 'xxxx minutes ago'
}