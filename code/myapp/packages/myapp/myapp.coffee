# Default route
Router.route '/', -> Router.go 'fruits'

Meteor.startup ->
  if Meteor.isClient
    # define navigation menu
    Bundle.Navigation.set [
      {template: 'NavFruits'}
      {template: 'NavVegetables'}
    ]
