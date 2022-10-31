export class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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
    `;
  }
}

customElements.define('footer-component', Footer); /* <footer-component></footer-component> renders footer in html files*/
