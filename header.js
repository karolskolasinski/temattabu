class Header extends HTMLElement {
  static observedAttributes = ["img", "caption", "title-header", "tags", "unsplash-nick", "unsplash-name", "unsplash-path"];

  constructor() {
    super();
    const filename = this.getAttribute("filename");
    const caption = this.getAttribute("caption");
    const titleHeader = this.getAttribute("title-header");
    const tags = this.getAttribute("tags").split(", ");
    const unsplashNick = this.getAttribute("unsplash-nick");
    const unsplashName = this.getAttribute("unsplash-name");
    const unsplashPath = this.getAttribute("unsplash-path");
    const unsplashNickLink = `https://unsplash.com/@${unsplashNick}?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`;
    const unsplashPathHref = `https://unsplash.com/photos/${unsplashPath}?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`;

    this.innerHTML = `
      <header class="art-header">
        <div class="img-wrapper">
          <img src="img/${filename}" alt="image" id="image">
          
          ${caption ? `<div class="img-caption">${caption}</div>` : ""}
          
          ${!caption
            ? `
              <div class="img-caption">
                Photo by <a href=${unsplashNickLink}>${unsplashName}</a> 
                on <a href=${unsplashPathHref}>Unsplash</a>
              </div>
              `
            : ""}
        </div>

        <div class="title-wrapper">
          <div class="title-header-wrapper">
            <h2 id="title-header">${titleHeader}</h2>
            <sl-icon name="copy"></sl-icon>
            <h2 class="icon icon-copy" title="kopiuj link" onclick="copyLink()"></h2>
          </div>

          <div class="tag-wrapper">
            <div class="tag-cloud">
              ${tags.map(tag => `<div>${tag}</div>`).join('')}
            </div>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('dd-header', Header);
