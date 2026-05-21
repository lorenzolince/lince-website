app.config(function ($routeProvider) {

    $routeProvider
            .when('/home', {
                templateUrl: '/pages/home.html',
                controller: 'MainController'
            })

            .when('/servicios', {
                templateUrl: '/pages/servicios.html',
                controller: 'MainController'
            })

            .when('/nosotros', {
                templateUrl: '/pages/nosotros.html',
                controller: 'MainController'
            })

            .when('/contactos', {
                templateUrl: '/pages/contactos.html',
                controller: 'MainController'
            })

        .otherwise({
            redirectTo: '/home'
        });

});