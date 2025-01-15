import React, { useState } from "react";
import logo from "../image/aaaa.jpg";

const Navbar = ({ userName, onLogout, onSearch }) => {
  const [search, setSearch] = useState("")

  console.log("search paaaaaliiiiiiiiiiz",search)


  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(search)
  };

  const onCartClick=()=>{
// ab9a stana
  }

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <img src={logo} alt="Logo" style={{ width: "70px", height: "auto" }} />
        <a className="navbar-brand">Welcome, {userName}</a>
        <a>All Product</a>
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
