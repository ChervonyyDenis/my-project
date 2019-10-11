describe('MySelectDirective', function () {
    var scope,
        compile,
        directiveElement,
        templateCache;

    beforeEach(angular.mock.module('MySelectModule'));
    beforeEach(function () {
        inject(function (_$rootScope_, _$compile_, _$templateCache_) {
            scope = _$rootScope_.$new(true);
            compile = _$compile_;
            templateCache = _$templateCache_;
        });

        directiveElement = getCompiledElement();
    });
    function getCompiledElement() {
        var compiledElement = compile(
            angular.element(templateCache.get('my-select.component.html')))(scope);

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
        // var ngModelCtrl = scope.ngModelController;

        // ngModelCtrl.$setTouched();
        scope.$digest();

        expect(errorMessageElement).toBeDefined();
        // expect(errorMessageElement.text()).toEqual('Field is required!');
    });
});