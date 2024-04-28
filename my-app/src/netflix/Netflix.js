import React from 'react'
import "./Netflix.css"
import img from './netflix img/bg.jpg'
import img1 from './netflix img/mo.jpg'
import img3 from './netflix img/dv.png'
import img4 from './netflix img/ty.png'
import vi from './netflix video/vid.m4v'
import vo from './netflix video/vd.m4v'

const Netflix = () => {
  return (
    <div>

      <div className='Container-fluid  bc' style={{ backgroundImage: `url(${img})`, }}>
        <div className='container pb-5'>
          <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <div class="container-fluid">
              <a class="navbar-brand text-danger fw-bold fs-1" href="#">NETFLIX</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">



                </ul>
                <form class="d-flex">
                  <div class="dropdown">
                    <button class="btn btn-dark  bo dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fa-solid fa-language me-3" ></i> English
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">English</a></li>
                      <li><a class="dropdown-item" href="#">Hindi</a></li>
                    </ul>
                  </div>
                  <button class="btn btn-danger ps-3 pe-3 pt-2 pb-2 ms-4 fw-bold" type="submit">Sign in</button>
                </form>
              </div>
            </div>
          </nav>
        </div>

        <div className='container text-white text-center'>
          <h1 className='fw-bold mt-5 pt-5'>
            Unlimited movies, TV shows and more</h1>
          <h4 className='mt-4'>Watch anywhere. Cancel anytime.</h4>
          <h5 className='mt-3'>Ready to watch? Enter your email to create or restart your membership.</h5>
          <div className='d-flex justify-content-center mt-4'>
            <input type='email' placeholder='Email address' className='wd' />
            <button className='fw-bold btn btn-danger ps-4 pt-2 pb-2 ms-3 pe-4'>GET STARTED <i class="fa-solid fa-angle-right ms-2"></i></button>
          </div>
        </div>
      </div>

      <div className='container-fluid bg-dark pt-5 pb-5 mt-1'>
        <div className='container  pb-5'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6  pt-5 text-white d-flex align-items-center'><div><h2 className='fw-bold fs-1'>Enjoy on your TV</h2>
              <h5 className='mt-3'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h5></div></div>
            <div className='col-sm-12 col-md-6 col-lg-6 pt-5 '><video className='w-100' controls preload='' autoPlay loop muted>
              <source src={`${vi}`}></source>
            </video></div>
          </div>
        </div>
      </div>
      <div className='container-fluid bg-dark pt-5 pb-5 mt-1'>
        <div className='container  pb-5'>
          <div className='row'>

            <div className='col-sm-12 col-md-6 col-lg-6 pt-5'><div className='bk' style={{ backgroundImage: `url(${img1})`, }}>
          

            </div></div>
            <div className='col-sm-12 col-md-6 col-lg-6 pt-5 text-white d-flex align-items-center'><div><h2 className='fw-bold fs-1'>Download your shows to watch offline</h2>
              <h5 className='mt-3'>Save your favourites easily and always have something to watch.</h5></div></div>
          </div>
        </div>
      </div>

      <div className='container-fluid bg-dark pt-5 pb-5 mt-1'>
        <div className='container  pb-5'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6  pt-5 text-white d-flex align-items-center'><div><h2 className='fw-bold fs-1'>Watch everywhere</h2>
              <h5 className='mt-3'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h5></div></div>
            <div className='col-sm-12 col-md-6 col-lg-6  pt-5 '><div className='bk ' style={{ backgroundImage: `url(${img3})`, }}><video  className='mt-5 w-100 d' controls preload='' autoPlay loop muted>
              <source src={`${vo}`}></source>
            </video></div></div>
          </div>
        </div>
      </div>

      <div className='container-fluid bg-dark pt-5 pb-5 mt-1'>
        <div className='container  pb-5'>
          <div className='row'>

            <div className='col-sm-12 col-md-6 col-lg-6 pt-5'><div className='bl ' style={{ backgroundImage: `url(${img4})`, }}>

            </div></div>
            <div className='col-sm-12 col-md-6 col-lg-6 pt-5 text-white d-flex align-items-center'><div><h2 className='fw-bold fs-1'>Create profiles for kids</h2>
              <h5 className='mt-3'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h5></div></div>
          </div>
        </div>
      </div>
      <div className='container-fluid bg-dark mt-1 pt-5 pb-5'>
        <div className='container pt-5 pb-5 '>
          <h1 className='fw-bold fs-1 text-white text-center'>Frequently Asked Questions</h1>

          <div class="accordion mt-5" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What is Netflix?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                  <br /><br />
                  You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                </div>
              </div>
            </div>
            <div class="accordion-item mt-3">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How much does Netflix cost?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                </div>
              </div>
            </div>
            <div class="accordion-item mt-3">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Where can I watch?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                  <br /><br />
                  You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                </div>
              </div>
            </div>

            <div class="accordion-item mt-3">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  How do I cancel?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                </div>
              </div>
            </div>
            <div class="accordion-item mt-3">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What can I watch on Netflix?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                </div>
              </div>
            </div>
            <div class="accordion-item mt-3">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Is Netflix good for kids?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                  <br /><br />
                  Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                </div>
              </div>
            </div>


          </div>

        </div>
        <div className='mb-5'>
          <h5 className='mt-3 text-white text-center'>Ready to watch? Enter your email to create or restart your membership.</h5>
          <div className='d-flex justify-content-center mt-4'>
            <input type='email' placeholder='Email address' className='wd' />
            <button className='fw-bold btn btn-danger ps-4 pt-2 pb-2 ms-3 pe-4'>GET STARTED <i class="fa-solid fa-angle-right ms-2"></i></button>
          </div></div>


      </div>

      <div className='container-fluid bg-dark pt-5 pb-5 mt-1'>
        <div className='container text-white'>
          <p className='fs-5'>Questions? Call <a href='#' className='text-white'>000-800-919-1694</a></p>
          <div className='row  '>
            <div className='col-sm-12 col-md-3 col-lg-3 mt-5'>
              <a className='text-white' href='#'>FAQ</a><br /><br />
              <a className='text-white' href='#'>Investor Relations</a><br /><br />
              <a className='text-white' href='#'>Privacy</a><br /><br />
              <a className='text-white' href='#'>Speed Test</a>
            </div>
            <div className='col-sm-12 col-md-3 col-lg-3 mt-5'> <a className='text-white' href='#'>
              Help Centre</a><br /><br />
              <a className='text-white' href='#'>
                Jobs</a><br /><br />
              <a className='text-white' href='#'>Cookie Preferences</a><br /><br />
              <a className='text-white' href='#'>Legal Notices</a></div>
            <div className='col-sm-12 col-md-3 col-lg-3 mt-5'> <a className='text-white' href='#'>Account</a><br /><br />
              <a className='text-white' href='#'>
                Ways to Watch</a><br /><br />
              <a className='text-white' href='#'>Corporate Information</a><br /><br />
              <a className='text-white' href='#'>Only on Netflix</a></div>
            <div className='col-sm-12 col-md-3 col-lg-3 mt-5'> <a className='text-white' href='#'>Media Centre</a><br /><br />
              <a className='text-white' href='#'>Terms of Use</a><br /><br />
              <a className='text-white' href='#'>Contact Us</a></div>
          </div>

          <div class="dropdown mt-5">
                    <button class="btn btn-dark  bo dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fa-solid fa-language me-3" ></i> English
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">English</a></li>
                      <li><a class="dropdown-item" href="#">Hindi</a></li>
                    </ul>
                  </div>
<p className='text-white mt-4 mb-3'>Netflix India</p>

        </div>
      </div>


    </div>
  )
}

export default Netflix