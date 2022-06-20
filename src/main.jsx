import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cats from "./components/Cats/Cats";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/WikiCat" element={<App />} />
                <Route path="/" element={<App />} />
                <Route path="cats" element={<Cats />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
