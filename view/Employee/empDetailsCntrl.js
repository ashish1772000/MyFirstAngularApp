appOrg.controller('empDetailsCntrl', ['$scope', 'myFact', '$location', function ($scope, myFact, $location) {
  $scope.Employee = {
        EmpId: myFact.data.Id,
        EmpFirstName: myFact.data.FirstName,
        EmpLastName: myFact.data.LastName,
        EmpEmail: myFact.data.Email
    };
 
    /*    $scope.Employee = {
        EmpId: "1",
        EmpFirstName: "Ashish",
        EmpLastName: "das",
        EmpEmail: "asdasd"
    };
       */
    $scope.back = function () {
        $location.path('/');
    };
}]);