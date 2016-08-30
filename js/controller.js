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
    var labels = 'G';
    var mapDiv = document.getElementById('mapBox');

    var map = new google.maps.Map(mapDiv, {
        center: {lat: 32.781783, lng: -79.985902},
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

    var marker = new google.maps.Marker({
        position: {lat: 32.781783, lng: -79.985902},
        map: map,
        label: labels,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title: 'Gene\'s!'});
        marker.addListener('click', toggleBounce);
    }

function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  /* -------------------------
  OWL carousel
  --------------------------*/

  /*
   *  jQuery OwlCarousel v1.3.3
   *
   *  Copyright (c) 2013 Bartosz Wojciechowski
   *  http://www.owlgraphic.com/owlcarousel/
   *
   *  Licensed under MIT
   *
   */

  /*JS Lint helpers: */
  /*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
  /*jslint nomen: true, continue:true */

  if (typeof Object.create !== "function") {
      Object.create = function (obj) {
          function F() {}
          F.prototype = obj;
          return new F();
      };
  }
  (function ($, window, document) {

      var Carousel = {
          init : function (options, el) {
              var base = this;

              base.$elem = $(el);
              base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

              base.userOptions = options;
              base.loadContent();
          },

          loadContent : function () {
              var base = this, url;

              function getData(data) {
                  var i, content = "";
                  if (typeof base.options.jsonSuccess === "function") {
                      base.options.jsonSuccess.apply(this, [data]);
                  } else {
                      for (i in data.owl) {
                          if (data.owl.hasOwnProperty(i)) {
                              content += data.owl[i].item;
                          }
                      }
                      base.$elem.html(content);
                  }
                  base.logIn();
              }

              if (typeof base.options.beforeInit === "function") {
                  base.options.beforeInit.apply(this, [base.$elem]);
              }

              if (typeof base.options.jsonPath === "string") {
                  url = base.options.jsonPath;
                  $.getJSON(url, getData);
              } else {
                  base.logIn();
              }
          },

          logIn : function () {
              var base = this;

              base.$elem.data("owl-originalStyles", base.$elem.attr("style"));
              base.$elem.data("owl-originalClasses", base.$elem.attr("class"));

              base.$elem.css({opacity: 0});
              base.orignalItems = base.options.items;
              base.checkBrowser();
              base.wrapperWidth = 0;
              base.checkVisible = null;
              base.setVars();
          },

          setVars : function () {
              var base = this;
              if (base.$elem.children().length === 0) {return false; }
              base.baseClass();
              base.eventTypes();
              base.$userItems = base.$elem.children();
              base.itemsAmount = base.$userItems.length;
              base.wrapItems();
              base.$owlItems = base.$elem.find(".owl-item");
              base.$owlWrapper = base.$elem.find(".owl-wrapper");
              base.playDirection = "next";
              base.prevItem = 0;
              base.prevArr = [0];
              base.currentItem = 0;
              base.customEvents();
              base.onStartup();
          },

          onStartup : function () {
              var base = this;
              base.updateItems();
              base.calculateAll();
              base.buildControls();
              base.updateControls();
              base.response();
              base.moveEvents();
              base.stopOnHover();
              base.owlStatus();

              if (base.options.transitionStyle !== false) {
                  base.transitionTypes(base.options.transitionStyle);
              }
              if (base.options.autoPlay === true) {
                  base.options.autoPlay = 5000;
              }
              base.play();

              base.$elem.find(".owl-wrapper").css("display", "block");

              if (!base.$elem.is(":visible")) {
                  base.watchVisibility();
              } else {
                  base.$elem.css("opacity", 1);
              }
              base.onstartup = false;
              base.eachMoveUpdate();
              if (typeof base.options.afterInit === "function") {
                  base.options.afterInit.apply(this, [base.$elem]);
              }
          },

          eachMoveUpdate : function () {
              var base = this;

              if (base.options.lazyLoad === true) {
                  base.lazyLoad();
              }
              if (base.options.autoHeight === true) {
                  base.autoHeight();
              }
              base.onVisibleItems();

              if (typeof base.options.afterAction === "function") {
                  base.options.afterAction.apply(this, [base.$elem]);
              }
          },

          updateVars : function () {
              var base = this;
              if (typeof base.options.beforeUpdate === "function") {
                  base.options.beforeUpdate.apply(this, [base.$elem]);
              }
              base.watchVisibility();
              base.updateItems();
              base.calculateAll();
              base.updatePosition();
              base.updateControls();
              base.eachMoveUpdate();
              if (typeof base.options.afterUpdate === "function") {
                  base.options.afterUpdate.apply(this, [base.$elem]);
              }
          },

          reload : function () {
              var base = this;
              window.setTimeout(function () {
                  base.updateVars();
              }, 0);
          },

          watchVisibility : function () {
              var base = this;

              if (base.$elem.is(":visible") === false) {
                  base.$elem.css({opacity: 0});
                  window.clearInterval(base.autoPlayInterval);
                  window.clearInterval(base.checkVisible);
              } else {
                  return false;
              }
              base.checkVisible = window.setInterval(function () {
                  if (base.$elem.is(":visible")) {
                      base.reload();
                      base.$elem.animate({opacity: 1}, 200);
                      window.clearInterval(base.checkVisible);
                  }
              }, 500);
          },

          wrapItems : function () {
              var base = this;
              base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
              base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
              base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
              base.$elem.css("display", "block");
          },

          baseClass : function () {
              var base = this,
                  hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                  hasThemeClass = base.$elem.hasClass(base.options.theme);

              if (!hasBaseClass) {
                  base.$elem.addClass(base.options.baseClass);
              }

              if (!hasThemeClass) {
                  base.$elem.addClass(base.options.theme);
              }
          },

          updateItems : function () {
              var base = this, width, i;

              if (base.options.responsive === false) {
                  return false;
              }
              if (base.options.singleItem === true) {
                  base.options.items = base.orignalItems = 1;
                  base.options.itemsCustom = false;
                  base.options.itemsDesktop = false;
                  base.options.itemsDesktopSmall = false;
                  base.options.itemsTablet = false;
                  base.options.itemsTabletSmall = false;
                  base.options.itemsMobile = false;
                  return false;
              }

              width = $(base.options.responsiveBaseWidth).width();

              if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                  base.options.items = base.orignalItems;
              }
              if (base.options.itemsCustom !== false) {
                  //Reorder array by screen size
                  base.options.itemsCustom.sort(function (a, b) {return a[0] - b[0]; });

                  for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                      if (base.options.itemsCustom[i][0] <= width) {
                          base.options.items = base.options.itemsCustom[i][1];
                      }
                  }

              } else {

                  if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                      base.options.items = base.options.itemsDesktop[1];
                  }

                  if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                      base.options.items = base.options.itemsDesktopSmall[1];
                  }

                  if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                      base.options.items = base.options.itemsTablet[1];
                  }

                  if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                      base.options.items = base.options.itemsTabletSmall[1];
                  }

                  if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                      base.options.items = base.options.itemsMobile[1];
                  }
              }

              //if number of items is less than declared
              if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                  base.options.items = base.itemsAmount;
              }
          },

          response : function () {
              var base = this,
                  smallDelay,
                  lastWindowWidth;

              if (base.options.responsive !== true) {
                  return false;
              }
              lastWindowWidth = $(window).width();

              base.resizer = function () {
                  if ($(window).width() !== lastWindowWidth) {
                      if (base.options.autoPlay !== false) {
                          window.clearInterval(base.autoPlayInterval);
                      }
                      window.clearTimeout(smallDelay);
                      smallDelay = window.setTimeout(function () {
                          lastWindowWidth = $(window).width();
                          base.updateVars();
                      }, base.options.responsiveRefreshRate);
                  }
              };
              $(window).resize(base.resizer);
          },

          updatePosition : function () {
              var base = this;
              base.jumpTo(base.currentItem);
              if (base.options.autoPlay !== false) {
                  base.checkAp();
              }
          },

          appendItemsSizes : function () {
              var base = this,
                  roundPages = 0,
                  lastItem = base.itemsAmount - base.options.items;

              base.$owlItems.each(function (index) {
                  var $this = $(this);
                  $this
                      .css({"width": base.itemWidth})
                      .data("owl-item", Number(index));

                  if (index % base.options.items === 0 || index === lastItem) {
                      if (!(index > lastItem)) {
                          roundPages += 1;
                      }
                  }
                  $this.data("owl-roundPages", roundPages);
              });
          },

          appendWrapperSizes : function () {
              var base = this,
                  width = base.$owlItems.length * base.itemWidth;

              base.$owlWrapper.css({
                  "width": width * 2,
                  "left": 0
              });
              base.appendItemsSizes();
          },

          calculateAll : function () {
              var base = this;
              base.calculateWidth();
              base.appendWrapperSizes();
              base.loops();
              base.max();
          },

          calculateWidth : function () {
              var base = this;
              base.itemWidth = Math.round(base.$elem.width() / base.options.items);
          },

          max : function () {
              var base = this,
                  maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
              if (base.options.items > base.itemsAmount) {
                  base.maximumItem = 0;
                  maximum = 0;
                  base.maximumPixels = 0;
              } else {
                  base.maximumItem = base.itemsAmount - base.options.items;
                  base.maximumPixels = maximum;
              }
              return maximum;
          },

          min : function () {
              return 0;
          },

          loops : function () {
              var base = this,
                  prev = 0,
                  elWidth = 0,
                  i,
                  item,
                  roundPageNum;

              base.positionsInArray = [0];
              base.pagesInArray = [];

              for (i = 0; i < base.itemsAmount; i += 1) {
                  elWidth += base.itemWidth;
                  base.positionsInArray.push(-elWidth);

                  if (base.options.scrollPerPage === true) {
                      item = $(base.$owlItems[i]);
                      roundPageNum = item.data("owl-roundPages");
                      if (roundPageNum !== prev) {
                          base.pagesInArray[prev] = base.positionsInArray[i];
                          prev = roundPageNum;
                      }
                  }
              }
          },

          buildControls : function () {
              var base = this;
              if (base.options.navigation === true || base.options.pagination === true) {
                  base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
              }
              if (base.options.pagination === true) {
                  base.buildPagination();
              }
              if (base.options.navigation === true) {
                  base.buildButtons();
              }
          },

          buildButtons : function () {
              var base = this,
                  buttonsWrapper = $("<div class=\"owl-buttons\"/>");
              base.owlControls.append(buttonsWrapper);

              base.buttonPrev = $("<div/>", {
                  "class" : "owl-prev",
                  "html" : base.options.navigationText[0] || ""
              });

              base.buttonNext = $("<div/>", {
                  "class" : "owl-next",
                  "html" : base.options.navigationText[1] || ""
              });

              buttonsWrapper
                  .append(base.buttonPrev)
                  .append(base.buttonNext);

              buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                  event.preventDefault();
              });

              buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                  event.preventDefault();
                  if ($(this).hasClass("owl-next")) {
                      base.next();
                  } else {
                      base.prev();
                  }
              });
          },

          buildPagination : function () {
              var base = this;

              base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
              base.owlControls.append(base.paginationWrapper);

              base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
                  event.preventDefault();
                  if (Number($(this).data("owl-page")) !== base.currentItem) {
                      base.goTo(Number($(this).data("owl-page")), true);
                  }
              });
          },

          updatePagination : function () {
              var base = this,
                  counter,
                  lastPage,
                  lastItem,
                  i,
                  paginationButton,
                  paginationButtonInner;

              if (base.options.pagination === false) {
                  return false;
              }

              base.paginationWrapper.html("");

              counter = 0;
              lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

              for (i = 0; i < base.itemsAmount; i += 1) {
                  if (i % base.options.items === 0) {
                      counter += 1;
                      if (lastPage === i) {
                          lastItem = base.itemsAmount - base.options.items;
                      }
                      paginationButton = $("<div/>", {
                          "class" : "owl-page"
                      });
                      paginationButtonInner = $("<span></span>", {
                          "text": base.options.paginationNumbers === true ? counter : "",
                          "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                      });
                      paginationButton.append(paginationButtonInner);

                      paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                      paginationButton.data("owl-roundPages", counter);

                      base.paginationWrapper.append(paginationButton);
                  }
              }
              base.checkPagination();
          },
          checkPagination : function () {
              var base = this;
              if (base.options.pagination === false) {
                  return false;
              }
              base.paginationWrapper.find(".owl-page").each(function () {
                  if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                      base.paginationWrapper
                          .find(".owl-page")
                          .removeClass("active");
                      $(this).addClass("active");
                  }
              });
          },

          checkNavigation : function () {
              var base = this;

              if (base.options.navigation === false) {
                  return false;
              }
              if (base.options.rewindNav === false) {
                  if (base.currentItem === 0 && base.maximumItem === 0) {
                      base.buttonPrev.addClass("disabled");
                      base.buttonNext.addClass("disabled");
                  } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                      base.buttonPrev.addClass("disabled");
                      base.buttonNext.removeClass("disabled");
                  } else if (base.currentItem === base.maximumItem) {
                      base.buttonPrev.removeClass("disabled");
                      base.buttonNext.addClass("disabled");
                  } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                      base.buttonPrev.removeClass("disabled");
                      base.buttonNext.removeClass("disabled");
                  }
              }
          },

          updateControls : function () {
              var base = this;
              base.updatePagination();
              base.checkNavigation();
              if (base.owlControls) {
                  if (base.options.items >= base.itemsAmount) {
                      base.owlControls.hide();
                  } else {
                      base.owlControls.show();
                  }
              }
          },

          destroyControls : function () {
              var base = this;
              if (base.owlControls) {
                  base.owlControls.remove();
              }
          },

          next : function (speed) {
              var base = this;

              if (base.isTransition) {
                  return false;
              }

              base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
              if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                  if (base.options.rewindNav === true) {
                      base.currentItem = 0;
                      speed = "rewind";
                  } else {
                      base.currentItem = base.maximumItem;
                      return false;
                  }
              }
              base.goTo(base.currentItem, speed);
          },

          prev : function (speed) {
              var base = this;

              if (base.isTransition) {
                  return false;
              }

              if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                  base.currentItem = 0;
              } else {
                  base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
              }
              if (base.currentItem < 0) {
                  if (base.options.rewindNav === true) {
                      base.currentItem = base.maximumItem;
                      speed = "rewind";
                  } else {
                      base.currentItem = 0;
                      return false;
                  }
              }
              base.goTo(base.currentItem, speed);
          },

          goTo : function (position, speed, drag) {
              var base = this,
                  goToPixel;

              if (base.isTransition) {
                  return false;
              }
              if (typeof base.options.beforeMove === "function") {
                  base.options.beforeMove.apply(this, [base.$elem]);
              }
              if (position >= base.maximumItem) {
                  position = base.maximumItem;
              } else if (position <= 0) {
                  position = 0;
              }

              base.currentItem = base.owl.currentItem = position;
              if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                  base.swapSpeed(0);
                  if (base.browser.support3d === true) {
                      base.transition3d(base.positionsInArray[position]);
                  } else {
                      base.css2slide(base.positionsInArray[position], 1);
                  }
                  base.afterGo();
                  base.singleItemTransition();
                  return false;
              }
              goToPixel = base.positionsInArray[position];

              if (base.browser.support3d === true) {
                  base.isCss3Finish = false;

                  if (speed === true) {
                      base.swapSpeed("paginationSpeed");
                      window.setTimeout(function () {
                          base.isCss3Finish = true;
                      }, base.options.paginationSpeed);

                  } else if (speed === "rewind") {
                      base.swapSpeed(base.options.rewindSpeed);
                      window.setTimeout(function () {
                          base.isCss3Finish = true;
                      }, base.options.rewindSpeed);

                  } else {
                      base.swapSpeed("slideSpeed");
                      window.setTimeout(function () {
                          base.isCss3Finish = true;
                      }, base.options.slideSpeed);
                  }
                  base.transition3d(goToPixel);
              } else {
                  if (speed === true) {
                      base.css2slide(goToPixel, base.options.paginationSpeed);
                  } else if (speed === "rewind") {
                      base.css2slide(goToPixel, base.options.rewindSpeed);
                  } else {
                      base.css2slide(goToPixel, base.options.slideSpeed);
                  }
              }
              base.afterGo();
          },

          jumpTo : function (position) {
              var base = this;
              if (typeof base.options.beforeMove === "function") {
                  base.options.beforeMove.apply(this, [base.$elem]);
              }
              if (position >= base.maximumItem || position === -1) {
                  position = base.maximumItem;
              } else if (position <= 0) {
                  position = 0;
              }
              base.swapSpeed(0);
              if (base.browser.support3d === true) {
                  base.transition3d(base.positionsInArray[position]);
              } else {
                  base.css2slide(base.positionsInArray[position], 1);
              }
              base.currentItem = base.owl.currentItem = position;
              base.afterGo();
          },

          afterGo : function () {
              var base = this;

              base.prevArr.push(base.currentItem);
              base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
              base.prevArr.shift(0);

              if (base.prevItem !== base.currentItem) {
                  base.checkPagination();
                  base.checkNavigation();
                  base.eachMoveUpdate();

                  if (base.options.autoPlay !== false) {
                      base.checkAp();
                  }
              }
              if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                  base.options.afterMove.apply(this, [base.$elem]);
              }
          },

          stop : function () {
              var base = this;
              base.apStatus = "stop";
              window.clearInterval(base.autoPlayInterval);
          },

          checkAp : function () {
              var base = this;
              if (base.apStatus !== "stop") {
                  base.play();
              }
          },

          play : function () {
              var base = this;
              base.apStatus = "play";
              if (base.options.autoPlay === false) {
                  return false;
              }
              window.clearInterval(base.autoPlayInterval);
              base.autoPlayInterval = window.setInterval(function () {
                  base.next(true);
              }, base.options.autoPlay);
          },

          swapSpeed : function (action) {
              var base = this;
              if (action === "slideSpeed") {
                  base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
              } else if (action === "paginationSpeed") {
                  base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
              } else if (typeof action !== "string") {
                  base.$owlWrapper.css(base.addCssSpeed(action));
              }
          },

          addCssSpeed : function (speed) {
              return {
                  "-webkit-transition": "all " + speed + "ms ease",
                  "-moz-transition": "all " + speed + "ms ease",
                  "-o-transition": "all " + speed + "ms ease",
                  "transition": "all " + speed + "ms ease"
              };
          },

          removeTransition : function () {
              return {
                  "-webkit-transition": "",
                  "-moz-transition": "",
                  "-o-transition": "",
                  "transition": ""
              };
          },

          doTranslate : function (pixels) {
              return {
                  "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                  "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                  "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                  "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                  "transform": "translate3d(" + pixels + "px, 0px,0px)"
              };
          },

          transition3d : function (value) {
              var base = this;
              base.$owlWrapper.css(base.doTranslate(value));
          },

          css2move : function (value) {
              var base = this;
              base.$owlWrapper.css({"left" : value});
          },

          css2slide : function (value, speed) {
              var base = this;

              base.isCssFinish = false;
              base.$owlWrapper.stop(true, true).animate({
                  "left" : value
              }, {
                  duration : speed || base.options.slideSpeed,
                  complete : function () {
                      base.isCssFinish = true;
                  }
              });
          },

          checkBrowser : function () {
              var base = this,
                  translate3D = "translate3d(0px, 0px, 0px)",
                  tempElem = document.createElement("div"),
                  regex,
                  asSupport,
                  support3d,
                  isTouch;

              tempElem.style.cssText = "  -moz-transform:" + translate3D +
                                    "; -ms-transform:"     + translate3D +
                                    "; -o-transform:"      + translate3D +
                                    "; -webkit-transform:" + translate3D +
                                    "; transform:"         + translate3D;
              regex = /translate3d\(0px, 0px, 0px\)/g;
              asSupport = tempElem.style.cssText.match(regex);
              support3d = (asSupport !== null && asSupport.length === 1);

              isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

              base.browser = {
                  "support3d" : support3d,
                  "isTouch" : isTouch
              };
          },

          moveEvents : function () {
              var base = this;
              if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                  base.gestures();
                  base.disabledEvents();
              }
          },

          eventTypes : function () {
              var base = this,
                  types = ["s", "e", "x"];

              base.ev_types = {};

              if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                  types = [
                      "touchstart.owl mousedown.owl",
                      "touchmove.owl mousemove.owl",
                      "touchend.owl touchcancel.owl mouseup.owl"
                  ];
              } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                  types = [
                      "touchstart.owl",
                      "touchmove.owl",
                      "touchend.owl touchcancel.owl"
                  ];
              } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                  types = [
                      "mousedown.owl",
                      "mousemove.owl",
                      "mouseup.owl"
                  ];
              }

              base.ev_types.start = types[0];
              base.ev_types.move = types[1];
              base.ev_types.end = types[2];
          },

          disabledEvents :  function () {
              var base = this;
              base.$elem.on("dragstart.owl", function (event) { event.preventDefault(); });
              base.$elem.on("mousedown.disableTextSelect", function (e) {
                  return $(e.target).is('input, textarea, select, option');
              });
          },

          gestures : function () {
              /*jslint unparam: true*/
              var base = this,
                  locals = {
                      offsetX : 0,
                      offsetY : 0,
                      baseElWidth : 0,
                      relativePos : 0,
                      position: null,
                      minSwipe : null,
                      maxSwipe: null,
                      sliding : null,
                      dargging: null,
                      targetElement : null
                  };

              base.isCssFinish = true;

              function getTouches(event) {
                  if (event.touches !== undefined) {
                      return {
                          x : event.touches[0].pageX,
                          y : event.touches[0].pageY
                      };
                  }

                  if (event.touches === undefined) {
                      if (event.pageX !== undefined) {
                          return {
                              x : event.pageX,
                              y : event.pageY
                          };
                      }
                      if (event.pageX === undefined) {
                          return {
                              x : event.clientX,
                              y : event.clientY
                          };
                      }
                  }
              }

              function swapEvents(type) {
                  if (type === "on") {
                      $(document).on(base.ev_types.move, dragMove);
                      $(document).on(base.ev_types.end, dragEnd);
                  } else if (type === "off") {
                      $(document).off(base.ev_types.move);
                      $(document).off(base.ev_types.end);
                  }
              }

              function dragStart(event) {
                  var ev = event.originalEvent || event || window.event,
                      position;

                  if (ev.which === 3) {
                      return false;
                  }
                  if (base.itemsAmount <= base.options.items) {
                      return;
                  }
                  if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                      return false;
                  }
                  if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                      return false;
                  }

                  if (base.options.autoPlay !== false) {
                      window.clearInterval(base.autoPlayInterval);
                  }

                  if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                      base.$owlWrapper.addClass("grabbing");
                  }

                  base.newPosX = 0;
                  base.newRelativeX = 0;

                  $(this).css(base.removeTransition());

                  position = $(this).position();
                  locals.relativePos = position.left;

                  locals.offsetX = getTouches(ev).x - position.left;
                  locals.offsetY = getTouches(ev).y - position.top;

                  swapEvents("on");

                  locals.sliding = false;
                  locals.targetElement = ev.target || ev.srcElement;
              }

              function dragMove(event) {
                  var ev = event.originalEvent || event || window.event,
                      minSwipe,
                      maxSwipe;

                  base.newPosX = getTouches(ev).x - locals.offsetX;
                  base.newPosY = getTouches(ev).y - locals.offsetY;
                  base.newRelativeX = base.newPosX - locals.relativePos;

                  if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                      locals.dragging = true;
                      base.options.startDragging.apply(base, [base.$elem]);
                  }

                  if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                      if (ev.preventDefault !== undefined) {
                          ev.preventDefault();
                      } else {
                          ev.returnValue = false;
                      }
                      locals.sliding = true;
                  }

                  if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                      $(document).off("touchmove.owl");
                  }

                  minSwipe = function () {
                      return base.newRelativeX / 5;
                  };

                  maxSwipe = function () {
                      return base.maximumPixels + base.newRelativeX / 5;
                  };

                  base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                  if (base.browser.support3d === true) {
                      base.transition3d(base.newPosX);
                  } else {
                      base.css2move(base.newPosX);
                  }
              }

              function dragEnd(event) {
                  var ev = event.originalEvent || event || window.event,
                      newPosition,
                      handlers,
                      owlStopEvent;

                  ev.target = ev.target || ev.srcElement;

                  locals.dragging = false;

                  if (base.browser.isTouch !== true) {
                      base.$owlWrapper.removeClass("grabbing");
                  }

                  if (base.newRelativeX < 0) {
                      base.dragDirection = base.owl.dragDirection = "left";
                  } else {
                      base.dragDirection = base.owl.dragDirection = "right";
                  }

                  if (base.newRelativeX !== 0) {
                      newPosition = base.getNewPosition();
                      base.goTo(newPosition, false, "drag");
                      if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                          $(ev.target).on("click.disable", function (ev) {
                              ev.stopImmediatePropagation();
                              ev.stopPropagation();
                              ev.preventDefault();
                              $(ev.target).off("click.disable");
                          });
                          handlers = $._data(ev.target, "events").click;
                          owlStopEvent = handlers.pop();
                          handlers.splice(0, 0, owlStopEvent);
                      }
                  }
                  swapEvents("off");
              }
              base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
          },

          getNewPosition : function () {
              var base = this,
                  newPosition = base.closestItem();

              if (newPosition > base.maximumItem) {
                  base.currentItem = base.maximumItem;
                  newPosition  = base.maximumItem;
              } else if (base.newPosX >= 0) {
                  newPosition = 0;
                  base.currentItem = 0;
              }
              return newPosition;
          },
          closestItem : function () {
              var base = this,
                  array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                  goal = base.newPosX,
                  closest = null;

              $.each(array, function (i, v) {
                  if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                      closest = v;
                      if (base.options.scrollPerPage === true) {
                          base.currentItem = $.inArray(closest, base.positionsInArray);
                      } else {
                          base.currentItem = i;
                      }
                  } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                      if (base.options.scrollPerPage === true) {
                          closest = array[i + 1] || array[array.length - 1];
                          base.currentItem = $.inArray(closest, base.positionsInArray);
                      } else {
                          closest = array[i + 1];
                          base.currentItem = i + 1;
                      }
                  }
              });
              return base.currentItem;
          },

          moveDirection : function () {
              var base = this,
                  direction;
              if (base.newRelativeX < 0) {
                  direction = "right";
                  base.playDirection = "next";
              } else {
                  direction = "left";
                  base.playDirection = "prev";
              }
              return direction;
          },

          customEvents : function () {
              /*jslint unparam: true*/
              var base = this;
              base.$elem.on("owl.next", function () {
                  base.next();
              });
              base.$elem.on("owl.prev", function () {
                  base.prev();
              });
              base.$elem.on("owl.play", function (event, speed) {
                  base.options.autoPlay = speed;
                  base.play();
                  base.hoverStatus = "play";
              });
              base.$elem.on("owl.stop", function () {
                  base.stop();
                  base.hoverStatus = "stop";
              });
              base.$elem.on("owl.goTo", function (event, item) {
                  base.goTo(item);
              });
              base.$elem.on("owl.jumpTo", function (event, item) {
                  base.jumpTo(item);
              });
          },

          stopOnHover : function () {
              var base = this;
              if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
                  base.$elem.on("mouseover", function () {
                      base.stop();
                  });
                  base.$elem.on("mouseout", function () {
                      if (base.hoverStatus !== "stop") {
                          base.play();
                      }
                  });
              }
          },

          lazyLoad : function () {
              var base = this,
                  i,
                  $item,
                  itemNumber,
                  $lazyImg,
                  follow;

              if (base.options.lazyLoad === false) {
                  return false;
              }
              for (i = 0; i < base.itemsAmount; i += 1) {
                  $item = $(base.$owlItems[i]);

                  if ($item.data("owl-loaded") === "loaded") {
                      continue;
                  }

                  itemNumber = $item.data("owl-item");
                  $lazyImg = $item.find(".lazyOwl");

                  if (typeof $lazyImg.data("src") !== "string") {
                      $item.data("owl-loaded", "loaded");
                      continue;
                  }
                  if ($item.data("owl-loaded") === undefined) {
                      $lazyImg.hide();
                      $item.addClass("loading").data("owl-loaded", "checked");
                  }
                  if (base.options.lazyFollow === true) {
                      follow = itemNumber >= base.currentItem;
                  } else {
                      follow = true;
                  }
                  if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                      base.lazyPreload($item, $lazyImg);
                  }
              }
          },

          lazyPreload : function ($item, $lazyImg) {
              var base = this,
                  iterations = 0,
                  isBackgroundImg;

              if ($lazyImg.prop("tagName") === "DIV") {
                  $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                  isBackgroundImg = true;
              } else {
                  $lazyImg[0].src = $lazyImg.data("src");
              }

              function showImage() {
                  $item.data("owl-loaded", "loaded").removeClass("loading");
                  $lazyImg.removeAttr("data-src");
                  if (base.options.lazyEffect === "fade") {
                      $lazyImg.fadeIn(400);
                  } else {
                      $lazyImg.show();
                  }
                  if (typeof base.options.afterLazyLoad === "function") {
                      base.options.afterLazyLoad.apply(this, [base.$elem]);
                  }
              }

              function checkLazyImage() {
                  iterations += 1;
                  if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                      showImage();
                  } else if (iterations <= 100) {//if image loads in less than 10 seconds
                      window.setTimeout(checkLazyImage, 100);
                  } else {
                      showImage();
                  }
              }

              checkLazyImage();
          },

          autoHeight : function () {
              var base = this,
                  $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                  iterations;

              function addHeight() {
                  var $currentItem = $(base.$owlItems[base.currentItem]).height();
                  base.wrapperOuter.css("height", $currentItem + "px");
                  if (!base.wrapperOuter.hasClass("autoHeight")) {
                      window.setTimeout(function () {
                          base.wrapperOuter.addClass("autoHeight");
                      }, 0);
                  }
              }

              function checkImage() {
                  iterations += 1;
                  if (base.completeImg($currentimg.get(0))) {
                      addHeight();
                  } else if (iterations <= 100) { //if image loads in less than 10 seconds
                      window.setTimeout(checkImage, 100);
                  } else {
                      base.wrapperOuter.css("height", ""); //Else remove height attribute
                  }
              }

              if ($currentimg.get(0) !== undefined) {
                  iterations = 0;
                  checkImage();
              } else {
                  addHeight();
              }
          },

          completeImg : function (img) {
              var naturalWidthType;

              if (!img.complete) {
                  return false;
              }
              naturalWidthType = typeof img.naturalWidth;
              if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                  return false;
              }
              return true;
          },

          onVisibleItems : function () {
              var base = this,
                  i;

              if (base.options.addClassActive === true) {
                  base.$owlItems.removeClass("active");
              }
              base.visibleItems = [];
              for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                  base.visibleItems.push(i);

                  if (base.options.addClassActive === true) {
                      $(base.$owlItems[i]).addClass("active");
                  }
              }
              base.owl.visibleItems = base.visibleItems;
          },

          transitionTypes : function (className) {
              var base = this;
              //Currently available: "fade", "backSlide", "goDown", "fadeUp"
              base.outClass = "owl-" + className + "-out";
              base.inClass = "owl-" + className + "-in";
          },

          singleItemTransition : function () {
              var base = this,
                  outClass = base.outClass,
                  inClass = base.inClass,
                  $currentItem = base.$owlItems.eq(base.currentItem),
                  $prevItem = base.$owlItems.eq(base.prevItem),
                  prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                  origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                  animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

              base.isTransition = true;

              base.$owlWrapper
                  .addClass('owl-origin')
                  .css({
                      "-webkit-transform-origin" : origin + "px",
                      "-moz-perspective-origin" : origin + "px",
                      "perspective-origin" : origin + "px"
                  });
              function transStyles(prevPos) {
                  return {
                      "position" : "relative",
                      "left" : prevPos + "px"
                  };
              }

              $prevItem
                  .css(transStyles(prevPos, 10))
                  .addClass(outClass)
                  .on(animEnd, function () {
                      base.endPrev = true;
                      $prevItem.off(animEnd);
                      base.clearTransStyle($prevItem, outClass);
                  });

              $currentItem
                  .addClass(inClass)
                  .on(animEnd, function () {
                      base.endCurrent = true;
                      $currentItem.off(animEnd);
                      base.clearTransStyle($currentItem, inClass);
                  });
          },

          clearTransStyle : function (item, classToRemove) {
              var base = this;
              item.css({
                  "position" : "",
                  "left" : ""
              }).removeClass(classToRemove);

              if (base.endPrev && base.endCurrent) {
                  base.$owlWrapper.removeClass('owl-origin');
                  base.endPrev = false;
                  base.endCurrent = false;
                  base.isTransition = false;
              }
          },

          owlStatus : function () {
              var base = this;
              base.owl = {
                  "userOptions"   : base.userOptions,
                  "baseElement"   : base.$elem,
                  "userItems"     : base.$userItems,
                  "owlItems"      : base.$owlItems,
                  "currentItem"   : base.currentItem,
                  "prevItem"      : base.prevItem,
                  "visibleItems"  : base.visibleItems,
                  "isTouch"       : base.browser.isTouch,
                  "browser"       : base.browser,
                  "dragDirection" : base.dragDirection
              };
          },

          clearEvents : function () {
              var base = this;
              base.$elem.off(".owl owl mousedown.disableTextSelect");
              $(document).off(".owl owl");
              $(window).off("resize", base.resizer);
          },

          unWrap : function () {
              var base = this;
              if (base.$elem.children().length !== 0) {
                  base.$owlWrapper.unwrap();
                  base.$userItems.unwrap().unwrap();
                  if (base.owlControls) {
                      base.owlControls.remove();
                  }
              }
              base.clearEvents();
              base.$elem
                  .attr("style", base.$elem.data("owl-originalStyles") || "")
                  .attr("class", base.$elem.data("owl-originalClasses"));
          },

          destroy : function () {
              var base = this;
              base.stop();
              window.clearInterval(base.checkVisible);
              base.unWrap();
              base.$elem.removeData();
          },

          reinit : function (newOptions) {
              var base = this,
                  options = $.extend({}, base.userOptions, newOptions);
              base.unWrap();
              base.init(options, base.$elem);
          },

          addItem : function (htmlString, targetPosition) {
              var base = this,
                  position;

              if (!htmlString) {return false; }

              if (base.$elem.children().length === 0) {
                  base.$elem.append(htmlString);
                  base.setVars();
                  return false;
              }
              base.unWrap();
              if (targetPosition === undefined || targetPosition === -1) {
                  position = -1;
              } else {
                  position = targetPosition;
              }
              if (position >= base.$userItems.length || position === -1) {
                  base.$userItems.eq(-1).after(htmlString);
              } else {
                  base.$userItems.eq(position).before(htmlString);
              }

              base.setVars();
          },

          removeItem : function (targetPosition) {
              var base = this,
                  position;

              if (base.$elem.children().length === 0) {
                  return false;
              }
              if (targetPosition === undefined || targetPosition === -1) {
                  position = -1;
              } else {
                  position = targetPosition;
              }

              base.unWrap();
              base.$userItems.eq(position).remove();
              base.setVars();
          }

      };

      $.fn.owlCarousel = function (options) {
          return this.each(function () {
              if ($(this).data("owl-init") === true) {
                  return false;
              }
              $(this).data("owl-init", true);
              var carousel = Object.create(Carousel);
              carousel.init(options, this);
              $.data(this, "owlCarousel", carousel);
          });
      };

      $.fn.owlCarousel.options = {

          items : 5,
          itemsCustom : false,
          itemsDesktop : [1199, 4],
          itemsDesktopSmall : [979, 3],
          itemsTablet : [768, 2],
          itemsTabletSmall : false,
          itemsMobile : [479, 1],
          singleItem : false,
          itemsScaleUp : false,

          slideSpeed : 200,
          paginationSpeed : 800,
          rewindSpeed : 1000,

          autoPlay : false,
          stopOnHover : false,

          navigation : false,
          navigationText : ["prev", "next"],
          rewindNav : true,
          scrollPerPage : false,

          pagination : true,
          paginationNumbers : false,

          responsive : true,
          responsiveRefreshRate : 200,
          responsiveBaseWidth : window,

          baseClass : "owl-carousel",
          theme : "owl-theme",

          lazyLoad : false,
          lazyFollow : true,
          lazyEffect : "fade",

          autoHeight : false,

          jsonPath : false,
          jsonSuccess : false,

          dragBeforeAnimFinish : true,
          mouseDrag : true,
          touchDrag : true,

          addClassActive : false,
          transitionStyle : false,

          beforeUpdate : false,
          afterUpdate : false,
          beforeInit : false,
          afterInit : false,
          beforeMove : false,
          afterMove : false,
          afterAction : false,
          startDragging : false,
          afterLazyLoad: false
      };
  }(jQuery, window, document));

  $(document).ready(function() {

    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]

    });

  });

// App.controller('ScoreboardCtrl', function($scope, $http) {
//   $http.get('scoreboard.json')
//     .then(function(res){
//       // Storing the json data object as 'scores'
//       $scope.scores = res.data;
//     });
// });
