'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Locations',
        'link': 'locations'
    }, {
        'title': 'Create New Location',
        'link': 'locations/create'
    }];
    
    $scope.isCollapsed = false;
}]);