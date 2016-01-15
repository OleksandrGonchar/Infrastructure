(function() {
    "use strict";

    angular
        .module("app")
        .controller("Default", Default);

    Default.$inject = ["$scope"];

    function Default($scope, productsData, userData) {
        alert("WORK");
    }

})();