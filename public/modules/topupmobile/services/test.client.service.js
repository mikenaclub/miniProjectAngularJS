angular.module('topupmobile').factory('testinfo', ['$http', function($http) {
  return $http.get('http://www.w3schools.com/angular/customers.php')
         .success(function(data) {
         	alert('success');
           return data;
         })
         .error(function(data) {
         	alert('error');
           return data;
         });
}]);