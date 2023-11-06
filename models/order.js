const mongoose = require("mongoose");
const Schema = mongoose.Schema
const orderSchema = new Schema({
  
})
  
  const Orders = mongoose.model("Order", orderSchema);

  module.exports = { Orders }