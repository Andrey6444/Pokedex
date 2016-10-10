(function () {
    angular.module('store')

        .directive("pokemonAll",function() {
            return {
                restrict: "E",
                templateUrl: "/templates/pokemonAll.html",
                controller: "PokemonController",
                controllerAs: "pokCtrl"
            }
        })

        .directive("pokemonSelected",function() {
            return {
                restrict: "E",
                templateUrl: "/templates/pokemonSelected.html",
                controller: "PokemonSelectController",
                controllerAs: "pokSelCtrl"
            }
        })

        .directive("pokemonImageSelected",function() {
            return {
                restrict: "E",
                templateUrl: "/templates/pokemonImgSelected.html",
                controller: "PokemonSelectController",
                controllerAs: "pokSelCtrl"
            }
        })

        .directive("pokemonLs",function() {
            return {
                restrict: "E",
                templateUrl: "/templates/pokemonLs.html",
                controller: "PokemonGetLSController",
                controllerAs: "pokGetLsCtrl"
            }
        })

        .directive("pokemonSelectedLs",function() {
            return {
                restrict: "E",
                templateUrl: "/templates/pokemonSelectedLs.html",
                controller: "PokemonGetLSController",
                controllerAs: "pokGetLsCtrl"
            }
        })


        .directive("pokemonImageSelectedLs",function() {
            return {
                restrict: "E",
                templateUrl: "/templates/pokemonImgSelectedLs.html",
                controller: "PokemonGetLSController",
                controllerAs: "pokGetLsCtrl"
            }
        })
})();
