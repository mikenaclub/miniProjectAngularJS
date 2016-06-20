/*angular.module('topupmobile').controller('getValueAis',[
	'$scope',
	function($scope){
		$scope.aisinfo = [{"_id":"576229fbd1ca804202b4f3b2","price":50},{"_id":"57622a16d1ca804202b4f3b3","price":100},{"_id":"57622a1bd1ca804202b4f3b4","price":300},{"_id":"57622a1ed1ca804202b4f3b5","price":500},{"_id":"57622a21d1ca804202b4f3b6","price":1000}];
		//$scope.aisinfo = $http.get('http://172.20.120.56:3000/ais');
		/*$http.get('http://172.20.120.56:3000/ais').then(function(response) {
            $scope.aisinfo = response;
          });*/
		/*$scope.aisinfo = $http.get('http://172.20.120.56:3000/ais').success (function(data) {
		    //$scope.aisinfo = data;
		    return data;
		});
	}
]);*/
/*var myapp = angular.module('topupmobile', []);
myapp.controller('getValueAis', function($scope, $http) {
  $http.get('http://172.20.120.56:3000/ais').success (function(data) {
    $scope.aisinfo = data;
  })
});*/
/*
angular.module('topupmobile').controller('getValueAis',[
	'$scope',function($scope, $http) {
    $http.get("http://172.20.120.56:3000/ais")
    .success(function(response) {$scope.aisinfo = response;});
  }
]);*/
/*app.controller('getValueAis', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
  });
}]);*/
//Work!!!
/*angular.module('topupmobile').controller('getValueAis', ['$scope', 'aisinfo', function($scope, aisinfo) {
  aisinfo.success(function(data) {
    $scope.aisinfo = data;
  });
}]);*/
angular.module('topupmobile').controller('getValueAis', ['$scope', 'aisinfo', function($scope, aisinfo) {
  aisinfo.success(function(data) {
    $scope.aisinfo = data;
  });
}],['$scope', 'testinfo', function($scope, testinfo) {
  testinfo.success(function(data) {
    $scope.testinfo = data.records;
  });
}]
);