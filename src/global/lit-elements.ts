import { css, html, LitElement } from "lit-element";

class DaBase extends LitElement {
  static get styles() {
    return css`
      :host {
        border: 1px solid darkblue;
        display: inline-block;
        padding: 3px;
        position: relative;
        vertical-align: top;
      }
    `;
  }
}

class SimpleLit extends DaBase {
  render() {
    return html`
      <div>Lit Simple</div>
    `;
  }
}

class NestedLit extends DaBase {
  render() {
    return html`
      <span>Nested</span>
      <lit-simple></lit-simple>
    `;
  }
}

customElements.define("lit-simple", SimpleLit);
customElements.define("lit-nested", NestedLit);
