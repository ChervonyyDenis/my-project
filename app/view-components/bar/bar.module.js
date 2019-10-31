angular.module('BarModule', ['ViewComponentsModule'])
    .constant('BarDescriptor', {
        name: 'Bar',
        type: 'bar',
        properties: [
            {
                name: 'name',
                type: 'text',
                isRequired: false
            },
            {
                name: 'description',
                type: 'text'
            }
        ]
    })
    .config(function (viewComponentProvider, BarDescriptor) {
        viewComponentProvider.registerComponent(BarDescriptor);
    });