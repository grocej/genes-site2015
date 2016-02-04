(function() {
  'use strict';
  angular
    .module('genes', ['ngRoute','underscore'])
    .controller('BeerController', function ($scope) {
      // $http.get('beers.json')//

      $scope.beer =
      {
      	 "beerlist": [
          {
      			"name": "Amstel Light",
      			"country": "Netherlands",
      			"style": "light lager",
      			"container": "bottle",
      			"abv": "3.5%",
      			"price": "4.50"
      		}, {
      			"name": "Bass Ale",
      			"country": "England",
      			"style": "pale ale",
      			"container": "bottle",
      			"abv": "5.1%",
      			"price": "5.00"
      		}, {
      			"name": "Beck's",
      			"country": "Germany",
      			"style": "pilsner",
      			"container": "bottle",
      			"abv": "5.0%",
      			"price": "5.00"
      		}, {
      			"name": "Boddington's Pub Ale",
      			"country": "England",
      			"style": "pale ale",
      			"container": "can",
      			"abv": "4.7%",
      			"price": "6.00"
      		}, {
      			"name": "Chimay Blue",
      			"country": "Belgium",
      			"style": "Belgian Strong Dark Ale",
      			"container": "bottle",
      			"abv": "9.0%",
      			"price": "10.00"
      		}, {
      			"name": "Corona Extra",
      			"country": "Mexico",
      			"style": "lager",
      			"container": "bottle",
      			"abv": "4.6%",
      			"price": "4.25"
      		}, {
      			"name": "Corona Light",
      			"country": "Mexico",
      			"style": "light lager",
      			"container": "bottle",
      			"abv": "4.1%",
      			"price": "4.25"
      		}, {
      			"name": "Delirium Tremens",
      			"country": "Belgium",
      			"style": "Belgian Strong Pale Ale",
      			"container": "bottle",
      			"abv": "8.5%",
      			"price": "11.00"
      		}, {
      			"name": "Dos Equis",
      			"country": "Mexico",
      			"style": "Vienna lager",
      			"container": "bottle",
      			"abv": "4.7%",
      			"price": "4.00"
      		}, {
      			"name": "Duvel",
      			"country": "Belgium",
      			"style": "Belgian Strong Pale Ale",
      			"container": "bottle",
      			"abv": "8.5%",
      			"price": "9.00"
      		}, {
      			"name": "Estrella Damm",
      			"country": "Spain",
      			"style": "lager",
      			"container": "bottle",
      			"abv": "5.2%",
      			"price": "4.50"
      		}, {
      			"name": "Foster's",
      			"country": "Australia",
      			"style": "lager",
      			"container": "can",
      			"abv": "5.0%",
      			"price": "7.00"
      		}, {
      			"name": "Fuller's",
      			"country": "England",
      			"style": "ESB",
      			"container": "bottle",
      			"abv": "5.9%",
      			"price": "4.50"
      		}, {
      			"name": "Harp",
      			"country": "Ireland",
      			"style": "pale lager",
      			"container": "bottle",
      			"abv": "5.0%",
      			"price": "4.50"
      		}, {
      			"name": "Heineken",
      			"country": "Netherlands",
      			"style": "pale lager",
      			"container": "bottle",
      			"abv": "5.0%",
      			"price": "4.50"
      		}, {
      			"name": "Hobgoblin",
      			"country": "England",
      			"style": "ESB",
      			"container": "bottle",
      			"abv": "5.2%",
      			"price": "8.50"
      		}, {
      			"name": "Hoegaarden",
      			"country": "Belgium",
      			"style": "white ale",
      			"container": "bottle",
      			"abv": "4.9%",
      			"price": "5.00"
      		}, {
      			"name": "Hofbrau Hefe",
      			"country": "Germany",
      			"style": "wheat",
      			"container": "bottle",
      			"abv": "5.4%",
      			"price": "5.00"
      		}, {
      			"name": "Imperial",
      			"country": "Costa Rica",
      			"style": "lager",
      			"container": "bottle",
      			"abv": "4.6%",
      			"price": "4.50"
      		}, {
      			"name": "Kaliber N/A",
      			"country": "Ireland",
      			"style": "low alcohol lager",
      			"container": "bottle",
      			"abv": "0.5%",
      			"price": "4.00"
      		}, {
      			"name": "Konig Pilsener",
      			"country": "Germany",
      			"style": "pilsner",
      			"container": "can",
      			"abv": "4.9%",
      			"price": "5.00"
      		}, {
      			"name": "Labatt",
      			"country": "Canada",
      			"style": "lager",
      			"container": "bottle",
      			"abv": "5.0%",
      			"price": "4.00"
      		}, {
      			"name": "Leffe",
      			"country": "Belgium",
      			"style": "Belgian pale ale",
      			"container": "bottle",
      			"abv": "6.6%",
      			"price": "5.00"
      		}, {
      			"name": "Lindemans Framboise",
      			"country": "Belium",
      			"style": "lambic",
      			"container": "bottle",
      			"abv": "2.5%",
      			"price": "10.00"
      		}, {
      			"name": "Lindemans Kriek",
      			"country": "Belgium",
      			"style": "lambic",
      			"container": "bottle",
      			"abv": "4.0%",
      			"price": "10.00"
      		}, {
      			"name": "Maisel's Weisse",
      			"country": "Germany",
      			"style": "wheat",
      			"container": "bottle",
      			"abv": "5.4%",
      			"price": "4.50"
      		}, {
      			"name": "Maredsous",
      			"country": "Belgium",
      			"style": "tripel",
      			"container": "bottle",
      			"abv": "10.0%",
      			"price": "8.00"
      		}, {
      			"name": "Molson Canadian",
      			"country": "Canada",
      			"style": "lager",
      			"container": "bottle",
      			"abv": "5.0%",
      			"price": "4.00"
      		}, {
      			"name": "Monty Python's Holy Grail Ale",
      			"country": "England",
      			"style": "pale ale",
      			"container": "bottle",
      			"abv": "4.7%",
      			"price": "5.50"
      		}, {
      			"name": "Murphy's Stout",
      			"country": "Ireland",
      			"style": "dry stout",
      			"container": "bottle",
      			"abv": "4.0%",
      			"price": "5.50"
      		}, {
      			"name": "Negra Modelo",
      			"country": "Mexico",
      			"style": "dark lager",
      			"container": "bottle",
      			"abv": "5.4%",
      			"price": "4.50"
      		}, {
      			"name": "Newcastle",
      			"country": "Netherlands",
      			"style": "brown ale",
      			"container": "bottle",
      			"abv": "4.7%",
      			"price": "4.50"
      		}, {
      			"name": "Pacifico",
      			"country": "Mexico",
      			"style": "lager",
      			"container": "bottle",
      			"abv": "4.5%",
      			"price": "4.50"
      		}, {
      			"name": "Paulaner Hefe",
      			"country": "Germany",
      			"style": "wheat",
      			"container": "bottle",
      			"abv": "5.5%",
      			"price": "5.00"
      		}, {
      			"name": "Paulaner Munich Lager",
      			"country": "Germany",
      			"style": "helles lager",
      			"container": "bottle",
      			"abv": "4.9%",
      			"price": "5.00"
      		}, {
      			"name": "Peroni",
      			"country": "Italy",
      			"style": "lager",
      			"container": "bottle",
      			"abv": "5.1%",
      			"price": "4.75"
      		}, {
      			"name": "Pilsner Urquell",
      			"country": "Czech Republic",
      			"style": "pilsner",
      			"container": "bottle",
      			"abv": "4.4%",
      			"price": "4.75"
      		}, {
      			"name": "Pinkus Hefe",
      			"country": "Germany",
      			"style": "wheat",
      			"container": "bottle",
      			"abv": "5.1%",
      			"price": "9.00"
      		}, {
      			"name": "Pinkus Pils",
      			"country": "Germany",
      			"style": "pilsner",
      			"container": "bottle",
      			"abv": "5.2%",
      			"price": "9.00"
      		}, {
      			"name": "Red Stripe",
      			"country": "Jamaica",
      			"style": "lager",
      			"container": "bottle",
      			"abv": "4.7%",
      			"price": "4.25"
      		}, {
      			"name": "Rodenbach",
      			"country": "Belgium",
      			"style": "sour red ale",
      			"container": "bottle",
      			"abv": "5.2%",
      			"price": "8.00"
      		}, {
      			"name": "Samuel Smith's India Ale",
      			"country": "England",
      			"style": "IPA",
      			"container": "bottle",
      			"abv": "5.0%",
      			"price": "9.00"
      		}, {
      			"name": "Samuel Smith's Organic Lager",
      			"country": "England",
      			"style": "pale lager",
      			"container": "bottle",
      			"abv": "5.0%",
      			"price": "9.00"
      		}, {
      			"name": "Samuel Smith's Nut Brown Ale",
      			"country": "England",
      			"style": "brown ale",
      			"container": "bottle",
      			"abv": "5.0%",
      			"price": "7.00"
      		}, {
      			"name": "Samuel Smith's Oatmeal Stout",
      			"country": "England",
      			"style": "oatmeal stout",
      			"container": "bottle",
      			"abv": "5.0%",
      			"price": "7.00"
      		}, {
      			"name": "Samuel Smith's Taddy Porter",
      			"country": "England",
      			"style": "porter",
      			"container": "bottle",
      			"abv": "5.0%",
      			"price": "7.00"
      		}, {
      			"name": "Sapporo",
      			"country": "Japan",
      			"style": "lager",
      			"container": "can",
      			"abv": "5.0%",
      			"price": "6.00"
      		}, {
      			"name": "Smithwick's",
      			"country": "Ireland",
      			"style": "red ale",
      			"container": "bottle",
      			"abv": "4.5%",
      			"price": "5.50"
      		}, {
      			"name": "Spaten",
      			"country": "Germany",
      			"style": "helles lager",
      			"container": "bottle",
      			"abv": "5.2%",
      			"price": "4.50"
      		}, {
      			"name": "Spaten Optimator",
      			"country": "Germany",
      			"style": "doppelbock",
      			"container": "bottle",
      			"abv": "7.6%",
      			"price": "5.00"
      		}, {
      			"name": "St. Peter's Cream Stout",
      			"country": "England",
      			"style": "milk stout",
      			"container": "bottle",
      			"abv": "6.5%",
      			"price": "7.50"
      		}, {
      			"name": "St. Peter's Old-Style Porter",
      			"country": "England",
      			"style": "porter",
      			"container": "bottle",
      			"abv": "5.1%",
      			"price": "7.50"
      		}, {
      			"name": "Tecate",
      			"country": "Mexico",
      			"style": "lager",
      			"container": "can",
      			"abv": "4.5%",
      			"price": "4.00"
      		}, {
      			"name": "Warsteiner",
      			"country": "Germany",
      			"style": "pilsner",
      			"container": "bottle",
      			"abv": "4.8%",
      			"price": "4.50"
      		}, {
      			"name": "Warsteiner Dunkel",
      			"country": "Germany",
      			"style": "dark lager",
      			"container": "bottle",
      			"abv": "4.9%",
      			"price": "4.50"
      		}, {
      			"name": "Weihenstephaner Original",
      			"country": "Germany",
      			"style": "helles lager",
      			"container": "bottle",
      			"abv": "5.1%",
      			"price": "4.50"
      		}, {
      			"name": "Weihenstephaner Hefeweissbier",
      			"country": "Germany",
      			"style": "wheat",
      			"container": "bottle",
      			"abv": "5.4%",
      			"price": "4.50"
      		}, {
      			"name": "Wexford",
      			"country": "England",
      			"style": "cream ale",
      			"container": "can",
      			"abv": "5.0%",
      			"price": "6.00"
      		}, {
      			"name": "Xingu",
      			"country": "Brazil",
      			"style": "black lager",
      			"container": "bottle",
      			"abv": "4.7%",
      			"price": "5.00"
      		}, {
      			"name": "Young's Double Chocolate Stout",
      			"country": "England",
      			"style": "milk stout",
      			"container": "can",
      			"abv": "5.2%",
      			"price": "6.00"
      		}, {
      			"name": "1554 Black Lager",
      			"country": "USA",
      			"style": "black lager",
      			"container": "bottle",
      			"abv": "5.6%",
      			"price": "4.75"
      		}, {
      			"name": "Amber",
      			"brewer": "Abita",
      			"country": "USA",
      			"style": "vienna amber lager",
      			"container": "bottle",
      			"abv": "4.5%",
      			"price": "4.25"
      		}, {
      			"name": "Andygator",
      			"brewer": "Abita",
      			"country": "USA",
      			"style": "bock",
      			"container": "bottle",
      			"abv": "8.0%",
      			"price": "6.00"
      		}, {
      			"name": "Purple Haze",
      			"brewer": "Abita",
      			"country": "USA",
      			"style": "raspberry wheat",
      			"container": "bottle",
      			"abv": "4.2%",
      			"price": "4.25"
      		}, {
      			"name": "Turbodog",
      			"brewer": "Abita",
      			"country": "USA",
      			"style": "brown ale",
      			"container": "bottle",
      			"abv": "5.6%",
      			"price": "4.25"
      		}, {
      			"name": "Allagash Dubbel",
      			"brewer": "Allagash",
      			"country": "USA",
      			"style": "dubbel",
      			"container": "bottle",
      			"abv": "7.0%",
      			"price": "6.50"
      		}, {
      			"name": "Anchor Steam",
      			"country": "USA",
      			"style": "steam beer",
      			"container": "bottle",
      			"abv": "4.9%",
      			"price": "4.00"
      		}, {
      			"name": "Grapefruit Sculpin",
      			"country": "USA",
      			"brewer": "Ballast Point",
      			"style": "IPA",
      			"container": "can",
      			"abv": "7.0%",
      			"price": "7.00"
      		}, {
      			"name": "Amber",
      			"brewer": "Bell's",
      			"country": "USA",
      			"style": "amber red ale",
      			"container": "bottle",
      			"abv": "5.8%",
      			"price": "5.00"
      		}, {
      			"name": "Porter",
      			"brewer": "Bell's",
      			"country": "USA",
      			"style": "porter",
      			"container": "bottle",
      			"abv": "5.6%",
      			"price": "5.00"
      		}, {
      			"name": "Two Hearted",
      			"brewer": "Bell's",
      			"country": "USA",
      			"style": "IPA",
      			"container": "bottle",
      			"abv": "7.0%",
      			"price": "5.00"
      		}, {
      			"name": "Blue Moon",
      			"country": "USA",
      			"style": "white ale",
      			"container": "bottle",
      			"abv": "5,4%",
      			"price": "4.50"
      		}, {
      			"name": "Brown Ale",
      			"brewer": "Brooklyn",
      			"country": "USA",
      			"style": "brown ale",
      			"container": "bottle",
      			"abv": "5.6%",
      			"price": "5.00"
      		}, {
      			"name": "Lager",
      			"brewer": "Brooklyn",
      			"country": "USA",
      			"style": "amber red lager",
      			"container": "bottle",
      			"abv": "5.2%",
      			"price": "5.00"
      		}, {
      			"name": "Organic Pils",
      			"brewer": "Butte Creek",
      			"country": "USA",
      			"style": "pilsner",
      			"container": "bottle",
      			"abv": "4.5%",
      			"price": "4.50"
      		}, {
      			"name": "Organic IPA",
      			"brewer": "Butte Creek",
      			"country": "USA",
      			"style": "IPA",
      			"container": "bottle",
      			"abv": "6.7%",
      			"price": "4.50"
      		}, {
      			"name": "Kolsch",
      			"brewer": "Coast",
      			"country": "USA",
      			"style": "kolsch",
      			"container": "can",
      			"abv": "4.8%",
      			"price": "6.50"
      		}, {
      			"name": "Hopnotic",
      			"country": "USA",
      			"state": "NJ",
      			"style": "IPA",
      			"container": "bottle",
      			"abv": "6.5%",
      			"price": "6.00"
      		}, {
      			"name": "Cider",
      			"brewer": "Crispin",
      			"country": "USA",
      			"style": "cider",
      			"container": "bottle",
      			"abv": "5.0%",
      			"price": "5.50"
      		}, {
      			"name": "Pear Cider",
      			"brewer": "Crispin",
      			"country": "USA",
      			"style": "pear cider",
      			"container": "bottle",
      			"abv": "4.5%",
      			"price": "5.50"
      		}, {
      			"name": "Dale's Pale Ale",
      			"brewer": "Oskar Blues",
      			"country": "USA",
      			"style": "pale ale",
      			"container": "can",
      			"abv": "6.5%",
      			"price": "5.00"
      		}, {
      			"name": "90 Minute IPA",
      			"brewer": "Dogfish Head",
      			"country": "USA",
      			"style": "IPA",
      			"container": "bottle",
      			"abv": "9.0%",
      			"price": "7.00"
      		}, {
      			"name": "Midas Touch",
      			"brewer": "Dogfish Head",
      			"country": "USA",
      			"style": "spiced beer",
      			"container": "bottle",
      			"abv": "9.0%",
      			"price": "7.00"
      		}, {
      			"name": "Palo Santo Marron",
      			"brewer": "Dogfish Head",
      			"country": "USA",
      			"style": "brown ale",
      			"container": "bottle",
      			"abv": "12.0%",
      			"price": "7.00"
      		}, {
      			"name": "Milk Stout",
      			"brewer": "Duck Rabbit",
      			"country": "USA",
      			"style": "milk stout",
      			"container": "bottle",
      			"abv": "5.7%",
      			"price": "5.00"
      		}, {
      			"name": "Fat Tire",
      			"brewer": "New Belgium",
      			"country": "USA",
      			"style": "red ale",
      			"container": "bottle",
      			"abv": "5.2% ",
      			"price": "4.75"
      		}, {
      			"name": "Carolina Blonde",
      			"brewer": "Foothills",
      			"country": "USA",
      			"style": "blonde ale",
      			"container": "bottle",
      			"abv": "4.3%",
      			"price": "4.75"
      		}, {
      			"name": "Hoppyum",
      			"brewer": "Foothills",
      			"country": "USA",
      			"style": "IPA",
      			"container": "bottle",
      			"abv": "6.3%",
      			"price": "5.00"
      		}, {
      			"name": "People's Porter",
      			"brewer": "Foothills",
      			"country": "USA",
      			"style": "porter",
      			"container": "bottle",
      			"abv": "5.8%",
      			"price": "5.00"
      		}, {
      			"name": "All Day IPA",
      			"brewer": "Founder's",
      			"country": "USA",
      			"style": "IPA",
      			"container": "can",
      			"abv": "4.7%",
      			"price": "5.00"
      		}, {
      			"name": "Porter",
      			"brewer": "Founder's",
      			"country": "USA",
      			"style": "porter",
      			"abv": "6.5%",
      			"price": "5.00"
      		}, {
      			"name": "Honker's Ale",
      			"brewer": "Goose Island",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "4.50"
      		}, {
      			"name": "IPA",
      			"brewer": "Goose Island",
      			"country": "USA",
      			"style": "IPA",
      			"abv": "",
      			"price": "4.50"
      		}, {
      			"name": "Denver Pale Ale",
      			"brewer": "Great Divide",
      			"country": "USA",
      			"style": "pale ale",
      			"abv": "",
      			"price": "5.00"
      		}, {
      			"name": "Claymore",
      			"brewer": "Great Divide",
      			"country": "USA",
      			"style": "scotch ale",
      			"abv": "",
      			"price": "6.50"
      		}, {
      			"name": "Yeti",
      			"brewer": "Great Divide",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "9.50"
      		}, {
      			"name": "Hercules Double IPA",
      			"brewer": "Great Divide",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "9.50"
      		}, {
      			"name": "Hop Head Red",
      			"brewer": "Green Flash",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "6.75"
      		}, {
      			"name": "West Coast IPA",
      			"brewer": "Green Flash",
      			"country": "USA",
      			"style": "IPA",
      			"abv": "",
      			"price": "6.75"
      		}, {
      			"name": "Harpoon IPA",
      			"brewer": "Harpoon",
      			"country": "USA",
      			"style": "IPA",
      			"abv": "",
      			"price": "4.50"
      		}, {
      			"name": "Gaelic Ale",
      			"brewer": "Highland",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "4.50"
      		}, {
      			"name": "Kashmir",
      			"brewer": "Highland",
      			"country": "USA",
      			"style": "IPA",
      			"abv": "",
      			"price": "4.50"
      		}, {
      			"name": "Oatmeal Porter",
      			"brewer": "Highland",
      			"country": "USA",
      			"style": "porter",
      			"abv": "",
      			"price": "4.50"
      		},

      		{
      			"name": "Coors Banquet Beer",
      			"brewer": "Coors",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "3.25"
      		}, {
      			"name": "Coors Light",
      			"brewer": "Coors",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "3.25"
      		}, {
      			"name": "High Life",
      			"brewer": "Miller Brewing",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "2.50"
      		}, {
      			"name": "High Life Light",
      			"brewer": "Miller Brewing",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "2.50"
      		}, {
      			"name": "Iron City",
      			"brewer": "Iron City",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "3.25"
      		}, {
      			"name": "Lagunitas IPA",
      			"brewer": "Lagunitas",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "5.00"
      		}, {
      			"name": "Pecan Brown",
      			"brewer": "Lazy Magnolia",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "5.00"
      		}, {
      			"name": "Milk Stout",
      			"brewer": "Left Hand",
      			"country": "USA",
      			"style": "milk stout",
      			"abv": "",
      			"price": "5.50"
      		}, {
      			"name": "#9",
      			"brewer": "Magic Hat",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "4.50"
      		}, {
      			"name": "Mama's Little Yella Pils",
      			"brewer": "Oskar Blues",
      			"country": "USA",
      			"style": "pilsner",
      			"abv": "5.3% ",
      			"price": "5.00"
      		}, {
      			"name": "Old Chub",
      			"brewer": "Oskar Blues",
      			"country": "USA",
      			"style": "scotch ale",
      			"abv": "",
      			"price": "5.00"
      		}, {
      			"name": "Mickey's Big Mouth",
      			"brewer": "Mickey's",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "3.00"
      		}, {
      			"name": "National Bohemian",
      			"brewer": "National Bohemian",
      			"nickname": "Natty Bo",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "3.25"
      		}, {
      			"name": "Buckshot Amber",
      			"brewer": "Natty Greene",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "5.00"
      		}, {
      			"name": "Ranger IPA",
      			"brewer": "New Belgium",
      			"country": "USA",
      			"style": "IPA",
      			"abv": "",
      			"price": "4.75"
      		}, {
      			"name": "Snapshot Wheat",
      			"brewer": "New Belgium",
      			"country": "USA",
      			"style": "wheat",
      			"abv": "",
      			"price": "4.75"
      		}, {
      			"name": "Trippel",
      			"brewer": "New Belgium",
      			"country": "USA",
      			"style": "belgian trippel",
      			"abv": "7.8%",
      			"price": "5.00"
      		}, {
      			"name": "Abbey Ale",
      			"brewer": "Ommegang",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "5.00"
      		}, {
      			"name": "Three Philosopher's",
      			"brewer": "Ommegang",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "8.00"
      		}, {
      			"name": "Amber",
      			"brewer": "Palmetto",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "4.00"
      		}, {
      			"name": "Blue Ribbon",
      			"brewer": "Pabst",
      			"country": "USA",
      			"container": "bottle",
      			"nickname": "PBR",
      			"style": "",
      			"abv": "",
      			"price": "2.50"
      		}, {
      			"name": "Blue Ribbon",
      			"brewer": "Pabst",
      			"country": "USA",
      			"container": "can",
      			"nickname": "PBR",
      			"style": "",
      			"abv": "",
      			"price": "2.00"
      		}, {
      			"name": "Dead Guy Ale",
      			"brewer": "Rogue",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "6.50"
      		}, {
      			"name": "Hazelnut Brown Ale",
      			"brewer": "Rogue",
      			"country": "USA",
      			"style": "brown ale",
      			"abv": "",
      			"price": "6.50"
      		}, {
      			"name": "Rolling Rock",
      			"brewer": "",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "3.25"
      		}, {
      			"name": "Sam Adams Lager",
      			"brewer": "Sam Adams",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "4.50"
      		}, {
      			"name": "Sam Adams Light",
      			"brewer": "Sam Adams",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "4.50"
      		}, {
      			"name": "Sam Adams Rebel IPA",
      			"brewer": "Sam Adams",
      			"country": "USA",
      			"style": "IPA",
      			"abv": "",
      			"price": "4.50"
      		}, {
      			"name": "Organic Cider",
      			"brewer": "Scrumpy's",
      			"country": "USA",
      			"style": "cider",
      			"abv": "",
      			"price": "11.00"
      		}, {
      			"name": "Shiner Bock",
      			"brewer": "Shiner",
      			"country": "USA",
      			"style": "bock",
      			"abv": "",
      			"price": "4.00"
      		}, {
      			"name": "Pale Ale",
      			"brewer": "Sierra",
      			"country": "USA",
      			"style": "pale ale",
      			"abv": "",
      			"price": "4.00"
      		}, {
      			"name": "Smith & Forge Hard Cider",
      			"brewer": "Smith & Forge",
      			"country": "USA",
      			"style": "cider",
      			"abv": "",
      			"price": "5.50"
      		}, {
      			"name": "Arrogant Bastard",
      			"brewer": "Stone",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "13.00"
      		}, {
      			"name": "Ruination",
      			"brewer": "Stone",
      			"country": "USA",
      			"style": "IPA",
      			"abv": "",
      			"price": "13.00"
      		}, {
      			"name": "Smoked Porter",
      			"brewer": "Stone",
      			"country": "USA",
      			"style": "smoked porter",
      			"abv": "",
      			"price": "12.00"
      		}, {
      			"name": "Blue",
      			"brewer": "Sweetwater",
      			"country": "USA",
      			"style": "***",
      			"abv": "",
      			"price": "5.00"
      		}, {
      			"name": "420",
      			"brewer": "Sweetwater",
      			"country": "USA",
      			"container": "can",
      			"style": "fruit ale",
      			"abv": "4.6%",
      			"price": "5.00"
      		}, {
      			"name": "Dockside Pils",
      			"brewer": "Thomas Creek",
      			"country": "USA",
      			"style": "pilsner",
      			"abv": "",
      			"price": "5.00"
      		}, {
      			"name": "River Falls Red",
      			"brewer": "Thomas Creek",
      			"country": "USA",
      			"style": "red ale",
      			"abv": "",
      			"price": "5.00"
      		}, {
      			"name": "Up The Creek IPA",
      			"brewer": "Thomas Creek",
      			"country": "USA",
      			"style": "IPA",
      			"abv": "",
      			"price": "7.50"
      		}, {
      			"name": "Golden Monkey",
      			"brewer": "Victory",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "6.50"
      		}, {
      			"name": "Hop Devil",
      			"brewer": "Victory",
      			"country": "USA",
      			"style": "IPA",
      			"abv": "",
      			"price": "5.00"
      		}, {
      			"name": "Gose",
      			"brewer": "Westbrook",
      			"country": "USA",
      			"style": "gose sour",
      			"abv": "",
      			"price": "6.00"
      		}, {
      			"name": "White Thai",
      			"brewer": "Westbrook",
      			"country": "USA",
      			"style": "spice white ale",
      			"abv": "",
      			"price": "5.50"
      		}, {
      			"name": "Granny Smith Cider",
      			"brewer": "Woodchuck",
      			"country": "USA",
      			"style": "cider",
      			"abv": "",
      			"price": "4.50"
      		}, {
      			"name": "Yuengling Lager",
      			"brewer": "Yuengling",
      			"country": "USA",
      			"style": "lager",
      			"abv": "",
      			"price": "3.00"
      		}, {
      			"name": "Yuengling Light",
      			"brewer": "Yuengling",
      			"country": "USA",
      			"style": "light lager",
      			"abv": "",
      			"price": "3.00"
      		}, {
      			"name": "Miller Lite",
      			"brewer": "Miller Brewing",
      			"country": "USA",
      			"style": "light lager",
      			"abv": "",
      			"price": "3.25"
      		}, {
      			"name": "Budweiser",
      			"brewer": "Budweiser",
      			"country": "USA",
      			"style": "lager",
      			"abv": "",
      			"price": "3.25"
      		}, {
      			"name": "Michelob Light",
      			"brewer": "Michelob",
      			"country": "USA",
      			"style": "light lager",
      			"abv": "",
      			"price": "3.25"
      		}, {
      			"name": "Michelob Ultra Light",
      			"brewer": "Michelob",
      			"country": "USA",
      			"style": "light lager",
      			"abv": "",
      			"price": "3.25"
      		}
      	]
      };
      $scope.results = [];

      // $scope.findBeer = function(enteredBeer) {
      //   angular.forEach($scope.beer.name, function(value, key) {
      //     if (key === enteredBeer) {
      //       $scope.results.push({name: key, price: value[0].name})
      //     }
      //   })
      // };
}());

// App.controller('ScoreboardCtrl', function($scope, $http) {
//   $http.get('scoreboard.json')
//     .then(function(res){
//       // Storing the json data object as 'scores'
//       $scope.scores = res.data;
//     });
// });
