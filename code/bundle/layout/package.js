Package.describe({
  name: 'bundle:layout',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'templating', 'reactive-var']);
  api.use(['bundle:namespace', 'bundle:imports']);
  api.addFiles('route-controller.js');
  api.addFiles(['icons.css', 'layout.css', 'layout.html', 'layout.js'], 'client');
  api.addAssets(['fonts/bundle.eot', 'fonts/bundle.svg', 'fonts/bundle.ttf', 'fonts/bundle.woff', 'img/default-avatar.jpg'], 'client');
});

