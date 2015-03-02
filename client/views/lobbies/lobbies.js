Meteor.subscribe('lobbies');

Template['lobbies'].helpers({
  lobbies: function() {
    return Lobbies.find({});
  }
});

Template['lobbies'].events({
  "click #create-lobby": function() {
    Meteor.call('createLobby');
  }
});
