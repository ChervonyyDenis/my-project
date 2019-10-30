angular.module('ServicesModule')
    .service('localStorage', function () {
        function saveToLocalStorage(template) {
            var templates = JSON.parse(localStorage.getItem('saved-templates')) || [];

            templates.push(template);

            localStorage.setItem('saved-templates', JSON.stringify(templates));
        }

        function generateSaveId() {
            var savedTemplates = JSON.parse(localStorage.getItem('saved-templates'));

            return savedTemplates ? savedTemplates.length + 1 || 1 : 1;
        }

        function getSavedTemplates() {
            return JSON.parse(localStorage.getItem('saved-templates')) || [];
        }

        function getSavedTemplate(templateId) {
            var savedTemplates = JSON.parse(localStorage.getItem('saved-templates')) || [];

            return (savedTemplates.filter(function (template) {
                return template.id === templateId;
            }))[0];
        }

        return {
            generateSaveId: generateSaveId,
            saveToLocalStorage: saveToLocalStorage,
            getSavedTemplates: getSavedTemplates,
            getSavedTemplate: getSavedTemplate
        };
    });
