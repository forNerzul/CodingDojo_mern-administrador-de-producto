import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailProductView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data.product);
                setProduct(res.data.product);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="container">
            <h1 className="page-header">Detail Product</h1>
            <p>Product ID: {product._id}</p>
            <p>Product Name: {product.name}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.description}</p>
        </div>
    );
};

export default DetailProductView;
