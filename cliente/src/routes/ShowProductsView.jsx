import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./ShowProductsView.css";
import "../css/styles.css";

const ShowProductsView = () => {
    const [products, setProducts] = useState([]);

    useState(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data.products);
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container">
            <h1 className="page-header">List of Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <Link to={`/products/${product._id}`}>
                            {product.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowProductsView;
