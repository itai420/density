const navbarModule = angular.module('navbarModule', []);
navbarModule.factory('navbarHttpMethods', ['$http', navbarHttpMethodsFunc])
function navbarHttpMethodsFunc($http) {
    const httpService = {}
    httpService.IsUserLogged = () => {
        return $http({
          method: 'POST',
          url: '/IsLogged',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            "Question":"log"
          }
        })
      }
      httpService.IsUserManager = () => {
        return $http({
          method: 'POST',
          url: '/IsLogged',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            "Question":"manager"
          }
        })
      }

    return httpService
}
 export default navbarModule