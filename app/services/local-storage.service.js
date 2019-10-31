angular.module('ServicesModule')
    .service('localStorage', function ($q) {
        function saveToLocalStorage(saveName, canvasModels) {
            var definitions = JSON.parse(localStorage.getItem('saved-definitions')) || [];

            var definition = {
                id: generateSaveId(),
                name: saveName,
                template: canvasModels
            };

            definitions.push(definition);

            localStorage.setItem('saved-definitions', JSON.stringify(definitions));
        }

        function generateSaveId() {
            var definitions = JSON.parse(localStorage.getItem('saved-definitions'));

            return definitions ? definitions.length + 1 || 1 : 1;
        }

        function getSavedDefinitions() {
            return $q(function (resolve, reject) {
                if (localStorage.getItem('saved-definitions')) {
                    resolve(JSON.parse(localStorage.getItem('saved-definitions')) || []);
                } else {
                    reject('Item did`t found');
                }
            });
        }

        function getSavedDefinition(definitionId) {
            var definitions = JSON.parse(localStorage.getItem('saved-definitions')) || [],
                view = definitions.find(function (definition) {
                    return definition.id === definitionId;
                });

            return $q(function (resolve, reject) {
                if (view) {
                    resolve(view.template || []);
                } else {
                    reject('Item did`t found');
                }
            });
        }

        return {
            saveToLocalStorage: saveToLocalStorage,
            getSavedDefinitions: getSavedDefinitions,
            getSavedDefinition: getSavedDefinition
        };
    });
