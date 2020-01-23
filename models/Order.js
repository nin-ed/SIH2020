const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    status: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    current: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    destination: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    orderPlacedTime: {
        type: Date,
        required: true
    },
    expectedDelievery: {
        type: Date,
        required: true
    },
    paymentMode: {
        type: String,
        required: true
    },
    paid: {
        type: Boolean,
        required: true
    }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
