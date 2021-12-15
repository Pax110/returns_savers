import React from 'react'
import LogInPage from '../pages/LogInPage'
import './sidebar/Navbar.css'

const Landing = ({username}) => {
  return (
    <div>
      
  {/* trying Carousel */}
  <div id="navDemo" className="navbar sticky-top">
  <ul class='landingPage'>
    <ul><a type="button" class="btn btn-info" href='/about' >About Us</a></ul>
    <ul><a type="button" class="btn btn-info" href='/login'>Login</a></ul>   
  </ul>
</div>
<div className='container'>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src=""/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src=""alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>

<section className='container'>     
<div class="w3-container w3-content w3-center w3-padding-hor-64" >
    <h2 class="w3-wide">How it works</h2>
    <br/>
    <p class="w3-opacity"><i>We love returning</i></p>
    <br/>
    <p class="w3-justify">We have created a webapp to pursue this passion.We buy and we return. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div class="w3-row w3-padding-hor-32">
      <div class="w3-third">
      <br/>
        <p>Name</p>
        <img  class="w3-round w3-margin-bottom" alt="Random Name" />
      </div>
      <div class="w3-third">
      <br/>
        <p>Name</p>
        <img  class="w3-round w3-margin-bottom" alt="Random Name" />
      </div>
      <div class="w3-third">
      <br/>
        <p>Name</p>
        <img  class="w3-round" alt="Random Name" />
      </div>
    </div>
  </div>
</section>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/> <br/> <br/> <br/> <br/>



    </div>
  )
}

export default Landing
