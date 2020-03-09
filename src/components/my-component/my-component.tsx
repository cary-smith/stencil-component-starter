import { Component, Element, h, Listen } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true
})
export class MyComponent {
  @Element()
  host: HTMLElement;

  @Listen("click")
  protected whenClicked() {
    const { host } = this;
    host.toggleAttribute("is-blue", !host.hasAttribute("is-blue"));
  }

  componentWillLoad() {
    this.host.addEventListener("click", () =>
      console.log("Native handler stays attached.")
    );
  }

  render() {
    return <div>Click to watch color changes</div>;
  }
}
