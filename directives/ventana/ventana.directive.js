angular.module('miApp').directive('directiveVentana', directiveVentana);

function directiveVentana() {
    var directive = {
        //templateUrl: 'app/page/home/credit.consumption/step1/insurance/insurance.html',
        //templateUrl: 'ANGULAR/directives/ventana/ventana.html',
        templateUrl: 'directives/ventana/ventana.html',
        restrict: 'EA',
        scope : {
			data : '='
		}
    };
    return directive;
}
