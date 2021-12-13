import React from 'react'
import './Footer.css'


function Footer() {
    return (
        <div>
                <footer class="footer-container">
        <div class="footer-container">
            <section class="footer-top padding-y-lg text-white">
                <div class="row">
                    <aside class="col-md col-6">
                        <h6 class="title">Brands</h6>
                        <ul class="list-unstyled">
                            <li> <a class="retunSavers-listStyle">Adidas</a></li>
                            <li> <a class="retunSavers-listStyle">Puma</a></li>
                            <li> <a class="retunSavers-listStyle">Reebok</a></li>
                            <li> <a class="retunSavers-listStyle">Nike</a></li>
                        </ul>
                    </aside>
                    <aside class="col-md col-6">
                        <h6 class="title">Company</h6>
                        <ul class="list-unstyled">
                            {/* <li> <a class="retunSavers-listStyle">About us</a></li> */}
                            <li> <a class="retunSavers-listStyle">Careers</a></li>
                            <li> <a class="retunSavers-listStyle">Find a Store</a></li>
                            <li> <a class="retunSavers-listStyle">Rules and Terms</a></li>
                            <li> <a class="retunSavers-listStyle">Sitemap</a></li>
                        </ul>
                    </aside>
                    <aside class="col-md col-6">
                        <h6 class="title">Help</h6>
                        <ul class="list-unstyled">
                            <li> <a class="retunSavers-listStyle">Contact Us</a></li>
                            {/* <li> <a class="retunSavers-listStyle">Money Refunds</a></li> */}
                            <li> <a class="retunSavers-listStyle">Order Status</a></li>
                            <li> <a class="retunSavers-listStyle">Shipping Info</a></li>
                            <li> <a class="retunSavers-listStyle">Open Dispute</a></li>
                        </ul>
                    </aside>
                    <aside class="col-md col-6">
                        <h6 class="title">Account</h6>
                        <ul class="list-unstyled">
                            <li> <a class="retunSavers-listStyle"> User Login </a></li>
                            <li> <a class="retunSavers-listStyle"> Register </a></li>
                            <li> <a class="retunSavers-listStyle"> Account Settings </a></li>
                            <li> <a class="retunSavers-listStyle"> My Returns </a></li>
                        </ul>
                    </aside>
                    <aside class="col-md">
                        <h6 class="title">Social</h6>
                        <ul class="list-unstyled">
                            <li><a class="retunSavers-listStyle"> <i class="fab fa-facebook"></i> Facebook </a></li>
                            <li><a class="retunSavers-listStyle"> <i class="fab fa-twitter"></i> Twitter </a></li>
                            <li><a class="retunSavers-listStyle"> <i class="fab fa-instagram"></i> Instagram </a></li>
                            <li><a class="retunSavers-listStyle"> <i class="fab fa-youtube"></i> Youtube </a></li>
                        </ul>
                    </aside>
                </div> 
            </section>  
    
            <section class="footer-bottom text-center">       
                    <p class="text-muted"> &copy; 2021 ReturnSavers, All rights reserved </p>
                  
            </section>
        </div>
    </footer>
        </div>
    )
}

export default Footer
