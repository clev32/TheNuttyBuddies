Vue.component('vue-footer', {
	
	template: `
	

<div class="font-small blue pt-4">

  <div class="container-fluid text-center text-md-left">
	<div class="row">
      <div class="col-md-6 mt-md-0 mt-3">
       	<h5 class="text-uppercase">About Us</h5>
        <p>&copy; The Nutty Buddies is an all in one solution to your social networking needs. 
        	Featuring a comprehensive and interactive website that will allow you to keep in touch with family and friends in the most convenient way possible. 
        	Discover your nutty side as you chat, share photos, create reunions and keep in touch with your loved ones.
      	</p>

      </div>
      <hr class="clearfix w-100 d-md-none pb-3">
      <div class="col-md-3 mb-md-0 mb-3">
        <h5 class="text-uppercase">Help Center</h5>
		<ul class="list-unstyled">
          <li>
             <a href="/FAQS/FAQ's.html">FAQ's</a>
          </li>
          <li>
            <a href="/FAQS/FAQ's.html">Forgot My Password</a>
          </li>
          <li>
            <a href="/SignUpForm.html">Register</a>
          </li>
        </ul>
      </div>
      <div class="col-md-3 mb-md-0 mb-3">
        <h5 class="text-uppercase">Contact US</h5>
        <ul class="list-unstyled">
          <li>
             <p>Phone  800-234-4405</p>
          </li>
          <li>
            <p>Hours  Mon-Thur 9am-5pm </br>
             	Fri 9am-2pm 	
            </p>   
          </li>
          <li>
          	<p>Email
            <a href= "mailto:support@theNuttyBuddies.com" >support@theNuttyBuddies.com</a>
            </p> 
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-copyright text-center py-3">&copy; 2020 Copyright:
    <a href="thenuttybuddies.com"> www.thenuttybuddies.com</a>
  </div>
</div>



`,


})

var app = new Vue({
    el: '#footer'
 });