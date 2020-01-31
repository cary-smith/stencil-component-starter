import { Component, Element, h } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true
})
export class MyComponent {
  @Element()
  private host: HTMLElement;

  connectedCallback() {
    this.host.style.borderColor = "blue";
  }

  render() {
    return (
      <div>
        <slot>No Content Yet?</slot>
      </div>
    );
  }
}
