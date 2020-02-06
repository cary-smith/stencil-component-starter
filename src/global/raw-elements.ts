const sheet = `
:host {
    border: 1px solid red;
    display: inline-block;
    padding: 3px;
    position: relative;
    vertical-align: top;
}`;
const config: ShadowRootInit = { mode: "open" };

const simpleTpl = document.createElement("template");
simpleTpl.innerHTML = `
  <style>${sheet}</style><span>Raw Native</span>
`;

class SimpleRaw extends HTMLElement {
  constructor() {
    super();
    this.attachShadow(config);
    this.shadowRoot.appendChild(simpleTpl.content.cloneNode(true));
  }
}

const nestedTpl = document.createElement("template");
nestedTpl.innerHTML = `
  <style>${sheet}</style>
  <span>Nested</span>
  <raw-simple></raw-simple>
`;

class NestedRaw extends HTMLElement {
  constructor() {
    super();
    this.attachShadow(config);
    this.shadowRoot.appendChild(nestedTpl.content.cloneNode(true));
  }

  get template() {
    return `
      <style>${sheet}</style>
      <span>Nested</span>
      <raw-simple></raw-simple>`;
  }
}

customElements.define("raw-simple", SimpleRaw);
customElements.define("raw-nested", NestedRaw);
