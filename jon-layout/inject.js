var navbarElement = document.querySelector('.navbar');
var navbarTemplate = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="topnav" id="myTopnav">
  <div class="logo">
    <a onmouseover="mouseOn(this)" href="index.html"><img src="images/logo.png" alt="logo" class="logoImage" id="logopic"></a>
  </div>
  <div class="menu">
      <a href="index.html" id="navbarOption">Hjem</a>
      <a href="gallery.html" id="navbarOption" >Galleri</a>
      <a href="about.html" id="navbarOption">Om oss</a>
      <a href="reservations.html" id="navbarOption">Timebestilling</a>
      <a href="contact.html" id="navbarOption">Kontakt</a>
      <a href="javascript:void(0);" class="icon">
        <i class="fa fa-bars"></i>
      </a>
      </div>
</div>
`
var looper;
var degrees = 0;
function rotate(el, speed) {
  var elem = document.getElementById("logopic");
  elem.style.transform = "rotate(" + degrees + "deg)";
  looper = setTimeout('rotate(\'' + el + '\',' + speed + ')', speed);
  degrees++;
  if (degrees > 359) {
    clearTimeout(looper);
    degrees = 0;
  }
}

function mouseOn(element) {
  rotate("logopic", 5);
}


navbarElement.innerHTML = navbarTemplate;

var footerElement = document.querySelector('.footer');
var footerTemplate = `

      <div class="footerContent">
        <div class="footerLogo">
            <a href="index.html"><img src="images/logo.png" alt="logo" class="logoImage"></a>
        </div>
        <div class="footerContact">
            <h2>Kontakt oss</h2>
            <p>Telefon: 12345678</p>
            <p>E-post: <a href="mailto:></a></p>
        </div>
      </div>
   
`

footerElement.innerHTML = footerTemplate;