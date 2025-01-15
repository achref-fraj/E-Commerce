import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Carousell from "./Carousell";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Category  from "../components/Category";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [search, setSearch] = useState("");



  const fetchCurrentUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/api/user/getUser", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserName(response.data.userName);
    } catch (error) {
      alert("Failed to fetch user details")
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/login"
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const handleSearch = (lawejbjehrabi) => {
    setSearch(lawejbjehrabi)
  };

  return (
    <div>
      <Navbar userName={userName} onLogout={handleLogout} onSearch={handleSearch} />
      <div><Carousell /></div>

      <h3 className="product-list-title">Product List</h3>
      
      <div>
        <Category></Category>
      </div>


      <div><ProductList search={search} /></div>
      <div><Footer /></div>
    </div>
  );
};

export default Home;
