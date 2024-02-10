class Nav extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <nav>
        <div class="nav-wrapper">
          <div class="nav-title">
            <a href="index.html">drobnym druczkiem</a>
          </div>
          <div class="nav-subtitle">czyli o tym, czego nam nie mówią</div>
        </div>
      </nav>
    `;
  }
}

customElements.define('dd-nav', Nav);
