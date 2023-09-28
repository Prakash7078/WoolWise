import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Wool Market in India "
            subtitle="Find the best quality wool located near your city."
          />

          <form className="flex mx-20 mt-52">
            <div className="box">
              <span className="text-red-900">City</span>
              <input type="text" placeholder="Location" />
            </div>
            <div className="box">
              <span>Wool Quality</span>
              <input type="text" placeholder="Quality Type" />
            </div>
            <div className="box">
              <span>Price Range</span>
              <input type="text" placeholder="Price Range" />
            </div>
            <button className="btn1">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
