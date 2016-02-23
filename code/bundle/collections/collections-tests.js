Tinytest.addAsync('collections - fruits', (test, next) => {
  Meteor.subscribe('fruits', {
    onError: (e) => {
      test.fail(e);
      next();
    },
    onReady: () => {
      test.ok();
      next();
    }
  });
});

Tinytest.addAsync('collections - sweets', (test, next) => {
  Meteor.subscribe('sweets', {
    onError: (e) => {
      test.fail(e);
      next();
    },
    onReady: () => {
      test.ok();
      next();
    }
  });
});
