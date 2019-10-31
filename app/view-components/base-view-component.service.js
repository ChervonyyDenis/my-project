angular.module('ViewComponentsModule')
    .factory('baseViewComponentManager', function (viewComponent, BaseViewComponentModel) {
        function createInspector(config) {
            var componentDescriptor = viewComponent.getComponentDescriptor(config.type).properties;

            return componentDescriptor.reduce(function (inspectorConfiguration, property, propertyIndex) {
                inspectorConfiguration[property.name] = {
                    label: property.name.charAt(0)
                        .toUpperCase() + property.name.slice(1),
                    required: property.isRequired,
                    disabled: property.isRequired,
                    index: propertyIndex,
                    type: 'inspector-' + property.type + '-field'
                };

                return inspectorConfiguration;
            }, {});
        }

        return {
            getModel: function (config) {
                config.inspectorConfiguration = createInspector(config);

                return new BaseViewComponentModel(config);
            }
        };
    })
    .factory('BaseViewComponentModel', function () {
        function Model(config) {
            Object.assign(this, config);
        }

        Model.prototype.getInspector = function () {
            return this.inspectorConfiguration;
        };

        Model.prototype.getDisplayName = function () {
            return this.name;
        };

        return Model;
    });
