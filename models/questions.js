Questions = new Mongo.Collection('questions');

Questions.attachSchema(
  new SimpleSchema({
    category: {
      type: String
    },
    question: {
      type: String
    },
    answer: {
      type: String
    },
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Questions.allow({
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
