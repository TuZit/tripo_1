import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__desc">
        <div className="contact__desc-content">
          <h3>Join Our Team</h3>
          <h2>It takes the world's best talent to change the game.</h2>
          <button>Explore Careers</button>
        </div>
        <div
          id="contact"
          className="contact__desc-imgPopup"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-delay={300}
        >
          <img src="./img/cute_chibi.webp" alt="" />
        </div>
      </div>
      <div className="contact__form">
        <div className="contact__form-info">
          <div className="contact__form-info__wrap">
            <h3>Get in Touch</h3>
            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
            <div className="contact__form-info-getName">
              <div className="contact__form-info-getName__items">
                <label style={{ display: "block" }}>First Name *</label>
                <input type="text" />
              </div>
              <div className="contact__form-info-getName__items">
                <label style={{ display: "block" }}>Last Name *</label>
                <input type="text" />
              </div>
            </div>
            <div className="contact__form-info-getEmail">
              <label>Email *</label>
              <input type="email" />
            </div>
            <div className="contact__form-info-getMess">
              <label>Leave us a message</label>
              <textarea rows={3} defaultValue={""} />
            </div>
            <button>Submit</button>
          </div>
        </div>
        <div className="contact__form-subscribe">
          <h3>Subscribe to Our Newsletter</h3>
          <label>Email *</label>
          <input type="text" />
          <button>Join</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
