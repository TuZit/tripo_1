import React from "react";
import Nav from "../Nav";
import Introduce from "./Introduce";
import ImageTags from "./ImageTags";
import About from "./About";
import Game from "./Game";
import Contact from "./Contact";
import Footer from "../Footer";

function Homepage() {
  return (
    <div className="main">
      <Nav />
      <Introduce />
      <ImageTags />
      <About />
      <Game />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
