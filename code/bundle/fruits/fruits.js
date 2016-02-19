Template.Fruits.events({
  'click .icon-plus': function(e, t) {
    let $input = t.$('input');
    Bundle.Collection.Fruits.insert({
      name: $input.val()
    });
    $input.val('');
  },
  'click .icon-remove': function(e, t) {
    Bundle.Collection.Fruits.remove(this._id);
  }
});
