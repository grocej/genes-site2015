(function () {
  'use strict';
  angular
    .module('genes')
    .factory('BeerListService', function ($http, _) {

      return {
        $http.get('/beers.json')
          .success(function(data) {

          })
          .error(function(){
            alert('An error occurred!');
          })
        }
    };
    //
    //   var objLink = {
    //     baseUrl: 'https://openapi.etsy.com/v2/listings/active.js?includes=MainImage',
    //     keyWord: 'gamble',
    //     apiKey: 'ehmm61ij5mqdv16266hai2bb',
    //     format: 'JSON_CALLBACK',
    //     newUrl: function() {
    //       return this.baseUrl + '&api_key=' + this.apiKey + '&keywords=' + this.keyWord + '&callback=' + this.format;
    //   }
    // };
    //   var mapDataToUrls = function(collection) {
    //     return _.map(collection, function (items) {
    //       return {
    //         title: items.title,
    //         itemId: items.listing_id,
    //         smImg: items.MainImage.url_170x135,
    //         mdImg: items.MainImage.url_570xN,
    //         lgImg: items.MainImage.url_fullxfull,
    //         price: Number(items.price),
    //         url: items.url,
    //         descrip: items.description,
    //         materials: items.materials
    //       };
    //     });
    //   };
    //     var getAllItems = function() {
    //       return $http.jsonp(objLink.newUrl()).then(function (items) {
    //        var itemsArray = items.data.results;
    //        return mapDataToUrls(itemsArray);
    //       });
    //     };
    //     var getOneItem = function(id) {
    //       return $http.jsonp(objLink.newUrl()).then(function (items) {
    //         var itemArray = _.where(items.data.results, { listing_id: Number(id) });
    //         console.log(itemArray);
    //         return mapDataToUrls(itemArray)[0];
    //       });
    //     };
    //
    //     return {
    //       getAllItems: getAllItems,
    //       getOneItem: getOneItem
    //   }
    // })
    //   .factory('CartService', )
    //   var shoppingCartUrl = 'http://tiy-fee-rest.herokuapp.com/collections/betsy-etsy';

}());
