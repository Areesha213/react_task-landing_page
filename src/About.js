import React from 'react'
import Footer from './Footer'

function About() {
  return (
    <>
    <div>
        <div className="container containerf">
          <h1 className="title">Welcome back. We exist to make entrepreneurship easier.</h1>
          <form className="form" action="/signup" method="POST">
          <input className="button" type="submit" value="Sign up with Google" />
            
            <div className="input-container">
              <label className="label" htmlFor="email">Work Email*</label>
              <input className="input" type="email" id="email" name="email" required />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="password">Password*</label>
              <input className="input" type="password" id="password" name="password" required />
            </div>
           
           
            <input className="button1" type="submit" value="Sign up" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About