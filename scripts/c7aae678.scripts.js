"use strict";angular.module("longformApp",["ngCookies","ngResource","ngSanitize","ngRoute","longformApp.services"]).config(["$routeProvider","$provide",function(a,b){b.value("spreadsheet_url","0Aqqh1cRUSxC-dDNJR0d5MWg2OWExd2ZKVVFWUGM0YVE"),a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("longformApp.services",["ngResource"]).value("version","0.1").factory("Gdocs",["$resource","$rootScope","$http",function(a,b,c){function d(a){for(var b=a.feed.entry,c={thead:[],tbody:[]},d=1,e=0;e<b.length;e++){var f=parseInt(b[e].gs$cell.row),g=parseInt(b[e].gs$cell.col),h=b[e].gs$cell.$t;f!=d&&(d=f),1==f?c.thead.push(h):(1==g&&c.tbody.push([]),c.tbody[f-2].push(h))}return c}var e={};return e.getSpreadsheetTabletop=function(a){Tabletop.init({key:"0Ar0dGuti6jq3dDYydTJSVGw0WWE1YV9qMnF0ZlE5LUE",callback:function(c){a&&"function"==typeof a&&b.$apply(function(){a(c)})},simpleSheet:!0,parseNumbers:!0})},e.getSpreadsheet=function(a){var b="https://spreadsheets.google.com/feeds/cells/0Ar0dGuti6jq3dDYydTJSVGw0WWE1YV9qMnF0ZlE5LUE/od6/public/values?alt=json-in-script&callback=JSON_CALLBACK";c.jsonp(b).success(function(b){a(d(b))})},e}]);var sheet_url="";angular.module("longformApp").controller("MainCtrl",["$scope","Gdocs",function(a,b){b.getSpreadsheetTabletop(function(a){console.dir(a)})}]);