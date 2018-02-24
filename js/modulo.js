			
	// -------------Forma 2 ---------------------------->
		angular.module('miApp', [])
		.controller('miCtrl', miCtrl);
		miCtrl.$inject = ['$scope'];

		function miCtrl ($scope){
			var vm = this;
			vm.mensaje = "Prueba con directivas";
			vm.data = "DATA: Desde Ventana Controller"
		}


		//console.dir(angular);
		//console.dir(angular.copy);
		//console.dir(window.angular);
	// ------------ Forma 1 --------------------------->
	
			/*angular.module('miApp', [])
			.controller('miCtrl', function ($scope) {
				$scope.mensaje = 'AngularJS Paso a Paso';
			});*/
	 	
