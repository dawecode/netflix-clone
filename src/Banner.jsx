import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80)`,
        backgroundPosition: "center center",
      }}
    ></header>
  );
}

export default Banner;
