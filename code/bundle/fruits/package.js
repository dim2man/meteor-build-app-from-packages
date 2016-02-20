Package.describe({
  name: 'bundle:fruits',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'templating']);
  api.use(['bundle:imports', 'bundle:namespace', 'bundle:collections', 'bundle:layout']);
  api.addFiles('route.js');
  api.addFiles(['fruits.html', 'fruits.js'], 'client');
});
