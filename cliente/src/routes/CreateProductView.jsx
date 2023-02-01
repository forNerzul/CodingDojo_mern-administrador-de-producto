import CreateProduct from "../components/CreateProductForm";
import "../css/styles.css";
import "../routes/CreateProductView.css";

const CreateProductView = () => {
    return (
        <div className="container">
            <h1 className="page-header">Create Product</h1>
            <CreateProduct />
        </div>
    );
};
export default CreateProductView;
