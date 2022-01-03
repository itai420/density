const testimoniesModule = angular.module('testimoniesModule', []);
testimoniesModule.factory('testimoniesHttpMethods', ['$http', testimoniesHttpMethodsFunc])
function testimoniesHttpMethodsFunc($http) {
    const httpService = {}

    httpService.getTestimonies = () => {
        return $http({
          method: 'POST',
          url: '/testimonies',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            "filter":{"Approved":"מאושר"}
          }
        })
      }
    
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
    
    return httpService
}
export default testimoniesModule