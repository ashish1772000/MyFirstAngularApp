// Create a Org module
var appOrg = angular.module('appOrg', [
    'ngRoute'
]);

// Create factory
appOrg.factory('myFact', function () {
    return {
        data: {}
    }
});

// Handle routing 
appOrg.config([
    '$routeProvider',
    '$locationProvider',
    '$httpProvider',
    function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.when('/', {
            templateUrl: 'view/Employee/empList.html',
            controller: 'empListCntrl'
        });
        $routeProvider.when('/details', {
            templateUrl: 'view/Employee/empDetails.html',
            controller: 'empDetailsCntrl'
        });
        $routeProvider.otherwise('/');
        // $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/plain, * / *';
        
    }]);



