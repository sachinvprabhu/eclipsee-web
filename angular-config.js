org={
	vits:{
		eclipsee:{
			app:angular.module("eclipsee",['ngAnimate','ngRoute','angular-loading-bar'])
		},
		controllers: function($scope, $http, $location, $timeout, $route, $routeParams) {
				$timeout(function () {
				$http({url:"controllers/"+$route.current.$$route.loadFrom + ".js",cache:true})
					.then(function (rsponse) {
						eval(rsponse.data);
					});
			});
		},
		bootstrap:function(){
			angular.bootstrap(document,['eclipsee']);
		}
	}
}

org.vits.eclipsee.app.controller("rootAppController",function($scope,$location,$http){
	
});
org.vits.eclipsee.app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller:org.vits.controllers,
				loadFrom:"home"
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller:org.vits.controllers,
				loadFrom:"home"
			})
			.when('/services', {
				templateUrl: 'views/services.html',
				controller:org.vits.controllers,
				loadFrom:"home"
			})
			.when('/clients', {
				templateUrl: 'views/clients.html',
				controller:org.vits.controllers,
				loadFrom:"home"
			})
			.otherwise('/')
	}]
)