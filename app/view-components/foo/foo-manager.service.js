angular.module('ViewComponentsModule')
    .factory('fooManager', function (BaseViewComponentModel) {
        function Foo(config) {
            BaseViewComponentModel.call(this, config);
        }

        Foo.prototype = Object.create(BaseViewComponentModel.prototype);
        Foo.prototype.constructor = Foo;

        return {
            getModel: function (config) {
                config.inspectorConfiguration = {
                    name: {
                        type: 'inspector-text-field',
                        label: 'name',
                        required: true,
                        index: 2
                    },
                    description: {
                        type: 'inspector-text-field',
                        label: 'description',
                        index: 1
                    }
                };
                config.data = {};

                return new Foo(config);
            }
        };
    });