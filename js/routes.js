app.config(function ($routeProvider) {

    $routeProvider
            .when('/home', {
                templateUrl: '/pages/home.html',
                controller: 'MainController'
            })

        .otherwise({
            redirectTo: '/home'
        });

});