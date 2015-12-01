

var myApp = angular.module('myApp', []);

myApp.controller('yelpController', function ($scope, $http){
	$scope.dataList = [];

	$scope.getYelp = function(){
		var url = "bootstrap/js/clubs.js"
		$http.get(url).success(function(data){
			$scope.data = data.businesses
			console.log($scope.data[8]);
		});
	}

});

document.ready(function(){
	html = '<iframe src="http://snapwidget.com/sc/?h=dG5nYXRsYW50YXxpbnwxNTB8M3wzfHxub3w1fG5vbmV8b25TdGFydHx5ZXN8bm8=&ve=011215" title="Instagram Widget" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:500px; height:150px"></iframe>'
	$('.club-images').html(html)
});
	

