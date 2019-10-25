angular.module('AppModule', [
    'ngRoute',
    'MySelectModule',
    'LayoutModule',
    'InspectorModule',
    'DesignerModule',
    'ViewComponentsModule'
])
    .constant('initialComponent',
        {
            name: 'foo',
            inspectorConfiguration: {
                name: {
                    type: 'inspector-text-field',
                    label: 'name',
                    required: true,
                    index: 2
                },
                description: {
                    type: 'inspector-text-field',
                    label: 'description',
                    index: 1
                }
            },
            data: {
                name: 'foo',
                description: 'color is blue'
            }
        }
    )
    .config(function ($provide, viewComponentProvider, initialComponent) {
        $provide.provider('viewComponentProvider', viewComponentProvider);
        viewComponentProvider.registerComponent(initialComponent);
    });

// 1 механизм регистрации
// доступные компоненты в палетте
// модуль конфиг - провайдер (описание - как будет создан сервис)
// constant
// 2 инициализация моделей