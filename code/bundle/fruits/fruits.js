Template.Fruits.events({
  'click .icon-plus, keyup .icon-plus + input': function(e, t) {
    if (e.type == 'keyup' && e.which != 13) return;
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
