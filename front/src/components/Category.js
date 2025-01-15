import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Category() {
  const [dataCateg, setCateg] = useState([])

  console.log("dataCateg", dataCateg)

  useEffect(() => {
    fetchCateg()
  }, [])

  const fetchCateg = () => {
    axios.get("http://localhost:3000/api/category/")
      .then((res) => {
        setCateg(res.data)
      })
      .catch((err) => {
        console.log("fama error gad rasek", err)
      })
  }

  return (
    <div>
      <h4>Category:</h4>
      <select>
        {dataCateg.map((ele, i) => (
          <option key={i} value={ele.Name}>
            {ele.Name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Category
