var targetElement = document.querySelector('#navbar');
var htmlTemplate = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="topnav" id="myTopnav">
  <div class="logo">
    <a href="index.html"><img src="../images/logo.png" alt="logo" class="logoImage"></a>
  </div>
  <div class="menu">
      <a href="/" id="navbarOption">Hjem</a>
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

targetElement.innerHTML = htmlTemplate;

