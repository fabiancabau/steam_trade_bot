var steambotApp = angular.module('steambotApp', [])
.config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|steam):/);
    }
]);

steambotApp.controller('SteambotCtrl', function ($scope, $http) {

	$scope.icon_base_url = 'http://cdn.steamcommunity.com/economy/image/';

	$http.get('http://localhost:4100/inventory').then(function(items) {
		console.log(items.data);
		$scope.items = items.data;
	});


});