import { Component, h } from '@stencil/core';

const VALUES = [];
for (let i = 0; i < 20; i++) {
  VALUES.push(1);
}

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  render() {
    return <div class='content'>{VALUES.map(() => <non-shadow />)}</div>;
  }
}
