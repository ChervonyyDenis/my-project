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

    it('should set option', function () {
        expect(this.$rootScope.selectedOption)
            .toEqual({displayValue: 'England', value: 3});
    });

    it('should display list of options while click by select', function () {
        expect(this.directiveElement[0].querySelector('.my-select_options__wrapper'))
            .toBeNull();

        this.directiveElement.triggerHandler('click');

        expect(
            this.directiveElement[0].querySelector('.my-select_options__wrapper')
                .children
                .length)
            .toBeGreaterThan(0);
    });

    it('should error "required" showed while click button', function () {
        this.directiveElement.find('button').triggerHandler('click');

        expect(this.directiveElement.find('span').html()).toEqual('Field is required!');
    });

    it('should have a three select options', function () {
        this.directiveElement.triggerHandler('click');

        expect(this.directiveElement[0].querySelector('.my-select_options__wrapper')
            .children
            .length).toEqual(this.$rootScope.options.length);
    });


});