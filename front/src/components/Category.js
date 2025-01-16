import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Category({ onCategoryChange }) {
  const [dataCateg, setCateg] = useState([])

  console.log('dataCateg', dataCateg)

  useEffect(() => {
    fetchCateg();
  }, []);

  const fetchCateg = () => {
    axios
      .get('http://localhost:3000/api/category/')
      .then((res) => {
        setCateg(res.data)
      })
      .catch((err) => {
        console.log('Error:', err)
      });
  };

  const handleCategoryChange = (e) => {
    const selectedCategoryId = e.target.value
    onCategoryChange(selectedCategoryId)
  };

  return (
    <div>
      <h4>Category:</h4>
      <select onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {dataCateg.map((ele, i) => (
          <option key={i} value={ele.id}>
            {ele.Name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Category;
