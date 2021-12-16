import React from 'react'
import './sidebar/Navbar.css'

const Landing = ({}) => {
  return (
    <div>
      






  
  <div id="navDemo" className="navbar sticky-top">
  <div class="btn-group" role="group" aria-label="Basic example">
  {/* <button type="button" class="btn btn-secondary"  href='/about'>About Us</button>
  <button type="button" class="btn btn-secondary" href='/login'>Login</button>
<button type="button" class="btn btn-secondary" href='/register'>SignUp</button> */}
  </div>
  <div></div>
  <h2 style={{color: 'white' , justifyContent: 'center'}}>Return Savers</h2>
  <div>
  <ul class='landingPage'>
    <ul><a type="button" class="btn btn-info" href='/about'>About Us</a></ul>
    <ul><a type="button" class="btn btn-info"href='/login'>Login</a></ul>   
    <ul><a type="button" class="btn btn-info"href='/register' >SignUp</a></ul>   
  
  </ul>

    </div>
  
</div>




<div class="media">
<div class="media-body" style={{justifyContent: 'left'}}>
 
 
</div>
<img class="ml-3" src="./images/1.png" alt="Generic placeholder image"/>
</div>





<section className='container'>     
<div class="w3-container w3-content w3-center w3-padding-hor-64" >
    <h2 class="w3-wide">About</h2>
    <br/>
    <h3 class="w3-opacity"><i>Return Savers: Platform services for online customers and retailers</i></h3>
    <br/>
    <h5 class="w3-justify">Did you know...a large % of items returned to online retailers end up in the landfill?</h5>
    <p>
    Free returns have made it easy for the customer to return items, but it is causing many issues for businesses!
    </p>
    <p>
    Increase in transportation costs associated with returns
Increase of costs associated with sorting and storing returned items
it is easier and more cost effective to send it directly to a landfill
We can shortcut a delivery --- A returned product can be re-directed to another customer in the same Area
We can forward products witch do not qualify for re-sale to donation centers to help people in need
</p>
<h3>
Our goal is: 
</h3>
<p>
Increase profitability and efficiency of online retailers
Reduce the carbon footprint of the majority of returned products
Reduce the volume being added to landfills
Increase Donated products to populations in need
   

</p>
 
    
    
 
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
