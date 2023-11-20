import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Home() {
  return (
    <>
 <div className='container'>
      <div className='row'>
        <div className='col-md-12 col-sm-12 head text-center'>
          <h1 className='heading'>Landing template for startups</h1>
          <p className='desc'>Our landing page template works on all devices,
            so you only have to set it up once,<br></br> and get beautiful results forever.</p>
          <button className='btn3'>Start Free Trial</button>
          <button className='btn4'>Learn more</button>
        </div>
        <div className='col-md-12 col-sm-12 head text-center'>
          <img src={require('./images/hero-image-01.jpg')} width="900" height="500"></img>
          {/* <video width="500" height="500" controls>
            <source src={require('./video/video.mp4')} type="video/mp4"></source>
              
                Your browser does not support the video tag.
              </video> */}

            </div>


        </div>

      </div>
      <section>
      <div className='container'>
      <div className='head2 text-center m-4 p-4'>
            <h1>The majority our customers do not <br></br>
            understand their workflows.
            </h1> 
            <p>Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt <br></br> mollit anim id est laborum.
            </p>  
          </div>
        <div className='row'>
         
          <div className='col-md-4 col-sm-12' >
               <div className='card'>
                <img src={require('./images/Honne__tete__.png')} alt='icon' width={85} height={85}></img>
                <h2>Instant Features</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                   nulla pariatur. Excepteur sint occaecat cupidatat.</p>
               </div>
          </div>
          <div className='col-md-4 col-sm-12' >
          <div className='card'>
                <img src={require('./images/Innovation.png')} alt='icon' width={85} height={85}></img>
                <h2>Instant Features</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                   nulla pariatur. Excepteur sint occaecat cupidatat.</p>
               </div>
          </div>
          <div className='col-md-4 col-sm-12' >
          <div className='card'>
                <img src={require('./images/lines.JPG')} alt='icon'></img>
                <h2>Instant Features</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                   nulla pariatur. Excepteur sint occaecat cupidatat.</p>
               </div>
          </div>
          <div className='col-md-4 col-sm-12' >
          <div className='card'>
                <img src={require('./images/message.JPG')} alt='icon'></img>
                <h2>Instant Features</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                   nulla pariatur. Excepteur sint occaecat cupidatat.</p>
               </div>
          </div>
          <div className='col-md-4 col-sm-12' >
          <div className='card'>
                <img src={require('./images/network.JPG')} alt='icon'></img>
                <h2>Instant Features</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                   nulla pariatur. Excepteur sint occaecat cupidatat.</p>
               </div>
          </div>
          <div className='col-md-4 col-sm-12' >
          <div className='card'>
                <img src={require('./images/Transparence.png')} alt='icon' width={85} height={85}></img>
                <h2>Instant Features</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                   nulla pariatur. Excepteur sint occaecat cupidatat.</p>
               </div>
          </div>

        </div>

      </div>
      </section>
      <hr />
      <section>
        <div className='container'>
          <div className='head2 text-center' >
            <img src={require('./images/p.JPG')}></img>
            <h1>One product, unlimited solutions</h1>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br></br>
               mollit laborum — semper quis lectus nulla.</p>

          </div>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
            <img src={require('./images/dec.JPG')} width={500} height={500}></img>

            </div>
            <div className='col-md-6 col-sm-12 p-4'>
            <img src={require('./images/features-03-image-01.png')}  width={500} height={450}></img>

            </div>
            <div className='col-md-6 col-sm-12'>
            <img src={require('./images/features-03-image-01.png')}  width={500} height={450}></img>

            </div>
            <div className='col-md-6 col-sm-12 p-4'>
            <img src={require('./images/dec.JPG')} width={500} height={500}></img>
            

            </div>
            <div className='col-md-6 col-sm-12'>
            <img src={require('./images/dec.JPG')} width={500} height={500}></img>

            </div>
            <div className='col-md-6 col-sm-12 p-4'>
            <img src={require('./images/features-03-image-01.png')}  width={500} height={450}></img>

            </div>

          </div>

        </div>
      </section>
      <hr></hr>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 m-2 loop  '>
              <div>
              <h1 className='text-white'>Stay in the loop</h1>
              <p className='text-white'> Join our newsletter to get top news before anyone else.</p>
              </div>
              <div>
                
                <input type='email' placeholder='Enter Your Best Mail' /> 
                 <button>Subscribe</button>
              </div>
              
              
            </div>

          </div>

        </div>
      </section>
      <Footer />
      
    </>
   
      
      )
}

      export default Home