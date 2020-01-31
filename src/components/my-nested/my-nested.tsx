import { Component, Element, h, Host } from "@stencil/core";

@Component({
  tag: "my-nested",
  styleUrl: "my-nested.css",
  shadow: true
})
export class MyNested {
  @Element()
  private host: HTMLElement;

  connectedCallback() {
    this.host.style.borderColor = "red";
  }

  render() {
    return (
      <Host>
        <span>What is ...</span>
        <my-component>Nested?</my-component>
      </Host>
    );
  }
}
