const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
    products: [
      { 
          product:  { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product"},
          quantity: { type: Number, required: true }
      } 
    ],
},
{ timestamps: true }
)

module.exports = mongoose.model("Cart", cartSchema)