angular.module('miApp').controller('VentanaController', VentanaController);

VentanaController.$inject = ['$scope'];

function VentanaController($scope){

	var vm= this;
	vm.info = $scope.data;
}