'use strict';

angular.module('store', ['ngRoute']);

angular.module('store').config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/../index.html'
    });
    /* .when('/whiskey', {
             templateUrl: '/pages/feschenko-oleksandr/index.html'
         }
     )
     .when('/whiskey/:id', {
             templateUrl: '/pages/feschenko-oleksandr/full_index.html'
         }
     )*/
});

(function () {
    angular.module('store').controller("PokemonController", ["$http", function ($http) {
        var _this = this;
        _this.products = [];

        $http.get('/json/pokemon.json').success(function (data) {
            _this.products = data.objects;
        });
    }]).controller('PokemonSelectController', ["$http", function ($http) {
        var self = this;
        self.pokemon = [];
        self.pokemonImg = "";

        this.showPokemonId = function (id, image) {
            this.pokemonId = id;
            this.pokemonImg = image;

            $http.get('http://pokeapi.co/api/v1/pokemon/' + this.pokemonId).success(function (data) {
                self.pokemon = data;
            });
        };
    }]).controller('PokemonTabController', function () {
        this.tab = 1;

        this.setTab = function (tab) {
            this.tab = tab;
        };

        this.isSet = function (tab) {
            return this.tab === tab;
        };
    }).controller('PokemonAddLSController', ["$http", function ($http) {
        var _self = this;
        _self.id = 0;
        _self.pokemon = "";

        this.addLS = function (id) {
            _self.id = id;
            _self.pokemon = "";

            $http.get('http://pokeapi.co/api/v1/pokemon/' + _self.id).success(function (data) {
                _self.pokemon = JSON.stringify(data);
                pokemonAddLs();
            });

            function pokemonAddLs() {
                localStorage.setItem(_self.id, _self.pokemon);
            }
        };
    }]).controller('PokemonGetLSController', function () {
        var _this = this;
        _this.pokemonStr = "";
        _this.pokemons = [];

        console.log(_this.pokemons);

        for (var i = 0; i <= localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage[key];

            if (value) {
                _this.pokemonStr = value;
                _this.pokemons.push(JSON.parse(_this.pokemonStr));
            }
        }
    });
})();
(function () {
    angular.module('store').directive("pokemonAll", function () {
        return {
            restrict: "E",
            templateUrl: "/templates/pokemonAll.html",
            controller: "PokemonController",
            controllerAs: "pokCtrl"
        };
    }).directive("pokemonSelected", function () {
        return {
            restrict: "E",
            templateUrl: "/templates/pokemonSelected.html",
            controller: "PokemonSelectController",
            controllerAs: "pokSelCtrl"
        };
    }).directive("pokemonImageSelected", function () {
        return {
            restrict: "E",
            templateUrl: "/templates/pokemonImgSelected.html",
            controller: "PokemonSelectController",
            controllerAs: "pokSelCtrl"
        };
    }).directive("pokemonLs", function () {
        return {
            restrict: "E",
            templateUrl: "/templates/pokemonLs.html",
            controller: "PokemonGetLSController",
            controllerAs: "pokGetLsCtrl"
        };
    }).directive("pokemonSelectedLs", function () {
        return {
            restrict: "E",
            templateUrl: "/templates/pokemonSelectedLs.html",
            controller: "PokemonGetLSController",
            controllerAs: "pokGetLsCtrl"
        };
    }).directive("pokemonImageSelectedLs", function () {
        return {
            restrict: "E",
            templateUrl: "/templates/pokemonImgSelectedLs.html",
            controller: "PokemonGetLSController",
            controllerAs: "pokGetLsCtrl"
        };
    });
})();