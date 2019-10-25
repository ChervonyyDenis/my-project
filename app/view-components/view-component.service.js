angular.module('ViewComponentsModule')
    .provider('viewComponent', function () {
        var initialAllowedComponents = {
                foo: {
                    inspectorConfiguration: {
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
                    },
                    data: {
                        name: 'foo',
                        description: 'color is blue'
                    }
                },
                bar: {
                    inspectorConfiguration: {
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
                    },
                    data: {
                        name: 'bar',
                        description: 'color is green'
                    }
                }
            },
            components = [];

        return {
            componentRegisterConstructor: function (descriptor) {
                var component = {};

                component.name = descriptor.name;
                component.configuration = Object.keys(descriptor.inspectorConfiguration)
                    .map(function (propertyName) {
                        return {propertyName: propertyName, configuration: descriptor.inspectorConfiguration[propertyName]};
                    });
                component.data = descriptor.data;

                components.push(component);
            },

            registerComponent: function (descriptor) {
                if (descriptor) {
                    this.componentRegisterConstructor(descriptor);
                }
            },

            getRegisteredComponents: function () {
                return components;
            },

            $get: function () {
                var _this = this;

                return {
                    getRegisteredComponents: _this.getRegisteredComponents,
                    componentsConfig: initialAllowedComponents
                };
            }
        };
    });
// registry here