const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts);
    app.get("/api/products/:id", ProductController.findOneSingleProduct);
    app.put(
        "/api/products/update/:id",
        ProductController.updateExistingProduct
    );
    app.post("/api/products/new", ProductController.createNewProduct);
    app.delete(
        "/api/products/delete/:id",
        ProductController.deleteAnExistingProduct
    );
};

// app.get("/api/users/", UserController.findAllUsers);
// app.get("/api/users/:id", UserController.findOneSingleUser);
// app.put("/api/users/update/:id", UserController.updateExistingUser);
// app.post("/api/users/new", UserController.createNewUser);
// app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
