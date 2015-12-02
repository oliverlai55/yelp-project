

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
		$('#recent-pictures').html('<h3>Recent Pictures and Videos</h3>');
		$('#club-images').html(TngHtml);
		$('#club-images2').html(GoldRoomHtml);

		vineHtml= '<iframe src="https://vine.co/v/O6nArUZunmt/embed/simple" width="230" height="230" frameborder="0"></iframe>';
		vineHtml2 = '<iframe src="https://vine.co/v/e1rXZE07XED/embed/simple" width="230" height="230" frameborder="0"></iframe>';
		$('#vine-feed').html(vineHtml);
		$('#vine-feed2').html(vineHtml2);
		<!-- 4:3 aspect ratio -->
		
		videoHtml = '<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/vzis32nUNEo"></iframe></div>';
		videoHtml2 = '<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dpw-BDUDxyo"></iframe></div>';
		$('#club-video').html(videoHtml);
		$('#club-video2').html(videoHtml2);

	});
});

	

	// $scope.clicked = function(){
	// 	alert("you");
	// 	html = '<iframe src="http://snapwidget.com/sc/?h=dG5nYXRsYW50YXxpbnwxNTB8M3wzfHxub3w1fG5vbmV8b25TdGFydHx5ZXN8bm8=&ve=011215" title="Instagram Widget" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="yes" style="border:none; overflow:hidden; width:500px; height:150px"></iframe>'
	// 	var jQueryElement = angular.element(document.querySelector('#club-pic'));
	// 	jQueryElement.html(html);
	// 	console.log(html);
	// 	alert("hi");
	// }

  


