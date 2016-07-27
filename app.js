var app = angular.module('postApp', []);

app.directive('post', function(){
	return {
		restrict: 'AE',
		templateUrl: 'templates/post.html',
		link: function(scope, elem, attrs){
			scope.name = "Karen";
		}
	};
});