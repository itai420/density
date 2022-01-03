const AuthenticationModule = angular.module('AuthenticationModule', []);
AuthenticationModule.factory('AuthenticationHttpMethods', ['$http', AuthenticationHttpMethodsFunc])
function AuthenticationHttpMethodsFunc($http) {
    const httpService = {}
    httpService.isSigned = (name, password) => {
        return $http({
            method: 'POST',
            url: '/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                name, password
            }

        })
    }
    httpService.checkIfNamEmailNew = (name, password, email) => {
        return $http({
            method: 'POST',
            url: '/SignUp',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                name, password, email
            }

        })
    }
    return httpService
}
export default AuthenticationModule