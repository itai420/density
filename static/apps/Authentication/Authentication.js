import '../../../static/css/authentication.css'
import '../../vendors/angular.min.js'
import '../../vendors/angular-material/angular-material.min.js'
import '../../vendors/angular-aria/angular-aria.min.js'
import '../../vendors/angular-animate/angular-animate.min.js'
import '../../vendors/angular-messages/angular-messages.min.js'
import '../../vendors/angular-material/angular-material.min.css'

import AuthenticationModule from './AuthenticationModule'
import navbar from '../navbar/navbar'

var authentication = angular.module('authentication', ['ngMaterial', 'ngMessages', 'navbar', 'AuthenticationModule']);


authentication.controller('authenticationController', ['$scope', 'AuthenticationHttpMethods', '$mdToast', function($scope, AuthenticationHttpMethods, $mdToast) {
    $scope.passwordType = "password";
    $scope.checkBoxColor = "black"

    $scope.showPassword = () => {
        $scope.passwordType = $scope.passwordType === "password" ? "text" : "password";
        $scope.checkBoxColor = $scope.checkBoxColor === "black" ? "white" : "black";

    }
    $scope.IsSigned = (name, password) => {
        if (!(name && password)) {
            $mdToast.show(
                $mdToast.simple().textContent('נא למלא את כל התאים').hideDelay(2000).position('top left'))
        } else {
            AuthenticationHttpMethods.isSigned(name, password).then(res => {
                if (res.data) window.location.href = "/home";
                else {
                    $mdToast.show(
                        $mdToast.simple().textContent('שם או סיסמא שגויים').hideDelay(2000).position('top left'))
                }
            })
        }

    }

    $scope.openToast = () => {
        $mdToast.show(
            $mdToast.simple().textContent('חיים להיות רשום').hideDelay(2000).position('top left'))
    }

    $scope.checkIfNamEmailNew = (name, password, email) => {
        if (!(name && email && password)) {
            $mdToast.show(
                $mdToast.simple().textContent('נא למלא את כל התאים').hideDelay(2000).position('top left'))
        } else {
            AuthenticationHttpMethods.checkIfNamEmailNew(name, password, email).then(res => {
                if (res.data) window.location.href = "/login";
                if (!res.data) {
                    $mdToast.show(
                        $mdToast.simple().textContent('שם או מייל כבר קיימים במערכת').hideDelay(2000).position('top left'))
                }
            })
        }
    }
}]);