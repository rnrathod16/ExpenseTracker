const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    transactions: [{
        title: {
            type: String
        },
        type: {
            type: String
        },
        amount: {
            type: Number
        }
    }]
})

const User = mongoose.model("User", userSchema);

module.exports = User;