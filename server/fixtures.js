if (Posts.find().count() === 0) {

	Posts.insert({
		author: 'Server Bot',
		url: 'http://mprnews.org/whatever/1',
		content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	});

	Posts.insert({
		author: 'Server Bot',
		url: 'http://mprnews.org/whatever/2',
		content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	});

	Posts.insert({
		author: 'Server Bot',
		url: 'http://mprnews.org/whatever/3',
		content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	});

}