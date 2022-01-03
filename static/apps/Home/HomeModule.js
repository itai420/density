const HomeModule = angular.module('HomeModule', []);
HomeModule.factory('HomeHttpMethods', ['$http', HomeHttpMethodsFunc])
function HomeHttpMethodsFunc($http) {
    const httpService = {}
    httpService.getQuotes = () => {
        return $http({
          method: 'POST',
          url: '/home',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            "filter":{"Approved":"מאושר"}

          }
        })
      }
    return httpService
}
export default HomeModule