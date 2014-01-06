'use strict';

angular.module('mean.locations').controller('LocationsController', ['$scope', '$routeParams', '$location', 'Global', 'Locations', function ($scope, $routeParams, $location, Global, Locations) {
    $scope.global = Global;

    $scope.create = function() {
        var location = new Locations({
            title: this.title,
            content: this.content,
            name: this.name
        });
        location.$save(function(response) {
            $location.path('locations/' + response._id);
        });

        this.title = '';
        this.content = '';
    };

    $scope.remove = function(location) {
        if (location) {
            location.$remove();

            for (var i in $scope.locations) {
                if ($scope.locations[i] === location) {
                    $scope.locations.splice(i, 1);
                }
            }
        }
        else {
            $scope.location.$remove();
            $location.path('locations');
        }
    };

    $scope.update = function() {
        var location = $scope.location;
        if (!location.updated) {
            location.updated = [];
        }
        location.updated.push(new Date().getTime());

        location.$update(function() {
            $location.path('locations/' + location._id);
        });
    };

    $scope.find = function() {
        Locations.query(function(locations) {
            $scope.locations = locations;
        });
    };

    $scope.findOne = function() {
        Locations.get({
            locationId: $routeParams.locationId
        }, function(location) {
            $scope.location = location;
        });
    };
}]);