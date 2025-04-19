import React from "react";
import bg from "../assets/background.png";
import "../style/About.css";
const About = () => {
  return (
    <div className="About"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),url(${bg})`,
          }}>
      <div className="contantent">
        <h1 className="Name-1">ABOUT US</h1>

        <p className="Name-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          imperdiet felis sed lacinia cursus. Quisque facilisis id neque quis
          facilisis. Ut sem sapien, feugiat in justo eu, pellentesque dictum
          dolor. Quisque aliquet diam vitae massa tempus, non vehicula nibh
          volutpat. Sed vel venenatis mi. Vivamus porttitor hendrerit erat ut
          blandit. Vestibulum vulputate ipsum vitae blandit faucibus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          imperdiet felis sed lacinia cursus. Quisque facilisis id neque quis
          facilisis. Ut sem sapien, feugiat in justo eu, pellentesque dictum
          dolor. Quisque aliquet diam vitae massa tempus, non vehicula nibh
          volutpat. Sed vel venenatis mi. Vivamus porttitor hendrerit erat ut
          blandit. Vestibulum vulputate ipsum vitae blandit faucibus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          imperdiet felis sed lacinia cursus. Quisque facilisis id neque quis
          facilisis. Ut sem sapien, feugiat in justo eu, pellentesque dictum
          dolor. Quisque aliquet diam vitae massa tempus, non vehicula nibh
          volutpat. Sed vel venenatis mi. Vivamus porttitor hendrerit erat ut
          blandit. Vestibulum vulputate ipsum vitae blandit faucibus.
        </p>
      </div>
    </div>
  );
};

export default About;
