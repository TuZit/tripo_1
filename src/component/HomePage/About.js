import React from "react";

function About() {
  return (
    <div className="about">
      <div
        className="about__context"
        data-aos="fade-up"
        data-aos-duration={1700}
        data-aos-easing="ease-in-sine"
      >
        <h4>About Tripo</h4>
        <h2>Your Source for Mobile Entertainment</h2>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
        <button>Learn More</button>
      </div>
      <div className="about__img" data-aos="fade-up" data-aos-duration={1700}>
        <img src="./img/editer.webp" alt="" />
        <div className="about__img-popup">
          <img src="./img/chibi.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
