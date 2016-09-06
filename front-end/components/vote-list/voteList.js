var app = angular.module("VoteApp");
app.controller("VoteListController", ["$scope", "voteService", "$http", function ($scope, voteService, $http) {
        
//    voteService.getVotes().then(function(response){
//       $scope.voteArray = response.data;
//    });
    
    voteService.getVotes().then(function(data){
            $scope.voteArray = data;
    });

    $scope.voteService = voteService;
    $scope.editing = false;
    
    function addVotesToArray(returnedData){
        votesArray = returnedData
    }
  
    //voteArray = voteService.getVotes();
    
    
    $scope.addVote = function (newVote) {
        voteService.addVote(newVote);        
        //$scope.voteArray.push(newVote);
    }

    $scope.deleteVote = function (vote, index) {
        voteService.deleteVote(vote, index);
        voteService.getVotes().then(function(data){
            $scope.voteArray = data;
        });
    }

    $scope.completeVote = function (vote, index) {
        voteService.updateVote(vote, index);
    }

    $scope.updateVote = function (vote, index) {
        voteService.updateVote(vote, index).then(function() {
            vote.editing = false;
        });
    }
}]);