describe('MySelectDirective', function () {
    var scope,
        compile,
        directiveElement;

    beforeEach(function () {
        module('AppModule');
        module('MySelectModule');

        inject(function ($rootScope, $compile) {
            scope = $rootScope;
            compile = $compile;
            scope.options = [
                {displayValue: 'Ukraine', value: 1}
            ];
        });

        directiveElement = getCompiledElement();
    });
    function getCompiledElement() {
        var compiledElement = compile(
            angular.element('<my-select ng-model="options"></my-select>'))(scope);

        scope.$digest();

        return compiledElement;
    }

    it('should create directive', function () {
        expect(directiveElement).toBeDefined();
    });

    it('should have button element', function () {
        var buttonElement = directiveElement.find('button');

        expect(buttonElement).toBeDefined();
    });
});