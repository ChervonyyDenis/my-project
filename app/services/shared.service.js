angular.module('ServicesModule')
    .factory('SharedService', function () {
        var optionsArray = [];

        return {
            getOptions: function () {
                return optionsArray;
            },
            setOptions: function (item) {
                optionsArray.push(item);
            }
        };
    });
