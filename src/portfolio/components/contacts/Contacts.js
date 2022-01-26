import React from 'react';
import './contacts.scss'
import './../../commons/button/button.scss'
import photo from './../../assets/footer/foto3.jpg'

export const Contacts = () => {
  return (
    <div id="contacts" className="contact">
      <div className="contact_form">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="contact_title">
                <h2>Contact Me.</h2>
                <p className="description">
                  {`I am available for work. Connect with me via phone: ` }
                  <a href="tel:+375292592648">8 029 259-26-48</a>
                  {` or email: `}
                  <a href="mailto:alexeynikinitin@yandex.by">alexeynikinitin@yandex.by</a>

                </p>
              </div>
              <div className="form_wrapper text-lg-start">
                <form action="">
                  <label htmlFor="item01">
                    <input type="text" id="item01" name="name" placeholder="Your Name *" value={""}/>
                  </label>
                  <label htmlFor="item02">
                    <input type="text" id="item02" name="email" placeholder="Your email *" value={""}/>
                  </label>
                  <label htmlFor="item03">
                    <input type="text" id="item03" name="subject" placeholder="Write a Subject" value={""}/>
                  </label>
                  <label htmlFor="item04">
                    <textarea id="item04" name="message" placeholder="Your Message" value={""}/>
                  </label>
                  <button type="submit" value="submit" name="submit" className="btn contact-btn">Submit</button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 ">
              <div className="thumbnail">
                <img src={photo} alt="photo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

