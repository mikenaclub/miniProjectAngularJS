angular.module('topupmobile').controller('checkServer',[
	'$scope',
	'$http',
	'$state',
	function($scope,$http,$state){
		$scope.checkais = function(){
				$http.get('http://www.w3schools.com/angular/customers.php')
				.success(function(data){
					alert('server ais online');
					$state.go('ais');
				})
				.error(function(data){
					alert('server ais close');
				});
				
		};
		$scope.checkdtac = function(){
				/*$http.get('http://firstservice-testmymini666.rhcloud.com/user')
				.success(function(data){
					alert('server dtac online');
					$state.go('dtac');
				})
				.error(function(data){
					alert('server dtac close');
				});
				
		};*/
			/*$http.get('http://firstservice-testmymini666.rhcloud.com/user').then(
			  function(resp) { // on success
			    alert('server dtac online');
			  },
			  function(resp) { // on error
			    alert('server dtac close');
			  }
			);*/
			var req = {
			 method: 'GET',
			 url: 'http://firstservice-testmymini666.rhcloud.com/user',
			 jsonp: 'callback',
			 dataType: 'jsonp',
			 data: ''
			// username: 'werapat.pondcs32@gmail.com',
			 //password: 'pond666',
			}
			$http(req).then(function(){
				alert('ok');
			}, function(){
				alert('fail')
			});
		};
		$scope.checktrue = function(){
				$http.get('https://firstservice-testmymini666.rhcloud.com/user-werapat.pondcs32@gmail.com:pond666')
				.success(function(data){
					alert('server true online');
					$state.go('true');
				})
				.error(function(data){
					alert('server true close');
				});
				
		};

	}
]);