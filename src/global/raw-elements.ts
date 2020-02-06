const sheet = `
:host {
    border: 1px solid red;
    display: inline-block;
    padding: 3px;
    position: relative;
    vertical-align: top;
}`;
class SimpleRaw extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `<style>${sheet}</style>
            <span>Raw Native</span>`;
  }
}

class NestedRaw extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `<style>${sheet}</style>
              <span>Nested</span>
              <raw-simple></raw-simple>`;
  }
}

customElements.define("raw-simple", SimpleRaw);
customElements.define("raw-nested", NestedRaw);
