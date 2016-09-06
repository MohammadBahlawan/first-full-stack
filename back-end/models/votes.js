var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var votesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    completed: {
        type: Boolean,
        default: false
        },
    email: {
        type: String,
    },
     phoneNumber: {
        type: Number,
    }
});

module.exports = mongoose.model("votes", votesSchema);


