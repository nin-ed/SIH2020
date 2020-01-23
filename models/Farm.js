const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "farmer",
        required: true
    },
    location: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    area: {
        type: Number,
        required: true
    },
    crops: [
        {
            type: String
        }
    ]
});

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;
