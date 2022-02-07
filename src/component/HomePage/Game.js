import React from "react";

function Game() {
  return (
    <div className="our-game">
      <div
        className="game__header"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-easing="ease-in-sine"
      >
        <h3>Our Game</h3>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>
      </div>
      <div className="game__body">
        <img src="./img/body_bg.webp" alt="" />
        <div
          className="game__items-1"
          data-aos="fade-right"
          data-aos-duration={2000}
          data-aos-delay={1000}
        >
          <div className="game__items-title">
            <img src="./img/kipon_2.webp" alt="" />
            <div className="game__items-title__text">
              <h4>Kipon</h4>
              <p>Casual - Free</p>
            </div>
          </div>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <div className="download-app">
            <img src="./img/app_store.webp" alt="" />
            <img src="./img/ch_play.webp" alt="" />
          </div>
        </div>
        <div
          className="game__items-2"
          data-aos="fade-left"
          data-aos-duration={2000}
          data-aos-delay={1000}
        >
          <div className="game__items-title">
            <img src="./img/robox_2.webp" alt="" />
            <div className="game__items-title__text">
              <h4>Robotrix</h4>
              <p>RPG - Free</p>
            </div>
          </div>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <div className="download-app">
            <img src="./img/app_store.webp" alt="" />
            <img src="./img/ch_play.webp" alt="" />
          </div>
        </div>
        <div
          className="game__items-3"
          data-aos="fade-right"
          data-aos-duration={2000}
          data-aos-delay={3500}
        >
          <div className="game__items-title">
            <img src="./img/treasure_2.webp" alt="" />
            <div className="game__items-title__text">
              <h4>Treasure Box</h4>
              <p>Adventure - Free</p>
            </div>
          </div>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <div className="download-app">
            <img src="./img/app_store.webp" alt="" />
            <img src="./img/ch_play.webp" alt="" />
          </div>
        </div>
        <div
          className="game__items-4"
          data-aos="fade-left"
          data-aos-duration={2000}
          data-aos-delay={3500}
        >
          &gt;
          <img src="./img/pink_ghost.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Game;
