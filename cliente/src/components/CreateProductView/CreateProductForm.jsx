import { useState } from "react";
import axios from "axios";

const CreateProductForm = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");

        const newProduct = {
            name,
            price,
            description,
        };

        axios
            .post("http://localhost:8000/api/products/new", newProduct)
            .then((res) => {
                console.log("response from server");
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    return (
        <form className="create-product-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <label htmlFor="price">Price</label>
            <input
                type="number"
                name="price"
                onChange={(e) => {
                    setPrice(e.target.value);
                }}
            />
            <label htmlFor="description">Description</label>
            <input
                type="text"
                name="description"
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <button type="submit" className="main-btn">
                Create
            </button>
        </form>
    );
};

export default CreateProductForm;
