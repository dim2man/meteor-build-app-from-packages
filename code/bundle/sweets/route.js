Router.route('/sweets', {
  controller: Bundle.RouteController.extend({
    title: 'Вкусные Сладости',
    subscriptions: function() {
      return Meteor.subscribe('sweets');
    },
    context: function() {
      return Bundle.Collection.Sweets.find();
    }
  })
});
