# Default route
Router.route '/', -> Router.go 'fruits'

if Meteor.isClient
  # define navigation menu
  Bundle.Navigation.set [
    {template: 'NavFruits'}
    {template: 'NavSweets'}
  ]
