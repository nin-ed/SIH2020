const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    aadhaar: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    farms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "farm"
        }
    ]
});

const Farmer = mongoose.model("Farmer", farmerSchema);

module.exports = Farmer;
