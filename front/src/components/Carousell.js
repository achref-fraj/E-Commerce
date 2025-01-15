import React from 'react'
import '../css/Carousel.css'
import img1 from '../image/image1.avif'
import img2 from '../image/IMAGE2.jpg'
import img3 from '../image/image3.jpg'

export default function Carousell() {
  return (
    <div>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src={img1} className="d-block w-100 carousel-image" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src={img2} className="d-block w-100 carousel-image" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src={img3} className="d-block w-100 carousel-image" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
