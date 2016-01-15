(function() {
    "use strict";

    angular
        .module("app")
        .directive("Default", Default);
    function Default() {
        return {
            restrict: "A",
            scope: {}
        }
    }

})();