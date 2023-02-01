import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProductView from "./routes/CreateProductView";
import ShowProductsView from "./routes/ShowProductsView";
import DetailProductView from "./routes/DetailProductView";
import EditProductView from "./routes/EditProductView";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShowProductsView />} />
                <Route path="/create" element={<CreateProductView />} />
                <Route path="/products/:id" element={<DetailProductView />} />
                <Route
                    path="/products/:id/edit"
                    element={<EditProductView />}
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
