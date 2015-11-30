var myApp = angular.module('myApp', []);

myApp.controller('yelpController', function ($scope, $http){
	$scope.dataList = [];

	var url = "bootstrap/js/clubs.js"

	$http.get(url).success(function(data){
		$scope.data = data.responses;
		console.log($scope.data);
		
	});
});