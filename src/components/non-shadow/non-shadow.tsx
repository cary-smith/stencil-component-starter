import { Component, h } from '@stencil/core';

@Component({
  tag: 'non-shadow',
  styleUrl: 'non-shadow.css'
})
export class NonShadow {
  render() {
    return <div>Something to repeat</div>;
  }
}
