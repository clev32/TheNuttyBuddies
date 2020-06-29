Vue.component('vue-header', {
	
	template: `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/index.html"><img src ="images/logo_transparent_background.png" width="75" height="75"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" id= "indexLink" href="/index.html">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="galleryLink" href="/photoGallery/gallery.html">Photo Gallery</a>
      </li>
        <li class="nav-item">
        <a class="nav-link" href="/event-calendar-evo/event-calendar-evo/calendar.html">Calendar</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="https://www.thenuttybuddies.com/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Recipes
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/recipe.html">All recipes</a>
          <a class="dropdown-item" href="thenuttybuddies.com/">Mains</a>
          <a class="dropdown-item" href="thenuttybuddies.com/">Salads</a>
          <a class="dropdown-item" href="thenuttybuddies.com/">Desserts</a>
        </div>
      </li>
    </ul>
  </div>
   <div class="login-container">
    <div class="dropdown">
  <button class="dropbtn">Account</button>
  <div class="dropdown-content">
 <!-- <p>Welcome to The Nutty Buddies!<p> -->
  <button type="button" @click = "SignUp" id="sign_in">Sign in</button>
  <button type="button" @click = "Register" id="register">Register</button>
  </div>
</div>
  </div>
</nav>

`,
methods:{
Register:function(){
	   window.open("/SignUpForm.html");
},
SignUp: function(){
    window.open("/SignInForm.html");
}
}

});

var app = new Vue({
    el: '#header'
 });