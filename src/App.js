import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Homepage from "./component/HomePage/Homepage";
import AboutPage from "./component/AboutPage/AboutPage";
import CareersPage from "./component/CareersPage/CareersPage";

import data from "./data/data.json";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".nav").style.top = "0";
      } else {
        document.querySelector(".nav").style.top = "-6rem";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/#contact" element={<Homepage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
