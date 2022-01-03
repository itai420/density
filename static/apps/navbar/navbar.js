import navbarModule from './navbarModule'
import '../../../static/css/navBars.css'


var navbar = angular.module('navbar',['navbarModule']);

navbar.directive('navbar',function(){
    let directive={}  
    directive.restrict='E'
    directive.templateUrl ="/directives/navbar.html"
    directive.scope={}
    directive.controller=($scope,$http,navbarHttpMethods)=>{
    $scope.IsOut=true;
    
      navbarHttpMethods.IsUserLogged().then(res => {
        $scope.IsOut=res.data === ""
        if($scope.IsOut){
          $scope.manager=false
        }
        else{
          navbarHttpMethods.IsUserManager().then(res=>{
            $scope.manager=res.data

          })
         }
      }).catch(err => console.log("err is" + err))
    }
    return directive
  
  });
export default navbar
