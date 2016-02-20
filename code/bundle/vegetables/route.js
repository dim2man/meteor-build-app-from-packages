Router.route('/vegetables', {
  controller: Bundle.RouteController.extend({
    title: 'Полезные Овощи',
    subscriptions: function() {
      return Meteor.subscribe('vegetables');
    },
    context: function() {
      return Bundle.Collection.Vegetables.find();
    }
  })
});
