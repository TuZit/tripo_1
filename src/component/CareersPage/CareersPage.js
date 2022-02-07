import React from "react";

import Nav from "../Nav";
import Footer from "../Footer";

import "./Careers.css";

function CareersPage() {
  return (
    <section id="careers">
      <Nav />
      <div className="careers">
        <div
          className="careers__intro"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1200"
        >
          <h4>Help Us Change the Way People Play</h4>
          <h3>We’re Hiring</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="careers__jobs">
          <h3>Job Openings</h3>
          <div className="careers__jobs-container">
            <div className="careers__jobs-items">
              <div className="careers__jobs-items_image">
                <img src="./img/career_1.webp" alt="" />
              </div>
              <h4>Community Manager</h4>
              <p>San Francisco, CA</p>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
            <div className="careers__jobs-items">
              <div className="careers__jobs-items_image">
                <img src="./img/career_2.webp" alt="" />
              </div>
              <h4>QA Tester</h4>
              <p>San Francisco, CA</p>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
            <div className="careers__jobs-items">
              <div className="careers__jobs-items_image">
                <img src="./img/career_3.webp" alt="" />
              </div>
              <h4>Game Designer</h4>
              <p>San Francisco, CA</p>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
            <div className="careers__jobs-items">
              <div className="careers__jobs-items_image">
                <img src="./img/career_4.webp" alt="" />
              </div>
              <h4>Game Developer</h4>
              <p>San Francisco, CA</p>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
          </div>
        </div>
        <div className="careers__looking">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1100"
          >
            <h4>Didn’t Find the Position You’re Looking For?</h4>
            <h3>Send Us Your CV</h3>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default CareersPage;
