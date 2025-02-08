import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";

function Home() {
  return (
    <div className="home">
      <div
        className="headerContainer"
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}>
        <h1>El Bandito's Pizzeria</h1>
        <p>Best Pizza in Town</p>
        <Link to="/Menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
