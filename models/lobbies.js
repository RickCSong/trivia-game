Lobbies = new Mongo.Collection('lobbies');

Lobbies.attachSchema(
  new SimpleSchema({
    createdAt: {
      type: Date,
      denyUpdate: true,
      autoValue: function() {
        if (this.isInsert) {
          return new Date();
        } else if (this.isUpsert) {
          return {$setOnInsert: new Date()};
        } else {
          this.unset();
        }
      }
    },
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Lobbies.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}

Meteor.methods({
  'createLobby': function() {
    Lobbies.insert({});
  }
});