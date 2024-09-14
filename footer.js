class Footer extends HTMLElement {
  constructor() {
    super();

    const href = "https://www.linkedin.com/in/karolskolasinski/";

    this.innerHTML = `
      <footer>
        © 2016 - 2023 temattabu | Created By <a href=${href}>karolskolasinski</a>
      </footer>
    `;
  }
}

customElements.define('dd-footer', Footer);
