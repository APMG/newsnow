if (Meteor.isClient){

	Handlebars.registerHelper('isoDate', function(context) {
		try{
		    var date = new Date(context);
		    return date.toISOString();
		} catch(e){
			return '';
		}

	});

	

}