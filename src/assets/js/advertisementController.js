app.controller('advertisementController', ['$scope', 'advertisementService', function ($scope, advertisementService) {

    var advertisement = {
        title:"",
        addittionalId:0,
        price:{baseRent:0,sellPrice:0},
        realestateSummary:{street:"",postalCode:0,city:"",fullAddress:""},
        numberOfRooms:0,
        space:0,
        advertisementAssets:[]


    };

    $scope.advertisements = [];

    var GetAdvertisements = function () {
        var promise = advertisementService.getAdvertisements();

        promise.success(function (response) {
            var top10 = response.data.slice(0,10);

            var advertisements = []
            for(var i = 0; i<10;i++){
                advertisements.push(top10[i]);
            }
            $scope.advertisements = advertisements;

            console.log(advertisements);

        });
        promise.error(function (response) {
            console.log("Error " + response);
        });


    };

    GetAdvertisements();

}]);