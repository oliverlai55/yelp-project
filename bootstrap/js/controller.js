

var myApp = angular.module('myApp', []);

myApp.controller('yelpController', function ($scope, $http, $sce){
	$scope.dataList = [];

	$scope.getYelp = function(){
		var url = "bootstrap/js/clubs.js"
		$http.get(url).success(function(data){
			$scope.data = data.businesses
			console.log($scope.data[8]);
		});
	}

});

$(document).ready(function(){
	$("#search-button").click(function(){
		
		TngHtml = '<iframe src="http://snapwidget.com/sc/?h=dG5nYXRsYW50YXxpbnwxNTB8M3wzfHxub3w1fG5vbmV8b25TdGFydHx5ZXN8bm8=&ve=011215" title="Instagram Widget" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="yes" style="border:none; overflow:hidden; width:500px; height:150px"></iframe>'
		GoldRoomHtml = '<iframe src="http://snapwidget.com/sc/?h=aGF2YW5hYXRsYW50YXxpbnwxNTB8M3wzfHx5ZXN8MjB8bm9uZXxvblN0YXJ0fHllc3xubw==&ve=011215" title="Instagram Widget" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:500px; height:150px"></iframe>'
		$('#club-images').html(TngHtml);
		$('#club-images2').html(GoldRoomHtml);
	});
});

		forecastDays += '<div class="title-day col-sm-3">Day</div>';
		forecastDays += '<div class="title-day2 col-sm-3">2</div>';

	// $scope.clicked = function(){
	// 	alert("you");
	// 	html = '<iframe src="http://snapwidget.com/sc/?h=dG5nYXRsYW50YXxpbnwxNTB8M3wzfHxub3w1fG5vbmV8b25TdGFydHx5ZXN8bm8=&ve=011215" title="Instagram Widget" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="yes" style="border:none; overflow:hidden; width:500px; height:150px"></iframe>'
	// 	var jQueryElement = angular.element(document.querySelector('#club-pic'));
	// 	jQueryElement.html(html);
	// 	console.log(html);
	// 	alert("hi");
	// }

  


