describe('MySelectDirective', function () {
    beforeEach(module('MySelectModule', 'templates'));
    beforeEach(inject(function ($rootScope, $compile, $document) {
        this.$rootScope = $rootScope;
        this.$document = $document;
        $rootScope.placeholder = 'placeholder';
        $rootScope.options = [
            {displayValue: 'Ukraine', value: 1},
            {displayValue: 'Russia', value: 2},
            {displayValue: 'England', value: 3}
        ];
        $rootScope.selectedOption = {displayValue: 'England', value: 3};
        this.directiveElement = $compile('<my-select placeholder="placeholder" ng-model="selectedOption" options="options"></my-select>')($rootScope);
        this.$document.find('body')
            .append(this.directiveElement);
        $rootScope.$digest();
    }));

    afterEach(function () {
        this.directiveElement.remove();
    });

    it('should show initial selected option', function () {
        expect(this.directiveElement.find('.my-select_field')
            .html())
            .toEqual(this.$rootScope.selectedOption.displayValue);
    });

    it('should display list of options while click by select', function () {
        expect(this.directiveElement.find('.my-select_options__list'))
            .not
            .toBeInDOM();

        this.directiveElement.triggerHandler('click');

        expect(this.directiveElement.find('.my-select_options__list'))
            .toBeInDOM();

        expect(this.directiveElement.find('.my-select_options__list')[0]
            .children
            .length)
            .toEqual(this.$rootScope.options.length);
    });

    it('should show required validation message if field is blank and dirty', function () {
        this.directiveElement.find('button')
            .triggerHandler('click');

        expect(this.directiveElement.find('.error'))
            .toBeInDOM();
    });

    it('should close dropdown while click outside', function () {
        this.directiveElement.triggerHandler('click');
        this.$document.triggerHandler('click');
        expect(this.directiveElement.find('.my-select_options__list'))
            .not
            .toBeInDOM();
    });
});