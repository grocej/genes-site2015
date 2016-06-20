(function() {
  'use strict';
  angular
    .module('genes', [
      'ngRoute',
      'underscore'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/',{
        templateUrl: 'index.html'
      })
      .when('/beer', {
        templateUrl: 'beer.html',
        controller: 'BeerController'
      })
      .when('/food', {
        templateUrl: 'food.html',
        controller: 'FoodController'
      })
      .when('/map', {
        templateUrl: 'map.html',
        // controller: 'MapController'
      })
      .when('/contact', {
        templateUrl: 'contact.html',
        // controller: 'MainController'
      })
      .when('/404', {
        template: '<h2>Sorry, page not found</h2>'
      })
      .otherwise({
        redirectTo: '/404'
      });
    });

}());
