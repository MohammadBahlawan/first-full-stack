var express = require("express");
var votesRoutes = express.Router();
var votes = require("../models/votes");

votesRoutes.route("/")
    .get(function (req, res) {
        votes.find(function (err, vote) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(vote);
            }
        });
    })
    .post(function (req, res) {
        var newVote = new votes(req.body);
        newVote.save(function (err, newVoteObj) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(newVoteObj);
            }
        });
    });
votesRoutes.route("/:id")
.get(function (req, res){
    votes.findById(req.params.id, function(err, vote) {
        if (err) {
            res.status(500).send(err);
         } else {
                res.send(vote);
             }
        });
    })
.put(function(req, res) {
        votes.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedVote) {
            if (err) {
                res.status(500).send(err);
            } else {
                 var responseObj = {
                    success: true,
                    message: "Successfully updated the vote",
                    vote: updatedVote
                 };
            }
        })
    })
    .delete(function(req, res) {
       votes.findByIdAndRemove(req.params.id, function(err, deletedVote) {
            if (err) {
                res.status(500).send(err);
            } else {
                var responseObj = {
                    success: true,
                    message: "Successfully deleted the vote",
                    vote: deletedVote
                };
                res.send(responseObj);
            }
        });
    });




module.exports = votesRoutes;