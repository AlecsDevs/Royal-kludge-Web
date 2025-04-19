import React from "react";
import bg from "../assets/background.png";
import "../style/Home.css";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),url(${bg})`,
      }}
    >
      <div className="container">
        <h1 class="title">
          ROYAL KLUDGE THE <br />
          MECHANICAL KEYBOARD HUB
        </h1>

        <p class="subtitle">
          Your Gateway to Mechanical Mastery suggests that the website serves as
          a portal <br />
          for enthusiasts to delve into the world of mechanical
        </p>

       
        <Link to="product" smooth={true} duration={500}> <button className="btn">View now</button></Link>
      </div>
    </div>
  );
};

export default Home;
