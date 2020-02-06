import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "stc-nested",
  styleUrl: "stc-nested.css",
  shadow: true
})
export class StcNested {
  render() {
    return (
      <Host>
        <span>Nested</span>
        <stc-simple></stc-simple>
      </Host>
    );
  }
}
