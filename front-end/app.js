var app = angular.module("VoteApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html",
            controller: "HomeListController"
        })
        .when("/post", {
            templateUrl: "components/vote-list/vote-list.html",
            controller: "VoteListController"
        })
        .when("/find", {
            templateUrl: "components/find/find.html",
            controller: "FindController"
        });
}]);