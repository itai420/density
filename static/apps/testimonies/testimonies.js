import '../../vendors/angular-material/angular-material.min.css'

import '../../../static/css/testimonies.css'
import '../../vendors/angular.min.js'
import '../../vendors/angular-material/angular-material.min.js'
import '../../vendors/angular-aria/angular-aria.min.js'
import '../../vendors/angular-animate/angular-animate.min.js'
import '../../vendors/angular-messages/angular-messages.min.js'
// import 'https://kit.fontawesome.com/685fee1bbe.js'
import testimoniesModule from './testimoniesModule'
import navbar from '../navbar/navbar'



var Testimonies = angular.module('Testimonies', ['ngMaterial', 'ngMessages', 'navbar', 'testimoniesModule']);

Testimonies.directive('testimony', () => {
    let directive = {}
    directive.restrict = 'E'
    directive.templateUrl = "/directives/testimony.html"
    directive.scope = {
        id: '=id',
        testimony: '=testimony'
    }
    directive.controller = ($scope, $timeout) => {
        $scope.pillsOrBags = () => {
            if (($scope.testimony.Treatment.bagsQuantity !== '0') && ($scope.testimony.Treatment.pillsQuantity !== '0')) return "both"
            if ($scope.testimony.Treatment.bagsQuantity !== '0') return "bags"
            return "pills"
        }
        $scope.took = $scope.pillsOrBags()
        $scope.isChozen = $scope.testimony._id === $scope.id;
        $scope.borderChozen = $scope.testimony._id === $scope.id;
        $timeout(() => $scope.borderChozen = false, 5000)
    }
    return directive
})


Testimonies.controller('TestimoniesController', ['$timeout', '$scope', '$http', '$anchorScroll', '$location', '$mdDialog', '$mdToast', 'testimoniesHttpMethods', function($timeout, $scope, $http, $anchorScroll, $location, $mdDialog, $mdToast, testimoniesHttpMethods) {
    // $scope.getTestimonies = () => testimoniesHttpMethods.getTestimonies()
    $scope.chozen = 'כל הפציעות'

    // $scope.IsUserLogged = () => testimoniesHttpMethods.IsUserLogged();
    $scope.choose = (side) => {
        $scope.chozen = side

    }
    testimoniesHttpMethods.IsUserLogged().then(res => {
        $scope.IsOut = res.data == ""
    }).catch(err => console.log("err is" + err))

    $scope.openToast = () => {
        $mdToast.show(
            $mdToast.simple().textContent('הירשמו וגם אתם תוכלו לשתף').hideDelay(2000).position('top right'))
    }
    testimoniesHttpMethods.getTestimonies().then(res => {
        $scope.Testimonies = res.data.reverse();
        $scope.id = $location.url().substring(1)
        $timeout(() => { $anchorScroll() }, 300)
    }).catch(err => console.log(err))

    $scope.options = ["אין סינון", "שבר", "דלקת", "קרע"]
    $scope.filter = "אין סינון"

    $scope.fu = () => console.log("this is " + $scope.filter)

    $scope.showDialog = (ev) => {
        console.log("open modal")
        $mdDialog.show({
            controller: DialogController,
            templateUrl: '../directives/addTestimony.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            locals: {},
            clickOutsideToClose: true,
            fullscreen: $scope.costumFullscreen
        });
    }

    function DialogController($scope, $mdDialog) {
        $scope.LevelOfinjuries = { "שבר": ["שבר מלא", "שבר מאמץ"], "דלקת": ["דלקת כרונית", "דלקת אקוטית"], "קרע": ["קרע מלא", "קרע חלקי"] }

        $scope.activityLevel = ["1-2 פעמים בשבוע", "3-4 פעמים בשבוע", "5-6 פעמים בשבוע", "7 פעמים בשבוע או יותר"]
        $scope.openLevel = true;

        $scope.hide = () => {
            $mdDialog.hide();
        };
        $scope.cancel = () => {
            $mdDialog.cancel();
        };
        $scope.answer = (answer) => {
            $mdDialog.hide(answer);
        }
        $scope.injuries = ["שבר", "דלקת", "קרע"]

        $scope.updateLevel = () => {
            $scope.openLevel = false;
            $timeout(() => {
                $scope.LevelOfinjuri = $scope.LevelOfinjuries[$scope.filter]
            }, 0)
        }


        // $scope.Add=()=>{
        //   return $http({
        //     method: 'POST',
        //     url: '/testimonies/addTestimonies',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     data: {

        //     }
        //   })
        // }
    };

}]);