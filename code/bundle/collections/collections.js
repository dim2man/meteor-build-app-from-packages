// Write your package code here!
Bundle.Collection = {
  Fruits: new Meteor.Collection('fruits'),
  Sweets: new Meteor.Collection('sweets')
};

// set access rules
for(let name in Bundle.Collection) {
  Bundle.Collection[name].allow({
    insert: function(userId, doc) {
      // TODO check user access rights
      return true;
    },
    update: function(userId, doc, fieldNames, modifier) {
      // TODO check user access rights
      return true;
    },
    remove: function(userId, doc) {
      // TODO check user access rights
      return true;
    }
  });
}
