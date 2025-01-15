import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/product.css";

export default function ProductList({ search, selectedCategoryId, onAddToCart }) {
  const [allprod, setProd] = useState([]);
  const [filteredProd, setFilteredProd] = useState([]);

  console.log("alll Prodd", allprod);
  console.log("alll Filtered", filteredProd);

  useEffect(() => {
    fetchProd();
  }, []);

  useEffect(() => {
    if (search) {
      const filtered = allprod.filter((prod) =>
        prod.Name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProd(filtered);
    } else {
      setFilteredProd(allprod);
    }
  }, [search, allprod]);

  useEffect(() => {
    if (selectedCategoryId) {
      fetchProd(selectedCategoryId);
    }
  }, [selectedCategoryId]);

  const fetchProd = (categoryId = null) => {
    let url = "http://localhost:3000/api/product/";
    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }

    axios
      .get(url)
      .then((res) => {
        setProd(res.data);
        setFilteredProd(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="product-list">
      {filteredProd.map((ele) => (
        <div className="card" style={{ width: "18rem" }} key={ele.id}>
          <img src={ele.imageUrl} className="card-img-top" alt={ele.Name} />
          <div className="card-body">
            <h5 className="card-title">{ele.Name}</h5>
            <p className="card-text">Price: {ele.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => onAddToCart(ele)} // Call the onAddToCart function with the product
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
