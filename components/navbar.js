export class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Load an icon library to show a hamburger menu (bars) on small screens -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <div class="topnav" id="myTopnav">
        <div class="logo">
          <a href="index.html"><img id="logopic" onmouseover="mouseOn(this)" src="images/logo.png" alt="logo" class="logoImage"></a>
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
      `;
  }
}

customElements.define('nav-bar', Navbar); /* <nav-bar></nav-bar> renders navbar in html files*/


/* toggle active class on click */
const currentLocation = location.href; // get current url path
const menuItem = document.querySelectorAll('a'); /* selects all a tags in navbar */
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  console.log(menuItem[i].href);
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active";
  }
}



