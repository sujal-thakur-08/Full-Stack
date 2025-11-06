const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/productdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error(err));

// Routes
app.use("/products", productRoutes);

// Start server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));