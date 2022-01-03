import '../../../static/css/myTestimonies.css'
import '../../vendors/angular.min.js'
import '../../vendors/angular-material/angular-material.min.js'
import '../../vendors/angular-aria/angular-aria.min.js'
import '../../vendors/angular-animate/angular-animate.min.js'
import '../../vendors/angular-messages/angular-messages.min.js'
import '../../vendors/angular-material/angular-material.min.css'

import myTestimoniesModule from './myTestimoniesModule'
import navbar from '../navbar/navbar'


var myTestimonies = angular.module('myTestimonies', ['ngMaterial', 'ngMessages', 'navbar', 'myTestimoniesModule']);

myTestimonies.directive('testimony', () => {
    let directive = {}
    directive.restrict = 'E'
    directive.templateUrl = "/directives/testimony.html"
    directive.scope = {
        id: '=id',
        testimony: '=testimony'
    }
    directive.controller = ($scope, $timeout) => {
        $scope.isChozen = $scope.testimony._id === $scope.id;
        $timeout(() => $scope.isChozen = false, 1000)
    }
    return directive
})


myTestimonies.controller('myTestimoniesController', ['$timeout', '$scope', '$http', '$anchorScroll', '$location', '$mdDialog', '$mdToast', 'myTestimoniesHttpMethods', function($timeout, $scope, $http, $anchorScroll, $location, $mdDialog, $mdToast, myTestimoniesHttpMethods) {


    myTestimoniesHttpMethods.getMyTestimonies().then(res => {
        $scope.myTestimonies = res.data;
    }).catch(err => console.log(err))

    $scope.options = ["אין סינון", "שבר", "דלקת", "קרע"]
    $scope.filter = "אין סינון"

    $scope.fu = () => console.log("this is " + $scope.filter)


}]);