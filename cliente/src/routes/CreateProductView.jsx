import CreateProduct from "../components/CreateProductView/CreateProductForm";
import "../css/styles.css";
import "../routes/CreateProductView.css";
import { Link } from "react-router-dom";

const CreateProductView = () => {
    return (
        <div className="container">
            <div className="nav">
                <h1 className="page-header">Create Product</h1>
                <Link to="/" className="main-btn">
                    List of Products
                </Link>
            </div>
            <CreateProduct />
        </div>
    );
};
export default CreateProductView;
