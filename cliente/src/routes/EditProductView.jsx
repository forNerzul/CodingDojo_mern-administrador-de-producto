import "./EditProductView.css";
import "../css/styles.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EditProductView = () => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data.product);
                setName(res.data.product.name);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            name,
            price,
            description,
        };

        axios
            .put(`http://localhost:8000/api/products/update/${id}`, newProduct)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container">
            <div className="nav">
                <h1 className="page-header">Edit Product</h1>
                <Link to="/create" className="main-btn">
                    Add Product
                </Link>
                <Link to="/" className="main-btn">
                    List of Products
                </Link>
            </div>
            <form className="create-product-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    value={name}
                />
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    name="price"
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                    value={price}
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    value={description}
                />
                <button type="submit" className="main-btn">
                    Edit
                </button>
            </form>
        </div>
    );
};
export default EditProductView;
