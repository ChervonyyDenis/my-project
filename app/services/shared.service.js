angular.module('ServicesModule')
    .factory('SharedService', function () {
        var shared = {};

        shared.optionsArray = [];
        shared.getOptions = function () {
            return shared.optionsArray;
        };
        shared.setOptions = function (item) {
            shared.optionsArray.push(item);
        };

        return shared;
    });