export class Reservations extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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
    `;
  }
}

customElements.define('reservations-component', Reservations); /* <reservations></reservations> renders reservations in html files*/