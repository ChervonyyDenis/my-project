angular.module('ServicesModule')
    .factory('SharedService', function () {
        var optionsArray = [];

        return {
            getOptions: function () {
                return optionsArray;
            },
            setOptions: function (item) {
                optionsArray.push(item);
            },
            saveToLocalStorage: function (config) {
                localStorage.setItem('configuration', JSON.stringify(config));
            },
            getFromLocalStorage: function () {
                return JSON.parse(localStorage.getItem('configuration'));
            }
        };
    });
