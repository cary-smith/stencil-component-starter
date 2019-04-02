import { Component } from '@stencil/core';

@Component({
  tag: 'the-inner',
  styleUrl: 'inner.css',
  shadow: true
})
export class Inner {
  componentDidUnload() {
    console.log('Decommissioning inner');
  }

  render() {
    return (
      <div class='inner-content'>
        <the-child />
      </div>
    );
  }
}
