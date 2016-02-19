Bundle.RouteController = RouteController.extend({
  layoutTemplate: 'Layout',
  title: '', // default title
  context: undefined,
  action: function() {
    this.render('Navigation', {
      to: 'navigation',
      data: function() {
        return Bundle.Navigation.get();
      }
    });
    this.render('Header', {
      to: 'header',
      data: this.title
    });
    this.render(this.lookupTemplate(), {
      data: this.context
    });
  }
});
