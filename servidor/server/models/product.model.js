const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required."],
            minlength: [3, "Name must be at least 3 characters long."],
        },
        price: {
            type: Number,
            required: [true, "Price is required."],
            min: [0, "Price must be at least 0."],
        },
        description: {
            type: String,
            required: [true, "Description is required."],
            minlength: [10, "Description must be at least 10 characters long."],
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
