angular.module('ViewComponentsModule')
    .provider('viewComponent', function () {
        var components = [];

        return {
            registerComponent: function (descriptor) {
                if (Array.isArray(descriptor)) {
                    descriptor.forEach(function (componentDescriptor) {
                        components.push(componentDescriptor);
                    });
                } else {
                    components.push(descriptor);
                }
            },

            $get: function () {
                return {
                    getComponentDescriptors: function () {
                        return components;
                    },

                    getComponentDescriptor: function (componentType) {
                        return components.find(function (component) {
                            return componentType === component.type;
                        });
                    }
                };
            }
        };
    });