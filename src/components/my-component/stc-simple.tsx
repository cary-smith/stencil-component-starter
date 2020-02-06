import { Component, h } from "@stencil/core";

@Component({
  tag: "stc-simple",
  styleUrl: "stc-simple.css",
  shadow: true
})
export class StcSimple {
  render() {
    return <div>Stencil Simple</div>;
  }
}
