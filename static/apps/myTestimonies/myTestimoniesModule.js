const myTestimoniesModule = angular.module('myTestimoniesModule', []);
myTestimoniesModule.factory('myTestimoniesHttpMethods', ['$http', myTestimoniesHttpMethodsFunc])
function myTestimoniesHttpMethodsFunc($http) {
    const httpService = {}
    httpService.getMyTestimonies = () => {
        return $http({
            method: 'POST',
            url: '/mytestimonies',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
            }
        })
    }
    return httpService
}
export default myTestimoniesModule