const mongoose = require("mongoose");

// TODO
// Add category to buyer
const buyerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    aadhaar: {
        type: String,
        required: true
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "order"
        }
    ],
    location: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    }
});

const Buyer = mongoose.model("Buyer", buyerSchema);

module.exports = Buyer;
