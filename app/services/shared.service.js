angular.module('ServicesModule')
    .factory('SharedService', function ($q) {
        var selectedList = [];

        return {
            getList: function () {
                return $q.when(selectedList);
            },
            setList: function (list) {
                selectedList.push(list);
            }
        };
    });