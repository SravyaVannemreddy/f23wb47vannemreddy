const mongoose = require("mongoose")
const riverSchema = mongoose.Schema({
river_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("River", riverSchema)