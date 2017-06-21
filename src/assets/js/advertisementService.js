app.service('advertisementService', ['$http', function ($http) {
    this.getAdvertisements = function () {
        return $http({
            method: "GET",
            url: "https://crossorigin.me/https://api.mcmakler.de/v1/advertisements ",
            headers: { 'Content-Type': 'application/json' }
        });
    };
}]);