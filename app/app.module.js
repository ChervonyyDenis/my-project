angular.module('AppModule', [
    'ngRoute',
    'MySelectModule',
    'LayoutModule',
    'InspectorModule',
    'DesignerModule',
    'ViewComponentsModule',
    'FooModule',
    'BarModule'
]);

// 1 механизм регистрации
// доступные компоненты в палетте
// модуль конфиг - провайдер (описание - как будет создан сервис)
// 2 инициализация моделей