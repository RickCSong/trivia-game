Router.route('/', function () {
  this.render('home');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
}, {
  name: 'home'
});

Router.route('/lobbies', function() {
  this.render('lobbies');
});