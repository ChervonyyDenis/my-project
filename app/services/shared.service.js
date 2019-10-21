angular.module('ServicesModule')
    .factory('SharedService', function () {
        var optionsArray = [],
            inspectorConfiguration;

        return {
            getOptions: function () {
                return optionsArray;
            },
            setOptions: function (item) {
                optionsArray.push(item);
            },
            setInspectorConfiguration: function (config) {
                inspectorConfiguration = config;
            },
            getInspectorConfiguration: function () {
                return inspectorConfiguration;
            }
        };
    });
