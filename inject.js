var navbarElement = document.querySelector('#navbar');
var navbarTemplate = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="topnav" id="myTopnav">
  <div class="logo">
    <a href="index.html"><img src="images/logo.png" alt="logo" class="logoImage"></a>
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

navbarElement.innerHTML = navbarTemplate;

var footerElement = document.querySelector('#footer');
var footerTemplate = `
<div class="footer">
      <div class="footerContent">
        <div class="footerLogo
            <a href="index.html"><img src="images/logo.png" alt="logo" class="logoImage"></a>
        </div>
        <div class="footerContact">
            <h2>Kontakt oss</h2>
            <p>Telefon: 12345678</p>
            <p>E-post: <a href="mailto:
        </div>
      </div>
    </div>
`

footerElement.innerHTML = footerTemplate;


var reservationElement = document.querySelector('#reservationComponent')
var reservationTemplate = `
<form>
<h1>Timebestilling</h1>
<label for="name">Real name:</label>
<input type="text" id="name" name="name" pattern="[a-zA-Z]+[a-zA-Z ]+" required><br>

<label for="phone">Phone number:</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{8}" required><br>

<label for="email">Email:</label>
<input type="email" id="email" name="email" required><br>

<label for="date">Date and time:</label>
<input type="datetime-local" id="date" name="date" required><br>

<label for="haircut">Haircut:</label>
<input type="text" id="haircut" name="haircut" required><br>

<button type="submit">Submit</button>
</form>
`

reservationElement.innerHTML = reservationTemplate;
