(function() {
    "use strict";

    angular
        .module("app")
        .controller("Default", Default);
    function Default() {
        return {
            restrict: "A",
            link : function (){
                alert("WORK");
            },
            scope: {}
        }
    }

})();