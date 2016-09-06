var app = angular.module("VoteApp");

app.service("voteService", ["$http", function($http){
    var self = this;

    this.getVotes = function() {
        return $http.get("/votes").then(function(response) {
            self.voteList = response.data;
            return response.data;
        });
    };

    this.addVote = function(newVote) {
        return $http.post("/votes", newVote).then(function(response) {
            self.voteList.push(response.data);
        });
    };

    this.deleteVote = function(vote, index) {
        return $http.delete("/votes/" + vote._id).then(function(response) {
            self.voteList.splice(index, 1);
        });
    };

    this.updateVote = function(vote, index) {
        return $http.put("/votes/" + vote._id, vote).then(function(response) {
            self.voteList[index] = response.data;
        })
    };


}]);
