import React from 'react'
import './contact.css';
import Footer from './Footer';

function Contact() {
  return (
    <>
      <div>
        <div className="container containerf">
          <h1 className="title">Welcome. We exist to make entrepreneurship easier.</h1>
          <form className="form" action="/signup" method="POST">
            <div className="input-container">
              <label className="label" htmlFor="full-name">Full Name*</label>
              <input className="input" type="text" id="full-name" name="full-name" required />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="company-name">Company Name*</label>
              <input className="input" type="text" id="company-name" name="company-name" required />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="email">Work Email*</label>
              <input className="input" type="email" id="email" name="email" required />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="password">Password*</label>
              <input className="input" type="password" id="password" name="password" required />
            </div>
            <div className="input-container">
              <input className="checkbox" type="checkbox" id="agree" name="agree" required />
              <label className="label" htmlFor="agree">I agree to be contacted by Open PRO about this offer as per the Open PRO <a className="link" href="/privacy">Privacy Policy</a>.</label>
            </div>
            <input className="button" type="submit" value="Sign up with Google" />
            <input className="button" type="submit" value="Sign up" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}


export default Contact