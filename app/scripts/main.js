var app = angular.module('app', []);

app.factory('Steps', function ($resource) {
    return $resource("http://dev-headlessdrupal.pantheon.io/api/views-setup.json");
});


app.controller('headlessController', function($scope, $http, $sce) {

    // Simple GET request examples for view:
    $http({
      method: 'GET',
      url: 'http://dev-headlessdrupal.pantheon.io/api/views/decoupled.json'
    }).then(function successCallback(response) {
      $scope.steps = response;
      console.log($scope.steps);

      }, function errorCallback(response) {
        console.log(response);
      });

    // Get user
    $http({
      method: 'GET',
      url: 'http://dev-headlessdrupal.pantheon.io/api/user/1'
    }).then(function successCallback(response) {
      $scope.user = response.data;
      console.log($scope.user);
      }, function errorCallback(response) {
        console.log(response);
      });


});

// filter the html
app.filter('html', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

app.directive('myRepeatDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      $('#fullpage').fullpage({
        //Navigation
        navigation: true,
        navigationPosition: 'right'
    });
    }
  };
});
