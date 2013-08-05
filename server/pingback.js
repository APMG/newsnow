

Meteor.Router.add('/pingback/', function() {
	var Pingback = Meteor.require('pingback');
	console.log('requested pingback');
	var ping = new Pingback('something', 'something2');
	console.log(ping);


  //return constructXMLForId(Posts.findOne(id));
});


// // NOTE: if you dont care about the semantics of fault codes
// // you can pass a zero into `next` for a generic fault
// app.use('/pingback', function(req, res, next) {
//   var ping = new Pingback(req, res);
//   ping.on('fault', function(code, msg) {
//     next(new Error(
//       'Received bad pingback from '
//       + this.source.href + '.'
//       + ' Fault Code: ' + code
//       + ' - Message: ' + msg
//     ));
//   });
//   ping.on('error', next);
//   ping.on('end', function(source, target, next) {
//     Posts.get(target.pathname, function(err, post) {
//       if (err) {
//         return next(Pingback.TARGET_DOES_NOT_EXIST);
//       }
//       if (post.pingbacks[source.href]) { // contrived example
//         return next(Pingback.ALREADY_REGISTERED);
//       }
//       if (post.pingbacksDisabled) {
//         return next(Pingback.TARGET_CANNOT_BE_USED);
//       }
//       // insert a new pingback
//       post.pingbacks.push({
//         from: source.href, // e.g. "http://domain.tld/hey_check_out_this_guys_post"
//         title: self.title, // e.g. "Joe's blog"
//         text: ping.excerpt // e.g. "hey, check this out: <a href="your_site">...</a>"
//       });
//       post.save();
//       next(); // respond with a success code
//     });
//   });
//   req.pipe(ping);
// });
