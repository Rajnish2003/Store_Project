const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    discount: {
        type: String
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("store", storeSchema);

//store store as stores in plural form