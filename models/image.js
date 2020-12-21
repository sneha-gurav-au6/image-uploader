
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PropertySchema = new Schema({
    image: {
        type: [String]
    }})



module.exports = Property = mongoose.model("Property", PropertySchema);