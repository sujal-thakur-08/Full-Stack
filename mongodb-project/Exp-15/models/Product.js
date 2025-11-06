const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  variants: [
    {
      color: { type: String },
      size: { type: String },
      stock: { type: Number, min: 0 }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);