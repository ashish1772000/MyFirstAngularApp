/* 
appOrg.controller('empListCntrl', ['$scope','myFact', '$location', function ($scope, myFact, $location) {
    $scope.Employees = [
        { Id: 1, FirstName: "Ashish", LastName: "Sharma", Email: "ash@xyz.com" },
        { Id: 2, FirstName: "Bob", LastName: "Tomic", Email: "bob@xyz.com" },
        { Id: 3, FirstName: "Cheery", LastName: "Verma", Email: "cheery@xyz.com" },
        { Id: 4, FirstName: "Dennis", LastName: "Cheerish", Email: "dennis@xyz.com" },
        { Id: 5, FirstName: "Eirik", LastName: "Deardon", Email: "erik@xyz.com" }
    ];


    $scope.itemSelected = function (emp) {
        myFact.data = emp;
        $location.path("/details");
    };  
}]);
*/

appOrg.controller('empListCntrl', ['$scope', 'myFact', '$location', '$http', function ($scope, myFact, $location, $http) {

  $http.defaults.useXDomain = true;
  delete $http.defaults.headers.common['X-Requested-With'];
    
  // $http.get("http://localhost:8080/api/Employee")
  $http.get("http://projectstatus.azurewebsites.net/api/employee")
        .then(function(response){
                $scope.Employees = response.data;
              }, 
              function(error){
                // console.log(error.data);
              }
        );

  //  $scope.getEmployeesFromLocal = function () {
        // $http.get("http://localhost:8080/api/Employee")
        //     .success(function (response) {
        //         myFact.data = response;
        //     });
   // };

      // $scope.Employees = myFact.data;
   // $scope.getEmployeesFromLocal();
    // $scope.Employees = $http.get("http://localhost:8080/api/Employee").success(function (response) { $scope.Employees = response.data;; });
   // $scope.employeeResource = $resource("http://localhost:8080/api/Employee");
   // $scope.Employees = $scope.employeeResource.query(); 


    $scope.itemSelected = function (emp) {
        myFact.data = emp;
        $location.path("/details");
    };
}]);