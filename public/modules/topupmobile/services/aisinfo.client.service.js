/*app.factory('priceais', ['$http', function($http) {
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);*/
/*angular.module('topupmobile').factory('Myservice', function($http){
    return {
        getdata: function(){
              return $http.get('http://172.20.120.56:3000/ais'); // You Have to give Correct Url either Local path or api etc 

        }
    };
});*/
angular.module('topupmobile').factory('aisinfo', ['$http','$state', function($http,$state) {
  return $http.get('http://www.w3schools.com/angular/customers.php')
         .success(function(data) {
         	//alert('success');
           return data;
         })
         .error(function(data) {
         	//alert('error');
          //$state.go('home');
           return data;
         });
}]);

