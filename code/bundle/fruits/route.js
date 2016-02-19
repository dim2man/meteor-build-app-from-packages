Router.route('/fruits', {
  controller: Bundle.RouteController.extend({
    title: 'Свежие Фрукты',
    subscriptions: function() {
      return Meteor.subscribe('fruits');
    },
    context: function() {
      return Bundle.Collection.Fruits.find();
    }
  })
});
