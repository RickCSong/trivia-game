Meteor.subscribe('questions');

Template['questions'].helpers({
  questions: function() {
    return Questions.find({});
  }
});

Template['questions'].events({
});
