class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Octavio Mancilla Cordero 
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
