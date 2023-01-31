import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import first from "../Assests/1..png";
import second from "../Assests/2..png";
import third from "../Assests/3..png";
import "../styles/Sliderdiv.css";


    // <div className="slider">
    //   <section>
    //     <img src={first} />     
    //     <img src={second} />    
    //     <img src={third} />    
    //   </section>
    // </div>




export default function Sliderdiv() {
  return (
    <div className="slider">
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={first}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={second}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-center w-100"
          src={third}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}
