(function() {
  'use strict';
  angular
    .module('genes', ['ngRoute'])
    .controller('BeerController', function ($scope) {

      var beerlist = [

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
      			"style": "lager, 'australian for beer'",
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
      			"style": "wheat hefeweizen",
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
      			"style": "low alcohol lager non-alcoholic",
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
      			"style": "fruit raspberry lambic",
      			"container": "bottle",
      			"abv": "2.5%",
      			"price": "10.00"
      		}, {
      			"name": "Lindemans Kriek",
      			"country": "Belgium",
      			"style": "fruit cherry lambic",
      			"container": "bottle",
      			"abv": "4.0%",
      			"price": "10.00"
      		}, {
      			"name": "Maisel's Weisse",
      			"country": "Germany",
      			"style": "wheat hefeweizen",
      			"container": "bottle",
      			"abv": "5.4%",
      			"price": "4.50"
      		}, {
      			"name": "Maredsous",
      			"country": "Belgium",
      			"style": "tripel, trippel",
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
      			"style": "wheat hefeweizen",
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
      			"name": "Pinkus Organic Hefe",
      			"country": "Germany",
      			"style": "organic wheat hefeweizen",
      			"container": "bottle",
      			"abv": "5.1%",
      			"price": "9.00"
      		}, {
      			"name": "Pinkus Organic Pils",
      			"country": "Germany",
      			"style": "organic pilsner",
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
      			"style": "pale ale IPA",
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
      			"style": "wheat, hefeweizen",
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
      			"name": "New Belgium 1554 Black Lager",
      			"country": "USA",
      			"style": "black lager",
      			"container": "bottle",
      			"abv": "5.6%",
      			"price": "4.75"
      		}, {
      			"name": "Abita Amber",
      			"brewer": "Abita",
      			"country": "USA",
      			"style": "vienna amber lager",
      			"container": "bottle",
      			"abv": "4.5%",
      			"price": "4.25"
      		}, {
      			"name": "Abita Andygator",
      			"brewer": "Abita",
      			"country": "USA",
      			"style": "bock",
      			"container": "bottle",
      			"abv": "8.0%",
      			"price": "6.00"
      		}, {
      			"name": "Abita Purple Haze",
      			"brewer": "Abita",
      			"country": "USA",
      			"style": "raspberry wheat",
      			"container": "bottle",
      			"abv": "4.2%",
      			"price": "4.25"
      		}, {
      			"name": "Abita Turbodog",
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
      			"style": "steam ale",
      			"container": "bottle",
      			"abv": "4.9%",
      			"price": "4.00"
      		}, {
      			"name": "Ballast Point Grapefruit Sculpin",
      			"country": "USA",
      			"brewer": "Ballast Point",
      			"style": "pale ale IPA",
      			"container": "can",
      			"abv": "7.0%",
      			"price": "7.00"
      		}, {
      			"name": "Bell's Amber",
      			"brewer": "Bell's",
      			"country": "USA",
      			"style": "amber red ale",
      			"container": "bottle",
      			"abv": "5.8%",
      			"price": "5.00"
      		}, {
      			"name": "Bell's Porter",
      			"brewer": "Bell's",
      			"country": "USA",
      			"style": "porter",
      			"container": "bottle",
      			"abv": "5.6%",
      			"price": "5.00"
      		}, {
      			"name": "Bell's Two Hearted",
      			"brewer": "Bell's",
      			"country": "USA",
      			"style": "pale ale IPA",
      			"container": "bottle",
      			"abv": "7.0%",
      			"price": "5.00"
      		}, {
      			"name": "Blue Moon",
      			"country": "USA",
      			"style": "white ale, witbier",
      			"container": "bottle",
      			"abv": "5,4%",
      			"price": "4.50"
      		}, {
      			"name": "Brooklyn Brown Ale",
      			"brewer": "Brooklyn",
      			"country": "USA",
      			"style": "brown ale",
      			"container": "bottle",
      			"abv": "5.6%",
      			"price": "5.00"
      		}, {
      			"name": "Brooklyn Lager",
      			"brewer": "Brooklyn",
      			"country": "USA",
      			"style": "amber red lager",
      			"container": "bottle",
      			"abv": "5.2%",
      			"price": "5.00"
      		}, {
      			"name": "Butte Creek Organic Pils",
      			"brewer": "Butte Creek",
      			"country": "USA",
      			"style": "pilsner",
      			"container": "bottle",
      			"abv": "4.5%",
      			"price": "4.50"
      		}, {
      			"name": "Butte Creek Organic IPA",
      			"brewer": "Butte Creek",
      			"country": "USA",
      			"style": "pale ale IPA",
      			"container": "bottle",
      			"abv": "6.7%",
      			"price": "4.50"
      		}, {
      			"name": "Coast Kolsch",
      			"brewer": "Coast",
      			"country": "USA",
      			"style": "kolsch",
      			"container": "can",
      			"abv": "4.8%",
      			"price": "6.50"
      		}, {
      			"name": "Cricket Hill Hopnotic",
            "brewer": "Cricket Hill",
      			"country": "USA",
      			"state": "NJ",
      			"style": "pale ale IPA",
      			"container": "bottle",
      			"abv": "6.5%",
      			"price": "6.00"
      		}, {
      			"name": "Crispin Cider",
      			"brewer": "Crispin",
      			"country": "USA",
      			"style": "cider",
      			"container": "bottle",
      			"abv": "5.0%",
      			"price": "5.50"
      		}, {
      			"name": "Crispin Pear Cider",
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
      			"name": "Dogfish Head 90 Minute IPA",
      			"brewer": "Dogfish Head",
      			"country": "USA",
      			"style": "pale ale IPA",
      			"container": "bottle",
      			"abv": "9.0%",
      			"price": "7.00"
      		}, {
      			"name": "Dogfish Head Midas Touch",
      			"brewer": "Dogfish Head",
      			"country": "USA",
      			"style": "spice",
      			"container": "bottle",
      			"abv": "9.0%",
      			"price": "7.00"
      		}, {
      			"name": "Dogfish Head Palo Santo Marron",
      			"brewer": "Dogfish Head",
      			"country": "USA",
      			"style": "brown ale",
      			"container": "bottle",
      			"abv": "12.0%",
      			"price": "7.00"
      		}, {
      			"name": "Duck Rabbit Milk Stout",
      			"brewer": "Duck Rabbit",
      			"country": "USA",
      			"style": "milk stout",
      			"container": "bottle",
      			"abv": "5.7%",
      			"price": "5.00"
      		}, {
      			"name": "New Belgium Fat Tire",
      			"brewer": "New Belgium",
      			"country": "USA",
      			"style": "red ale",
      			"container": "bottle",
      			"abv": "5.2% ",
      			"price": "4.75"
      		}, {
      			"name": "Foothills Carolina Blonde",
      			"brewer": "Foothills",
      			"country": "USA",
      			"style": "blonde ale",
      			"container": "bottle",
      			"abv": "4.3%",
      			"price": "4.75"
      		}, {
      			"name": "Foothills Hoppyum",
      			"brewer": "Foothills",
      			"country": "USA",
      			"style": "pale ale IPA",
      			"container": "bottle",
      			"abv": "6.3%",
      			"price": "5.00"
      		}, {
      			"name": "Foothills People's Porter",
      			"brewer": "Foothills",
      			"country": "USA",
      			"style": "porter",
      			"container": "bottle",
      			"abv": "5.8%",
      			"price": "5.00"
      		}, {
      			"name": "Founder's All Day IPA",
      			"brewer": "Founder's",
      			"country": "USA",
      			"style": "pale ale IPA",
      			"container": "can",
      			"abv": "4.7%",
      			"price": "5.00"
      		}, {
      			"name": "Founder's Porter",
      			"brewer": "Founder's",
      			"country": "USA",
      			"style": "porter",
      			"abv": "6.5%",
      			"price": "5.00"
      		}, {
      			"name": "Goose Island Honker's Ale",
      			"brewer": "Goose Island",
      			"country": "USA",
      			"style": "bitter ale",
      			"abv": "4.3%",
      			"price": "4.50"
      		}, {
      			"name": "Goose Island IPA",
      			"brewer": "Goose Island",
      			"country": "USA",
      			"style": "pale ale IPA",
      			"abv": "5.9%",
      			"price": "4.50"
      		}, {
      			"name": "Great Divide Denver Pale Ale",
      			"brewer": "Great Divide",
      			"country": "USA",
      			"style": "pale ale",
      			"abv": "5.4%",
      			"price": "5.00"
      		}, {
      			"name": "Great Divide Claymore Scotch Ale",
      			"brewer": "Great Divide",
      			"country": "USA",
      			"style": "scotch ale",
      			"abv": "7.7%",
      			"price": "6.50"
      		}, {
      			"name": "Great Divide Yeti Imperial Stout",
      			"brewer": "Great Divide",
      			"country": "USA",
      			"style": "imperial stout",
      			"abv": "9.5%",
      			"price": "9.50"
      		}, {
      			"name": "Great Divide Hercules Double IPA",
      			"brewer": "Great Divide",
      			"country": "USA",
      			"style": "double imperial pale ale IPA",
      			"abv": "10.0%",
      			"price": "9.50"
      		}, {
      			"name": "Green Flash Hop Head Red",
      			"brewer": "Green Flash",
      			"country": "USA",
      			"style": "double imperial pale ale IPA",
      			"abv": "8.1%",
      			"price": "6.75"
      		}, {
      			"name": "Green Flash West Coast IPA",
      			"brewer": "Green Flash",
      			"country": "USA",
      			"style": "double imperial pale ale IPA",
      			"abv": "8.1%",
      			"price": "6.75"
      		}, {
      			"name": "Harpoon IPA",
      			"brewer": "Harpoon",
      			"country": "USA",
      			"style": "pale ale IPA",
      			"abv": "5.9%",
      			"price": "4.50"
      		}, {
      			"name": "Highland Gaelic Ale",
      			"brewer": "Highland",
      			"country": "USA",
      			"style": "amber red ale",
      			"abv": "5.8%",
      			"price": "4.50"
      		}, {
      			"name": "Highland Kashmir",
      			"brewer": "Highland",
      			"country": "USA",
      			"style": "pale ale IPA",
      			"abv": "6.0%",
      			"price": "4.50"
      		}, {
      			"name": "Highland Oatmeal Porter",
      			"brewer": "Highland",
      			"country": "USA",
      			"style": "porter",
      			"abv": "5.8%",
      			"price": "4.50"
      		}, {
      			"name": "Coors Banquet",
      			"brewer": "Coors",
      			"country": "USA",
      			"style": "lager",
      			"abv": "5.0%",
      			"price": "3.25"
      		}, {
      			"name": "Coors Light",
      			"brewer": "Coors",
      			"country": "USA",
      			"style": "light lager",
      			"abv": "4.2%",
      			"price": "3.25"
      		}, {
      			"name": "High Life",
      			"brewer": "Miller Brewing",
      			"country": "USA",
      			"style": "lager",
      			"abv": "4.6%",
      			"price": "2.50"
      		}, {
      			"name": "High Life Light",
      			"brewer": "Miller Brewing",
      			"country": "USA",
      			"style": "light lager",
      			"abv": "4.5%",
      			"price": "2.50"
      		}, {
      			"name": "Iron City",
      			"brewer": "Iron City",
      			"country": "USA",
      			"style": "lager",
      			"abv": "4.5%",
      			"price": "3.25"
      		}, {
      			"name": "Lagunitas IPA",
      			"brewer": "Lagunitas",
      			"country": "USA",
      			"style": "pale ale IPA",
      			"abv": "6.2%",
      			"price": "5.00"
      		}, {
      			"name": "Lazy Magnolia Pecan Brown",
      			"brewer": "Lazy Magnolia",
      			"country": "USA",
      			"style": "brown ale",
      			"abv": "4.5%",
      			"price": "5.00"
      		}, {
      			"name": "Left Hand Milk Stout",
      			"brewer": "Left Hand",
      			"country": "USA",
      			"style": "milk stout",
      			"abv": "6.0%",
      			"price": "5.50"
      		}, {
      			"name": "Magic Hat #9",
      			"brewer": "Magic Hat",
      			"country": "USA",
      			"style": "fruit ale",
      			"abv": "5.1%",
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
      			"abv": "8.0%",
      			"price": "5.00"
      		}, {
      			"name": "Mickey's Big Mouth",
      			"brewer": "Mickey's",
      			"country": "USA",
      			"style": "malt liquor",
      			"abv": "5.6%",
      			"price": "3.00"
      		}, {
      			"name": "National Bohemian",
      			"brewer": "National Bohemian",
      			"nickname": "Natty Bo",
      			"country": "USA",
      			"style": "lager",
      			"abv": "4.28%",
      			"price": "3.25"
      		}, {
      			"name": "Natty Greene Buckshot Amber",
      			"brewer": "Natty Greene",
      			"country": "USA",
      			"style": "red amber ale",
      			"abv": "4.9%",
      			"price": "5.00"
      		}, {
      			"name": "New Belgium Ranger IPA",
      			"brewer": "New Belgium",
      			"country": "USA",
      			"style": "pale ale IPA",
      			"abv": "6.5%",
      			"price": "4.75"
      		}, {
      			"name": "New Belgium Snapshot Wheat",
      			"brewer": "New Belgium",
      			"country": "USA",
      			"style": "wheat hefeweizen",
      			"abv": "5.0%",
      			"price": "4.75"
      		}, {
      			"name": "New Belgium Trippel",
      			"brewer": "New Belgium",
      			"country": "USA",
      			"style": "belgian trippel, tripel",
      			"abv": "7.8%",
      			"price": "5.00"
      		}, {
      			"name": "Ommegang Abbey Ale",
      			"brewer": "Ommegang",
      			"country": "USA",
      			"style": "abbey dubbel ale",
      			"abv": "8.2%",
      			"price": "5.00"
      		}, {
      			"name": "Ommegang Three Philosopher's",
      			"brewer": "Ommegang",
      			"country": "USA",
      			"style": "quadrupel",
      			"abv": "9.7%",
      			"price": "8.00"
      		}, {
      			"name": "Palmetto Amber",
      			"brewer": "Palmetto",
      			"country": "USA",
      			"style": "amber red",
      			"abv": "5.5%",
      			"price": "4.00"
      		}, {
      			"name": "Pabst Blue Ribbon",
      			"brewer": "Pabst",
      			"country": "USA",
      			"container": "bottle",
      			"nickname": "PBR",
      			"style": "lager",
      			"abv": "4.74%",
      			"price": "2.50"
      		}, {
      			"name": "Pabst Blue Ribbon",
      			"brewer": "Pabst",
      			"country": "USA",
      			"container": "can",
      			"nickname": "PBR",
      			"style": "lager",
      			"abv": "4.74%",
      			"price": "2.00"
      		}, {
      			"name": "Rogue Dead Guy Ale",
      			"brewer": "Rogue",
      			"country": "USA",
      			"style": "maibock, helles bock",
      			"abv": "6.5%",
      			"price": "6.50"
      		}, {
      			"name": "Rogue Hazelnut Brown Nectar Ale",
      			"brewer": "Rogue",
      			"country": "USA",
      			"style": "brown ale",
      			"abv": "6.2%",
      			"price": "6.50"
      		}, {
      			"name": "Rolling Rock Extra Pale",
      			"brewer": "Latrobe",
      			"country": "USA",
      			"style": "lager",
      			"abv": "4.6%",
      			"price": "3.25"
      		}, {
      			"name": "Sam Adams Lager",
      			"brewer": "Boston Beer Company Sam Adams",
      			"country": "USA",
      			"style": "vienna lager",
      			"abv": "4.9%",
      			"price": "4.50"
      		}, {
      			"name": "Sam Adams Light",
      			"brewer": "Boston Beer Company Sam Adams",
      			"country": "USA",
      			"style": "light lager",
      			"abv": "4.0%",
      			"price": "4.50"
      		}, {
      			"name": "Sam Adams Rebel IPA",
      			"brewer": "Boston Beer Company Sam Adams",
      			"country": "USA",
      			"style": "pale ale IPA",
      			"abv": "6.5%",
      			"price": "4.50"
      		}, {
      			"name": "Scrumpy's Organic Cider",
      			"brewer": "Scrumpy's",
      			"country": "USA",
      			"style": "cider",
      			"abv": "6.0%",
      			"price": "11.00"
      		}, {
      			"name": "Shiner Bock",
      			"brewer": "Spoetzl Shiner",
      			"country": "USA",
      			"style": "bock",
      			"abv": "4.4%",
      			"price": "4.00"
      		}, {
      			"name": "Sierra Pale Ale",
      			"brewer": "Sierra",
      			"country": "USA",
      			"style": "APA pale ale",
      			"abv": "5.6%",
      			"price": "4.00"
      		}, {
      			"name": "Smith & Forge Hard Cider",
      			"brewer": "Smith & Forge",
      			"country": "USA",
      			"style": "cider",
      			"abv": "6%",
      			"price": "5.50"
      		}, {
      			"name": "Stone Arrogant Bastard",
      			"brewer": "Stone",
      			"country": "USA",
      			"style": "",
      			"abv": "",
      			"price": "13.00"
      		}, {
      			"name": "Stone Ruination IPA",
      			"brewer": "Stone",
      			"country": "USA",
      			"style": "double pale ale IPA",
      			"abv": "8.5%",
      			"price": "13.00"
      		}, {
      			"name": "Stone Smoked Porter",
      			"brewer": "Stone",
      			"country": "USA",
      			"style": "smoked porter",
      			"abv": "5.9%",
      			"price": "12.00"
      		}, {
      			"name": "Sweetwater Blue",
      			"brewer": "Sweetwater",
      			"country": "USA",
      			"style": "fruit ale, blueberry",
      			"abv": "4.9%",
      			"price": "5.00"
      		}, {
      			"name": "Sweetwater 420",
      			"brewer": "Sweetwater",
      			"country": "USA",
      			"container": "can",
      			"style": "pale ale",
      			"abv": "5.4%",
      			"price": "5.00"
      		}, {
      			"name": "Thomas Creek Dockside Pils",
      			"brewer": "Thomas Creek",
      			"country": "USA",
      			"style": "pilsner",
      			"abv": "4.5%",
      			"price": "5.00"
      		}, {
      			"name": "Thomas Creek River Falls Red",
      			"brewer": "Thomas Creek",
      			"country": "USA",
      			"style": "amber red ale",
      			"abv": "5.65%",
      			"price": "5.00"
      		}, {
      			"name": "Thomas Creek Up The Creek IPA",
      			"brewer": "Thomas Creek",
      			"country": "USA",
      			"style": "american double, imperial pale ale IPA",
      			"abv": "12.5%",
      			"price": "7.50"
      		}, {
      			"name": "Victory Golden Monkey",
      			"brewer": "Victory",
      			"country": "USA",
      			"style": "tripel, trippel",
      			"abv": "9.5%",
      			"price": "6.50"
      		}, {
      			"name": "Victory Hop Devil",
      			"brewer": "Victory",
      			"country": "USA",
      			"style": "pale ale IPA",
      			"abv": "6.7",
      			"price": "5.00"
      		}, {
      			"name": "Westbrook Gose",
      			"brewer": "Westbrook",
      			"country": "USA",
      			"style": "gose, sour",
      			"abv": "4.0%",
      			"price": "6.00"
      		}, {
      			"name": "Westbrook White Thai",
      			"brewer": "Westbrook",
      			"country": "USA",
      			"style": "spice white ale, witbier",
      			"abv": "5.0%",
      			"price": "5.50"
      		}, {
      			"name": "Woodchuck Granny Smith Cider",
      			"brewer": "Woodchuck",
      			"country": "USA",
      			"style": "cider",
      			"abv": "5.0%",
      			"price": "4.50"
      		}, {
      			"name": "Yuengling Lager",
      			"brewer": "Yuengling",
      			"country": "USA",
      			"style": "red lager",
      			"abv": "4.4%",
      			"price": "3.00"
      		}, {
      			"name": "Yuengling Light",
      			"brewer": "Yuengling",
      			"country": "USA",
      			"style": "light lager",
      			"abv": "3.2%",
      			"price": "3.00"
      		}, {
      			"name": "Miller Lite",
      			"brewer": "Miller Brewing",
      			"country": "USA",
      			"style": "light lager",
      			"abv": "4.17%",
      			"price": "3.25"
      		}, {
      			"name": "Budweiser",
      			"brewer": "Budweiser",
      			"country": "USA",
      			"style": "lager",
      			"abv": "5.0%",
      			"price": "3.25"
      		}, {
      			"name": "Michelob Light",
      			"brewer": "Michelob",
      			"country": "USA",
      			"style": "light lager",
      			"abv": "4.3%",
      			"price": "3.25"
      		}, {
      			"name": "Michelob Ultra",
      			"brewer": "Michelob",
      			"country": "USA",
      			"style": "light lager",
      			"abv": "4.2%",
      			"price": "3.25"
      		}
      	]
        $scope.beers = beerlist;
        $scope.results = [];
      })

    .controller('FoodController', function ($scope) {

      var foodmenu = [
        {
        	"name": "Artichoke Dip",
        	"category": "starter app appetizer",
        	"ingredients": "artichoke pita wedges",
        	"description": "served with toasted pita wedges",
        	"price": "8.95",
          "prep": "baked",
          "happy hour": "happy hour"
        }, {
          "name": "Fried Green Tomatoes",
        	"category": "starter app appetizer",
        	"ingredients": "fried green tomatoes pimiento cheese",
        	"description": "served with house-made pimiento cheese",
          "prep": "fried",
        	"price": "7.95",
          "happy hour": "happy hour"
        }, {
          "name": "Cajun Fried Crawdads",
        	"category": "starter app appetizer",
        	"ingredients": "crawdad tails jalapeno tartar sauce",
        	"description": "served with jalapeno tartar sauce",
          "prep": "fried",
        	"price": "10.50"
        }, {
          "name": "Fried Mushrooms",
        	"category": "starter app appetizer",
        	"ingredients": "mushrooms beer batter ranch dressing",
        	"description": "deep fried in beer batter with a side of ranch",
          "prep": "fried",
        	"price": "7.95",
          "happy hour": "happy hour"
        }, {
          "name": "Chicken Fingers",
        	"category": "starter app appetizer",
        	"ingredients": "chicken honey mustard",
        	"description": "served with honey mustard",
          "prep": "fried",
        	"price": "8.50",
          "happy hour": "happy hour"
        }, {
          "name": "Chicken Quesadilla",
        	"category": "starter app appetizer",
        	"ingredients": "chicken jack cheese green peppers onions pico de gallo sour cream",
        	"description": "tortillas stuffed with chicken, jack cheese, green peppers and onions, served with pico de gallo and sour cream",
          "prep": "grilled",
        	"price": "8.50",
          "happy hour": "happy hour"
        }, {
          "name": "Corn Dogs",
        	"category": "starter app appetizer",
        	"ingredients": "corn dogs spicy mustard",
        	"description": "two regular-sized dogs, served with spicy mustard",
          "prep": "fried",
        	"price": "4.95"
        }, {
          "name": "Roasted Red Pepper Hummus",
        	"category": "starter app appetizer",
        	"ingredients": "hummus pita wedges",
        	"description": "with diced cucumbers, served with pita wedges",
          "prep": "grilled",
        	"price": "7.95",
          "happy hour": "happy hour"
        }, {
          "name": "Vegetable Spring Rolls",
        	"category": "starter app appetizer",
        	"ingredients": "spring rolls sesame dressing spicy mustard",
        	"description": "served with sesame dressing and spicy mustard",
          "prep": "fried",
        	"price": "7.95",
          "happy hour": "happy hour"
        }, {
          "name": "Loaded Fries",
        	"category": "starter app appetizer",
        	"ingredients": "french fries bacon cheddar cheese scallions ranch dressing",
        	"description": "with melted cheddar, bacon, scallions, and a side of ranch",
          "prep": "fried",
        	"price": "9.95",
          "add-ons": "Add sour cream or jalapenos for $.75 each",
          "happy hour": "happy hour"
        }, {
          "name": "Wings - Dry Flavors: Lemon Pepper, Mojo, Ranch, Mesquite, Southern Fried.",
        	"category": "wings starter app appetizer",
        	"flavors": "Lemon Pepper, Mojo, Ranch, Mesquite, Southern Fried",
        	"description": "WHOLE and HALF dozens available, served with celery and either ranch or blue cheese dressing",
          "prep": "fried",
        	"price": "11.95",
          "add-ons": "Extra dressing $.50 each"
        }, {
          "name": "Wings - Wet Flavors: Buffalo, Buffyaki, Honey Mustard, Honey BBQ, Hot Honey Sriracha, Habanero Reaper, Jerk, Teriyaki.",
        	"category": "wings starter app appetizer",
          "flavors": "Buffalo, Buffyaki, Honey Mustard, Honey BBQ, Hot Honey Sriracha, Habanero Reaper, Jerk, Teriyaki",
        	"description": "WHOLE and HALF dozens available, served with celery and either ranch or blue cheese dressing",
          "prep": "fried",
        	"price": "11.95",
          "add-ons": "Extra dressing $.50 each"
        }, {
          "name": "Blue Plate Special",
        	"category": "meat and two vegetables lunch",
          "flavors": "Monday - Pork Chop, Tuesday - Fried Chicken, Wednesday - Pot Roast, Thursday - Country Fried Steak, Friday - Fried Flounder",
        	"description": "Includes a soft drink or iced tea and two sides of the day",
        	"price": "8.50",
          "add-ons": "Monday - Friday, 11:30am - 4:00pm"
        }, {
          "name": "Avondale",
        	"category": "burger hamburger chicken sandwich turkey",
          "ingredients": "burger bacon pimiento cheese fried green tomato",
        	"description": "with bacon, pimiento cheese, and a fried green tomato",
        	"price": "10.50",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Alpine",
        	"category": "burger hamburger chicken sandwich turkey",
          "ingredients": "burger sauteed mushrooms sauteed onions swiss cheese",
        	"description": "with sauteeed mushroooms, onions, and Swiss cheese",
        	"price": "9.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Black-n-Blue",
          "category": "burger hamburger chicken sandwich turkey",
          "ingredients": "blackened seasoning burger blue cheese",
          "description": "blackened seasoned patty topped with crumbled blue cheese",
          "price": "9.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Left Coast",
          "category": "burger hamburger chicken sandwich turkey",
          "ingredients": "burger goat cheese avocado roasted red pepper",
          "description": "with goat cheese, avocado, and roasted red pepper",
          "price": "10.50",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Mesquite BBQ",
          "category": "burger hamburger chicken sandwich turkey",
          "ingredients": "burger smoked bacon garlic BBQ sauce",
          "description": "seasoned patty topped with smoked bacon and garlic BBQ sauce",
          "price": "9.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Motherload",
          "category": "burger hamburger chicken sandwich turkey",
          "ingredients": "burger egg pepperjack cheddar cheese sauteed onions",
          "description": "with bacon, pepperjack, cheddar, sauteed onions, & topped with a fried egg",
          "price": "10.75",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Ranchburger",
          "category": "burger hamburger chicken sandwich turkey",
          "ingredients": "burger bacon ranch scallions",
          "description": "with crumbled bacon, ranch, and scallions",
          "price": "9.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Southwestern",
          "category": "burger hamburger chicken sandwich turkey",
          "ingredients": "burger bacon cheddar pepperjack jalapeno fried onion rings BBQ sauce",
          "description": "bacon, cheddar, pepperjack, jalapeno, BBQ sauce and fried onion rings",
          "price": "10.75",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Turkey Burger",
          "category": "burger hamburger chicken sandwich turkey",
          "ingredients": "burger feta cheese garlic sage aioli",
          "description": "with feta cheese, tomato and onion, and garlic sage aioli",
          "price": "9.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Classic Burger",
          "category": "burger hamburger chicken sandwich turkey",
          "ingredients": "burger sauteed mushrooms sauteed onions swiss cheese",
          "description": "with lettuce, tomato, and red onion",
          "price": "7.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Buffalo Chicken Salad",
          "category": "chicken salad",
          "ingredients": "chicken lettuce blue cheese tomato red onion celery",
          "description": "fried or grilled chicken, romaine lettuce, tomato, red onion, blue cheese crumbles, diced celery, & blue cheese dressing",
          "price": "11.95"
        }, {
          "name": "Fried Crawfish Salad",
          "category": " crawfish salad",
          "ingredients": "crawfish lettuce goat cheese roasted red peppers red onion jalapeno vinaigrette dressing",
          "description": "romaine lettuce, goat cheese, roasted red peppers, red onion with jalapeno vinaigrette dressing",
          "price": "11.95"
        }, {
          "name": "Greek Salad",
          "category": "salad",
          "ingredients": "lettuce tomato black olive feta cheese red onion greek dressing",
          "description": "romaine lettuce, tomato, black olives, feta cheese red onion and greek dressing",
          "price": "8.95"
        }, {
          "name": "Side Salad",
          "category": "salad",
          "ingredients": "lettuce tomato redonion cucumbers, cheddar jack cheese dressing",
          "description": "romaine lettuce, tomato, red onion, cucumbers, cheddar & jack cheese with choice of dressing",
          "price": "4.95",
          "add-ons": "Add chicken - $4.50 or Fried crawfish tails - $6.00"
        }, {
          "name": "Dressings - Balsamic Vinaigrette, Blue Cheese, Greek, Jalapeno Vinaigrette, Honey Mustard, Ranch"
        }, {
          "name": "Buffalo Chicken Sandwich",
          "category": "sandwich chicken wrap",
          "ingredients": "chicken blue cheese buffalo sauce",
          "description": "(fried or grilled) topped with melted blue cheese crumbles on a kaiser roll",
          "price": "9.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Chicken Pita",
          "category": "chicken sandwich wrap",
          "ingredients": "chicken grilled lettuce tomatoes red onion black olive greek dressing pita",
          "description": "grilled chicken, lettuce tomatoes, red onions, black olives, Greek dressing served on a warm pita",
          "price": "9.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Bratwurst",
          "category": "german sandwich wrap",
          "ingredients": "bratwurst sauerkraut bun",
          "description": "served with sauerkraut on a bun",
          "price": "8.50",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Fish Tacos",
          "category": "fish flounder taco sandwich wrap",
          "ingredients": "flounder tortilla pepperjack cheese, pico de gallo lettuce",
          "description": "two soft tortilla tacos stuffed with grilled flounder, pepperjack, pico de gallo & lettuce",
          "price": "9.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Fried Green Tomato BLT",
          "category": "sandwich BLT wrap",
          "ingredients": "bacon fried green tomato lettuce lemon dill mayo",
          "description": "bacon, lettuce, fried green tomato with lemon dill mayo on white bread",
          "price": "8.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "The Deliverance",
          "category": "sandwich wrap",
          "ingredients": "bologna American cheese cole slaw",
          "description": "fried bologna topped with cole slaw and American cheese on white bread",
          "price": "8.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Hot Fried Flounder",
          "category": "fish flounder sandwich wrap",
          "ingredients": "flounder cole slaw tartar hot sauce",
          "description": "topped with cole slaw, tartar sauce, and hot sauce on a kaiser roll",
          "price": "9.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Pork Chop Sandwich",
          "category": "pork chop sandwich wrap",
          "ingredients": "pork chop red onion pepperjack cheese chipotle mayo",
          "description": "(fried or grilled) with fried red onions, pepperjack cheese with chipotle mayo on a kaiser roll",
          "price": "9.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Chili Cheese Dogs",
          "category": "hot dogs sandwich wrap",
          "ingredients": "hot dogs chili cheddar cheese scallions",
          "description": "two dogs covered in chili, scallions and cheddar cheese",
          "price": "9.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Mexiclub",
          "category": "chicken sandwich wrap",
          "ingredients": "grilled chicken bacon avocado Cholula cheddar cheese chipotle mayo focaccia",
          "description": "grilled chicken, bacon, avocado, Cholula cheddar cheese with chipotle mayo on focaccia bread",
          "price": "9.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Crawfish Po Boy",
          "category": "crawfish sandwich wrap",
          "ingredients": " fried crawfish lettuce tomato jalapeno tartar sauce",
          "description": "fried crawfish tails, jalapeno tartar sauce, lettuce and tomato on a pressed sub roll",
          "price": "9.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Smoked Turkey",
          "category": "sandwich turkey wrap famous",
          "ingredients": "turkey avocado bacon pepperjack cheese chipotle mayo",
          "description": "with avocado, bacon, pepperjack cheese, with chipotle mayo on a pressed sub roll",
          "price": "8.95",
          "add-ons": "choice of french fries, potato salad, cole slaw, or red beans and rice",
          "subs": "side salad or loaded fries may be substituted for $1.50"
        }, {
          "name": "Wiener Schnitzel",
          "category": "entree veal german famous",
          "ingredients": "veal lobster cream sauce potato cakes cabbage",
          "description": "breaded and fried veal, served with traditional potato cakes, topped with a lobster cream sauce and a side of steamed cabbage",
          "price": "13.95"
        }, {
        	"name": "Huevos Rancheros",
          "category": "brunch",
          "ingredients": "sunny-side eggs jack cheese tortilla ranchero tomato sauce scallion grits",
          "description": "*BRUNCH* 2 sunny-side up eggs with tortilla spikes, spicy tomato sauce, jack cheese & scallions with a side of grits",
          "price": "8.95"
        }, {
        	"name": "Chicken and Waffles",
          "category": "brunch",
          "ingredients": "fried chicken breast wing waffle maple syrup",
          "description": "*BRUNCH* 3 southern-fried chicken wings ($6.95) or fried chicken breast ($8.95) with a belgian waffle & syrup",
          "price": "6.95, 8.95"
        }, {
        	"name": "Southern Comfort Plate",
          "category": "brunch",
          "ingredients": "scrambled eggs fried green tomatoes blackened shrimp grits",
          "description": "*BRUNCH* fried green tomatoes, blackened shrimp scrambled eggs & a side of grits ",
          "price": "10.95"
        }, {
        	"name": "Bloody Mary Crawfish Omelette",
          "category": "brunch",
          "ingredients": "eggs omelette crawfish bloody mary cream cheese sauce grits",
          "description": "*BRUNCH* sauteed crawfish with bloody mary cream cheese sauce with a side of grits",
          "price": "10.95"
        }, {
        	"name": "Monte Cristo",
          "category": "brunch",
          "ingredients": "sandwich bacon turkey swiss egg maple syrup grits",
          "description": "*BRUNCH* turkey & swiss dipped in egg & grilled with syrup, bacon & grits",
          "price": "8.95"
        }, {
        	"name": "West Of Omelette",
          "category": "brunch",
          "ingredients": "eggs omelette turkey cheese onions green peppers grits",
          "description": "*BRUNCH* cheese, turkey, onions, green peppers with a side of grits",
          "price": "8.95"
        }, {
        	"name": "Country Fried Steak",
          "category": "brunch",
          "ingredients": "sunny side egg country fried steak red bean mashed potatoes gravy ranchero scallion",
          "description": "*BRUNCH* with red-eye ranchero gravy & a sunny-side up egg on red bean mash with gravy",
          "price": "10.95"
        }, {
        	"name": "\"B.C.B\"",
        	"category": "brunch",
        	"ingredients": "scambled eggs bacon grits",
        	"description": "*BRUNCH* 2 scrambled eggs, bacon with a side of grits",
        	"price": "5.50"
        }, {
        	"name": "Loaded Grits",
        	"category": "brunch",
        	"ingredients": "bacon grits scallion cheese sour cream",
        	"description": "*BRUNCH* bowl of grits with cheese, bacon, scallions topped with sour cream",
        	"price": "5.95"
        }, {
        	"name": "Shrimp Sausage and Grits",
        	"category": "brunch",
        	"ingredients": "bacon grits scallion sour cream cheese",
        	"description": "*BRUNCH* shrimp sausage and grits with gravy, cheese, & scallions",
        	"price": "10.95"
        }
        ]

        $scope.menus = foodmenu;
        $scope.results = [];
      })

    .controller('HoursController', function ($scope) {

      $scope.hours = function () {
          var todayDate = new Date();
          console.log(todayDate);
          var weekday = todayDate.getDay();
          var todayHours = todayDate.getHours();
          var todayMinutes = todayDate.getMinutes();
          var todaySeconds = todayDate.getSeconds();
          var todayTime = todayHours + ":" + todayMinutes + ":" + todaySeconds;
          var openOrClosed = $scope.hours;
          console.log(todayTime);
          console.log(todayHours);
          console.log(todayMinutes);
          console.log(todaySeconds);
          console.log(weekday);
          // console.log(todayHours >= 2 && todayHours <= 11 + todayMinutes <= 30);
          if (todayHours >= 2 && (todayHours < 11 && todayMinutes < 30)) {
            openOrClosed = "CLOSED";
            return openOrClosed;
          } else if (weekday === 0 && todayHours > 2 || (todayHours > 10 && todayMinutes > 59)) {
            openOrClosed = "CLOSED";
            return openOrClosed;
          } else {
            openOrClosed = "OPEN";
            return openOrClosed;
          }
        }
      })

    .controller('LastCallController', function ($scope) {

      $scope.lastCall = function () {
          var todayDate = new Date();
          var todayHours = todayDate.getHours();
          var todayMinutes = todayDate.getMinutes();
          var todaySeconds = todayDate.getSeconds();
          var todayTime = todayHours + ":" + todayMinutes + ":" + todaySeconds;
          var openOrClosed = $scope.lastCall;
          if (todayTime >= "0:30:0" && todayTime <= "0:59:59" ) {
            openOrClosed = "KITCHEN CLOSES VERY SOON!";
            return openOrClosed;
          } else if (todayTime >= "1:30:0" && todayTime <= "1:44:59" ) {
            openOrClosed = "IT'S LAST CALL, Y'ALL!";
            return openOrClosed;
          }
        }
      })

}());


function initMap() {
    var mapDiv = document.getElementById('mapBox');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 32.781783, lng: -79.985902},
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    }


// App.controller('ScoreboardCtrl', function($scope, $http) {
//   $http.get('scoreboard.json')
//     .then(function(res){
//       // Storing the json data object as 'scores'
//       $scope.scores = res.data;
//     });
// });
