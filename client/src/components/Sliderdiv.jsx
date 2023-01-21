import React from 'react'
import first from "../Assests/1..png";
import second from "../Assests/2..png";
import third from "../Assests/3..png";
import "../styles/Sliderdiv.css";

export default function Sliderdiv() {

  return (
    <div className="slider">
      <section>
        <img src={first} />     
        <img src={second} />    
        <img src={third} />    
      </section>
    </div>
  )
}
