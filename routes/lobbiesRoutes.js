Meteor.subscribe('lobbies');

Router.route('/lobbies', function () {
  this.render('lobbies');
});

Router.route('/lobbies/:_id', function() {
  this.render('lobby', {
    data: function() {
      return Lobbies.findOne({_id: this.params._id});
    }
  });
}, {
  name: 'lobbies.show'
});