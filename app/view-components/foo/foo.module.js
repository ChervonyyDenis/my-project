angular.module('FooModule', ['ViewComponentsModule'])
    .constant('FooDescriptor', {
        name: 'Foo',
        type: 'foo',
        manager: 'fooManager',
        properties: [
            {
                name: 'name',
                type: 'text',
                isRequired: true
            },
            {
                name: 'description',
                type: 'text'
            }
        ]
    })
    .config(function (viewComponentProvider, FooDescriptor) {
        viewComponentProvider.registerComponent(FooDescriptor);
    });