import React from "react";

import Nav from "../Nav";
import Footer from "../Footer";

import "./About.css";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <section className="AboutPage">
      <Nav />
      <div className="description">
        <div className="description__intro">
          <div
            className="description__intro-head"
            data-aos="fade-right"
            data-aos-duration={1200}
          >
            <h4>We Are Tripo</h4>
            <h2>
              We're creating the best in interactive entertainment by making
              games that change the way people have fun.
            </h2>
          </div>
          <div className="description__intro-grid">
            <div className="description__intro-grid__img">
              <img src="./img/about_6.webp" alt="" />
            </div>
            <div className="description__intro-grid__content">
              <p
                data-aos="fade-right"
                data-aos-duration={1200}
                data-aos-delay="300"
              >
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration={1200}
                data-aos-delay="300"
              >
                This is a great space to write a long text about your company
                and your services. You can use this space to go into a little
                more detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out and
                show your visitors who you are.
              </p>
            </div>
          </div>
        </div>

        <div className="description__explain">
          <h3 data-aos="fade-down" data-aos-duration={1200}>
            What We Are About
          </h3>
          <div className="description__explain--grid">
            {/* <div /> */}
            <div
              className="description__explain--grid__items"
              data-aos="fade-right"
              data-aos-duration={1200}
              data-aos-delay="300"
            >
              <h4>Accomplishment</h4>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </p>
            </div>
            <div
              className="description__explain--grid__items"
              data-aos="fade-right"
              data-aos-duration={1200}
              data-aos-delay="300"
            >
              <h4>Creativity</h4>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </p>
            </div>
            <div className="description__explain--grid__sub">
              <div
                className="description__explain--grid__sub-content"
                data-aos="fade-right"
                data-aos-duration={1200}
                data-aos-delay="300"
              >
                <h4>Community</h4>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  I’m a great place for you to tell a story and let your users
                  know a little more about you.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Founders */}
        <div className="description__founder">
          <div className="description__founder-wrap">
            <h3 data-aos="fade-down" data-aos-duration={1200}>
              Meet the Founders
            </h3>
            <div className="description__founder-wrap__tags">
              <div
                className="description__founder-wrap__items"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay="300"
              >
                <img src="./img/about_2.webp" alt="" />
                <h4>Daisy Suarez</h4>
                <p>Junior Game Designer</p>
              </div>
              <div
                className="description__founder-wrap__items"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay="300"
              >
                <img src="./img/about_3.webp" alt="" />
                <h4>Ray Finigan</h4>
                <p>Senior Game Developer</p>
              </div>
              <div
                className="description__founder-wrap__items"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay="300"
              >
                <img src="./img/about_4.webp" alt="" />
                <h4>Tao Deng</h4>
                <p>Senior Game Designer</p>
              </div>
              <div
                className="description__founder-wrap__items"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay="300"
              >
                <img src="./img/about_5.webp" alt="" />
                <h4>Ben Singleton</h4>
                <p>CTO</p>
              </div>
            </div>
          </div>
        </div>
        {/* Studio */}
        <div className="description__hiring">
          <div className="description__hiring-container">
            <div
              className="description__hiring--left"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              <h4>Our Office</h4>
              <h3>Our Studio in San Francisco</h3>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
            <div className="description__hiring--right">
              <div
                className="description__hiring--right__wrap"
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
              >
                <img src="./img/about_7.webp" alt="" />
                <h4>We’d Love to Work With You</h4>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  Let your users get to know you.
                </p>
                <Link to="/careers">
                  <button>Explore Opportunities</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default AboutPage;
