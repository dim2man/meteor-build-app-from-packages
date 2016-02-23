Meteor.publish('fruits', function() {
  // TODO apply filter and check user access rights
  return Bundle.Collection.Fruits.find();
});

Meteor.publish('sweets', function() {
  // TODO apply filter and check user access rights
  return Bundle.Collection.Sweets.find();
});
