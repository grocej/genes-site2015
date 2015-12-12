(function() {
  'use strict';
  angular
    .module('genes', ['ngRoute','underscore'])
    .controller('BeerController', function ($scope) {

      console.log('BeerController');
      console.log($scope);
    })
