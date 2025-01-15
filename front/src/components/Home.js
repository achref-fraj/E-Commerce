import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Carousell from "./Carousell";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Category from "../components/Category";

const Home = ({ cart, setCart }) => {
  const [userName, setUserName] = useState("")

  const [search, setSearch] = useState("")

  console.log("search belehy",search)

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategoryChange = (categoryId) => setSelectedCategoryId(categoryId);

  const fetchCurrentUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/api/user/getUser", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserName(response.data.userName);
    } catch (error) {
      alert("Failed to fetch user details");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/login" 
  };

  const handleSearch = (query) => setSearch(query)

  const handleAddToCart = (product) => setCart([...cart, product]);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <div>
      <Navbar userName={userName} onLogout={handleLogout} onSearch={handleSearch} />
      <Carousell />
      <h3 className="product-list-title">Product List</h3>
      <Category onCategoryChange={handleCategoryChange} />
      <ProductList
        search={search}
        selectedCategoryId={selectedCategoryId}
        onAddToCart={handleAddToCart}
      />
      <Footer />
    </div>
  );
};

export default Home;
