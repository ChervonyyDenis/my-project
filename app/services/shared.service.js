angular.module('ServicesModule')
    .factory('SharedService', function () {
        var optionsArray = [],
            elementConfiguration = [];

        return {
            getOptions: function () {
                return optionsArray;
            },
            setOptions: function (item) {
                optionsArray.push(item);
            },
            getElementConfiguration: function () {
                return elementConfiguration;
            },
            saveElementConfiguration: function (config) {
                elementConfiguration = config;
            }
        };
    });
