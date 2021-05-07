import React from 'react'

const Home = () => {
	return (
		<div>
			   
      <div class="main-top" id="home">
   
         <div class="headder-top">
            <div class="container-fluid">
               
               <nav >
                  <div id="logo">
                     <h1><a class="" href="index.html"><span class="fa fa-ravelry mr-2" aria-hidden="true"></span>chi-shiloh</a></h1>
                  </div>
                  <label for="drop" class="toggle">Menu</label>
                  <input type="checkbox" id="drop"/>
                  <ul class="menu mt-2">
                     <li><a class="active" href="index.html">Home</a></li>
                     <li class="mx-lg-3 mx-md-2 my-md-0 my-1"><a href="about.html">About</a></li>
                     <li><a href="service.html">Services</a></li>
                     <li class="mx-lg-3 mx-md-2 my-md-0 my-1">
                      
                        <label for="drop-2" class="toggle toogle-2">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span>
                        </label>
                        <a href="#">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span></a>
                        <input type="checkbox" id="drop-2"/>
                        <ul>
                           <li><a href="gallery.html" class="drop-text">Gallery</a></li>
                           <li><a href="#prices" class="drop-text">Pricing Plans</a></li>
                        </ul>
                     </li>
                     <li><a href="contact.html">Contact Us</a></li>
                  </ul>
               </nav>
            
            </div>
         </div>
        
         <div class="main-banner">
            <div class="container">
               <div class="style-banner text-center">
                  <h4 class="mb-2">Welcome To chi-shiloh Enterprise</h4>
                  <p> A company that cares</p>
               </div>
               <div class="two-demo-button d-flex justify-content-center mt-lg-5 mt-md-4 mt-sm-4 mt-3">
                  <div class="read-buttn ">
                     <a href="#service" class="btn scroll">Read More</a>
                  </div>
                  <div class="view-buttn">
                     <a href="#about" class="btn scroll">About Us</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
    
     
      <section class="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
         <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
            <h3 class="title text-center mb-md-4 mb-sm-3 mb-3 mb-2">About Us</h3>
            <div class="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
               <p>A logistic company that deals with imports and exports of valuable goods
               </p>
            </div>
            <div class="row pt-lg-5 pt-md-4 pt-3">
               <div class="col-lg-3 col-md-6 text-center col-sm-6 corpo-about ">
                  <div class="position-relative about-top-grid">
                     <div class="about-icon-position">
                        <img src="images/icon1.png" alt="" class="img-fluid"/>
                     </div>
                     <div class="about-img-top">
                        <img src="images/a1.jpg" alt="" class="img-fluid"/>
                     </div>
                     <div class="about-wthree-about text-center mt-lg-4 mt-3">
                        <h5>Business Planning</h5>
                        <p class="mt-2">To grow beyond our present state.</p>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6 text-center corpo-about ">
                  <div class="position-relative about-top-grid">
                     <div class="about-icon-position">
                        <img src="images/icon2.png" alt="" class="img-fluid"/>
                     </div>
                     <div class="about-img-top">
                        <img src="images/a2.jpg" alt="" class="img-fluid"/>
                     </div>
                     <div class="about-wthree-about text-center mt-lg-4 mt-3">
                        <h4>Market research</h4>
                        <p class="mt-2">To meet market demand and expand.</p>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6 text-center corpo-about ">
                  <div class="position-relative about-top-grid">
                     <div class="about-icon-position">
                        <img src="images/icon3.png" alt="" class="img-fluid"/>
                     </div>
                     <div class="about-img-top">
                        <img src="images/a3.jpg" alt="" class="img-fluid"/>
                     </div>
                     <div class="about-wthree-about text-center mt-lg-4 mt-3">
                        <h4>Business 
                           Strategy
                        </h4>
                        <p class="mt-2">To be the beat the best and be the best</p>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6 text-center corpo-about ">
                  <div class="position-relative about-top-grid">
                     <div class="about-icon-position">
                        <img src="images/icon4.png" alt="" class="img-fluid"/>
                     </div>
                     <div class="about-img-top">
                        <img src="images/a4.jpg" alt="" class="img-fluid"/>
                     </div>
                     <div class="about-wthree-about text-center mt-lg-4 mt-3">
                        <h5>Finance Planning</h5>
                        <p class="mt-2">we invest, we grow, we give back to the society</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    
      <section class="service py-lg-4 py-md-3 py-sm-3 py-3" id="service">
         <div class="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 class="title text-center mb-md-4 mb-sm-3 mb-3 mb-2 clr">Our Services</h3>
            <div class="title-wls-text title-white text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
               <p >inventory management,transportation, purchasing and warehousing
               </p>
            </div>
            <div class="row">
               <div class="col-lg-4 ser-blog-grid">
                  <div class="ser-sevice-grid">
                     <div class="sevice-w3layouts-inner">
                        <span class="fa fa-hand-peace-o" aria-hidden="true"></span>
                     </div>
                     <div class="sevice-ser-txt">
                        <h4 class="py-3">Finance Planning</h4>
                        <p> to achieve the company and client financial goals</p>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 ser-blog-grid">
                  <div class="ser-sevice-grid">
                     <div class="sevice-w3layouts-inner">
                        <span class="fa fa-search" aria-hidden="true"></span>
                     </div>
                     <div class="sevice-ser-txt">
                        <h4 class="py-3">Market research</h4>
                        <p> a market where we will be at the heart and click of our customers</p>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 ser-blog-grid">
                  <div class="ser-sevice-grid">
                     <div class="sevice-w3layouts-inner">
                        <span class="fa fa-bar-chart" aria-hidden="true"></span>
                     </div>
                     <div class="sevice-ser-txt">
                        <h4 class="py-3">Business Planning</h4>
                        <p>soaring high even in the midst of competition</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    
      <section class="price py-lg-4 py-md-3 py-sm-3 py-3" id="prices">
         <div class="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 class="title text-center mb-md-4 mb-sm-3 mb-3 mb-2">Our Price</h3>
            <div class="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
               <p >a mouth watering offer you can't afford to miss</p>
            </div>
            <div class="row">
               <div class="col-lg-3 col-md-6 col-sm-6 pricing-grid">
                  <div class="w3ls-bottom grid-two">
                     <div class="price-images">
                        <div class="table-txt-grid">
                           <h4>inventory management</h4>
                        </div>
                        <div class="my-lg-4 my-3 price-w3layouts-table">
                           <h4> <span class="sup">$</span><span class="number-price">60</span> / month </h4>
                        </div>
                        <div class="price-list-txt">
                           <ul class="count">
                              <li>inventory management </li>
                              <li>ware housing </li>
                              <li>purchasing</li>
                              <li>selling</li>
                              <li>Delivering </li>
                           </ul>
                        </div>
                        <div class="view-price mt-3">
                           <a href="contact.html" class=" scroll">Book Now</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6 pricing-grid">
                  <div class="w3ls-bottom grid-two">
                     <div class="price-images">
                        <div class="table-txt-grid">
                           <h4>transportation</h4>
                        </div>
                        <div class="my-lg-4 my-3 price-w3layouts-table">
                           <h4> <span class="sup">$</span><span class="number-price">60</span> / month </h4>
                        </div>
                        <div class="price-list-txt">
                           <ul class="count">
                              <li>inventory management </li>
                              <li>ware housing </li>
                              <li>purchasing</li>
                              <li>selling</li>
                              <li>Delivering </li>
                           </ul>
                        </div>
                        <div class="view-price mt-3">
                           <a href="contact.html" class=" scroll">Book Now</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6 pricing-grid">
                  <div class="w3ls-bottom grid-one">
                     <div class="price-images">
                        <div class="table-txt-grid color-white">
                           <h4>purchasing</h4>
                        </div>
                        <div class="my-lg-4 my-3 price-w3layouts-table">
                           <h4> <span class="sup">$</span><span class="number-price">70</span> / month </h4>
                        </div>
                        <div class="price-list-txt price-grid-one">
                           <ul class="count">
                              <li>inventory management </li>
                              <li>ware housing</li>
                              <li>Cpurchasing</li>
                              <li>selling</li>
                              <li>Delivering </li>
                           </ul>
                        </div>
                        <div class="view-price color-black mt-3 ">
                           <a href="contact.html" class=" scroll">Book Now</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6 pricing-grid">
                  <div class="w3ls-bottom grid-two">
                     <div class="price-images">
                        <div class="table-txt-grid">
                           <h4>warehousing</h4>
                        </div>
                        <div class="my-lg-4 my-3 price-w3layouts-table">
                           <h4> <span class="sup">$</span><span class="number-price">80</span> / month </h4>
                        </div>
                        <div class="price-list-txt">
                           <ul class="count">
                              <li>inventory management </li>
                              <li>ware housing </li>
                              <li>purchasing</li>
                              <li>selling</li>
                              <li>delivering</li>
                           </ul>
                        </div>
                        <div class="view-price mt-3">
                           <a href="contact.html" class=" scroll">Book Now</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   
      <section class="busness-tip" id="busness-tip">
         <div class="container-fluid">
            <div class="row">
               <div class="col-lg-3 col-md-6 col-sm-6 busness-tip-one pl-sm-0">
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6 mid-text-info">
                  <h4 class="mb-lg-4 mb-3">How long before the goods you must be planning to sell?</h4>
                  <p>we can delivery it to your door step. 
                    
                  </p>
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6 busness-tip-two pr-sm-0">
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6 mid-text-info">
                  <h4 class="mb-lg-4 mb-3">Bringing a new CFO at the time of crisis?</h4>
                  <p>let us do the job for you. 
                     
                  </p>
               </div>
            </div>
            <div class="row">
               <div class="col-lg-3 col-md-6 col-sm-6 mid-text-info">
                  <h4 class="mb-lg-4 mb-3">Do you want to ship it out of the country?</h4>
                  <p>you can trust us with that, at an affordable rate
                     
                  </p>
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6 busness-tip-two pr-sm-0">
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6 mid-text-info">
                  <h4 class="mb-lg-4 mb-3">looking for a warehouse?</h4>
                  <p>with the best industrial's standard, your goods are safe with us
                     
                  </p>
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6 busness-tip-one pl-sm-0">
               </div>
            </div>
         </div>
      </section>
 
      <section class="clients py-lg-4 py-md-3 py-sm-3 py-3" id="clients">
         <div class="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 class="title text-center mb-md-4 mb-sm-3 mb-3 mb-2">Our Clients</h3>
            <div class="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
               <p >InterBulk Group is one of the most successful and innovative intermodal logistics companies in the world. InterBulk is a solutions provider. They offer a full range of services including dry bulk logistics, liquid bulk logistics LinerTech logoand tankcontainer operating, utilising ISO Tanks, ISO Veyors for delivery and storage of sealed loads of bulk cargo on a worldwide basis. Linertech is a World leader in the production of bulk container liners for use within intermodal box containers. </p>
            </div>
            <div class="row">
               <div class="col-lg-6 col-md-6 col-sm-6 clients-row-grid">
                  <div class="client-txt-color txt-center">
                     <p class="mb-md-4 mb-sm-3 mb-2"><span class="fa fa-quote-left" aria-hidden="true"></span>  Marie Stopes International was founded in 1976, a reliable and trustworthy client<span class="fa fa-quote-right" aria-hidden="true"></span></p>
                     <img src="images/c1.jpg" class="img-fluid" alt=""/>
                     <div class="client-txt-info mt-2">
                        <h4> Marie Stopes International</h4>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6 col-md-6 col-sm-6 clients-row-grid">
                  <div class="client-txt-color txt-center">
                     <p class="mb-md-4 mb-sm-3 mb-2"><span class="fa fa-quote-left" aria-hidden="true"></span>  Temple Spa is the home of luxury spa and beauty products, where everything is infused with love and passion for the Mediterranean. Temple Spa are dedicated to quality, performance and integrity and endeavour to bring this to each and every one of their luxury spa products. Temple Spa choose only the best ingredients, work with outstanding suppliers and test and refine all their creations in the pursuit of excellenc <span class="fa fa-quote-right" aria-hidden="true"></span></p>
                     <img src="images/c2.jpg" class="img-fluid" alt=""/>
                     <div class="client-txt-info mt-2">
                        <h4> Musgrave</h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    
      <footer class="py-lg-4 py-md-3 py-sm-3 py-3">
         <div class="container py-lg-5 py-md-5 py-sm-4 py-3">
            <div class="row ">
               <div class="footer-info-bottom col-lg-4 col-md-3">
                  <h4 class="pb-lg-4 pb-md-3 pb-3">Address</h4>
                  <div class="bottom-para ">
                     <div class="footer-office-hour">
                        <ul>
                           <li class="mb-2">
                              <h6>Address</h6>
                           </li>
                           <li>
                              <p>8, mogaji street<br/>Lagos,Nigeria.</p>
                           </li>
                        </ul>
                        <ul>
                           <li class="mb-2 mt-3">
                              <h6>Phone</h6>
                           </li>
                           <li>
                              <p>+1234 08033816345</p>
                           </li>
                           <li class="mb-2 mt-3">
                              <h6>Email</h6>
                           </li>
                           <li>
                              <p><a href="mailto:info@example.com">info@example.com</a></p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="footer-info-bottom col-lg-4 col-md-4">
                  <h4 class="pb-lg-4 pb-md-3 pb-3">Twitter Us</h4>
                  <div class="footer-office-hour">
                     <ul>
                        <li>
                           <p>sit amet consectetur adipiscing</p>
                        </li>
                        <li class="my-1">
                           <p><a href="mailto:info@example.com">chi-shiloh@yahoo.com</a></p>
                        </li>
                        <li class="mb-3"><span>Posted 3 days ago.</span></li>
                        <li>
                           <p>sit amet consectetur adipiscing</p>
                        </li>
                        <li class="my-1">
                           <p><a href="mailto:info@example.com">chi-shiloh@yahoo.com</a></p>
                        </li>
                        <li><span>Posted 3 days ago.</span></li>
                     </ul>
                  </div>
               </div>
               <div class="footer-info-bottom col-lg-4 col-md-5">
                  <h4 class="pb-lg-4 pb-md-3 pb-3">NewsLetter</h4>
                  <div class="newsletter">
                     <form action="#" method="post" class="d-flex">
                        <input type="email" name="Your Email" class="form-control" placeholder="Your Email" required=""/>
                        <button class="btn1">
                        <span class="fa fa-envelope" aria-hidden="true"></span>
                        </button>
                     </form>
                  </div>
                  <div class="footer-office-hour mt-3">
                     <p>our office is always open to serve you</p>
                  </div>
                  <div class="icons mt-3 ">
                     <ul>
                        <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                        <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                        <li><a href="#"><span class="fa fa-rss"></span></a></li>
                        <li><a href="#"><span class="fa fa-vk"></span></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="footer-main-grid txt-center my-3">
               <h2><a class="" href="#home"><span class="fa fa-ravelry mr-2" aria-hidden="true"></span>chi-shiloh</a></h2>
            </div>
            <div class="footer-main txt-center ">
               <p> 
                  © 2022 chi-shiloh
                  . All Rights Reserved | Design by <a href="www.chi-shilohcode.com" target="_blank">chi-shiloh.com</a>
               </p>
            </div>
         
            <div class="txt-center">
               <a href="#home" class="move-top txt-center mt-3"></a>
            </div>
        
         </div>
      </footer>
     
	 
		</div>
	)
}

export default Home
