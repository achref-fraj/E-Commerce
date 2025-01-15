import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../image/aaaa.jpg";

const Navbar = ({ userName, onLogout, onSearch }) => {
  console.log("username",userName)
  const [search, setSearch] = useState("")

  console.log("sarchi bien",search)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(search)
  };

  const onCartClick = () => navigate("/panier")

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <img src={logo} alt="Logo" style={{ width: "70px", height: "auto" }} />
        <a className="navbar-brand">Welcome, {userName}</a>
      
        <form className="d-flex" role="search" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search products..."
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="d-flex">
          <button onClick={onLogout} className="btn btn-outline-danger">
            Logout
          </button>
          <button onClick={onCartClick} className="btn btn-outline-primary me-2">
            Panier
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
