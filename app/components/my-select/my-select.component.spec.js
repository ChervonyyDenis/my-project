describe('MySelectDirective', function () {
    var scope,
        compile,
        directiveElement,
        templateCache;

    // beforeEach(angular.mock.module('MySelectModule'));
    beforeEach(function () {
        angular.mock.module('MySelectModule');
        inject(function (_$rootScope_, _$compile_, _$templateCache_) {
            scope = _$rootScope_.$new(true);
            compile = _$compile_;
            templateCache = _$templateCache_;
            scope.options = [
                {displayValue: 'Ukraine', value: 1},
                {displayValue: 'Russia', value: 2}
            ];
            scope.placeholder = 'country you born in';
        });

        directiveElement = getCompiledElement();
    });
    function getCompiledElement() {
        var htmlElement = '<my-select options="options" placeholder="placeholder"></my-select>';

        // var compiledElement = compile(
        //     angular.element('<my-select options="options" placeholder="placeholder"></my-select>'))(scope);
        var compiledElement = compile(
            angular.element(htmlElement), templateCache.put('my-select.component.html'))(scope);

        scope.$digest();

        return compiledElement;
    }

    it('should apply directive template', function () {
        expect(directiveElement.html()).not.toEqual('');
    });

    it('should have a button', function () {
        var buttonElement = directiveElement.find('button');

        expect(buttonElement).toBeDefined();
        expect(buttonElement).not.toEqual('');
    });

    it('should error span have the right text', function () {
        var errorMessageElement = directiveElement.find('error');
        var buttonElement = directiveElement.find('button');

        buttonElement.triggerHandler('click');
        expect(errorMessageElement).toBeDefined();
    });
    it('should select have placeholder', function () {
        var isolateScope = directiveElement.scope();

        isolateScope.placeholder = 'country you live in';
        expect(scope.placeholder).toEqual('country you live in');
    });
    it('should select have options', function () {
        var isolateScope = directiveElement.scope();

        isolateScope.options = [
            {displayValue: 'Ukraine', value: 1},
            {displayValue: 'Russia', value: 2},
            {displayValue: 'England', value: 3}
        ];
        expect(scope.options).toEqual([
            {displayValue: 'Ukraine', value: 1},
            {displayValue: 'Russia', value: 2},
            {displayValue: 'England', value: 3}
        ]);
    });
});