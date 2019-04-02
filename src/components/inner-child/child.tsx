import { Component } from '@stencil/core';

const OPEN = 'is-open';

@Component({
  tag: 'the-child',
  styleUrl: 'child.css',
  shadow: true
})
export class Child {
  private id = Math.random();
  private testElement: HTMLElement;

  private toggle() {
    const { testElement } = this;
    if (testElement.hasAttribute(OPEN)) {
      testElement.removeAttribute(OPEN);
    } else {
      testElement.setAttribute(OPEN, '');
    }
  }

  componentDidLoad() {
    console.log('I am here!!', this.id);
  }

  componentDidUnload() {
    console.log('What did I do?', this.id);
  }

  render() {
    return (
      <div class='child-content'>
        <button onClick={() => this.toggle()}>Toggle the div</button>
        <div class='toggle-panel' ref={e => (this.testElement = e)}>
          IT IS OPEN!!!!
        </div>
      </div>
    );
  }
}
