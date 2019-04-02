import { Component, Element } from '@stencil/core';

const ACTIVE = 'is-active';

@Component({
  tag: 'the-outer',
  styleUrl: 'outer.css',
  shadow: true
})
export class Outer {
  private initialParent: HTMLElement;
  private clickTarget: HTMLElement;

  @Element()
  private host: HTMLLabelElement;

  private toggle() {
    const { host } = this;
    if (host.hasAttribute(ACTIVE)) {
      host.removeAttribute(ACTIVE);
      this.initialParent.appendChild(this.host);
    } else {
      document.body.appendChild(this.host);
      host.setAttribute(ACTIVE, '');
    }
  }

  componentDidLoad() {
    this.initialParent = this.host.parentElement;
    this.clickTarget = document.getElementById(this.host.getAttribute('for'));
    this.clickTarget.addEventListener('click', () => this.toggle());
  }

  render() {
    return (
      <div class='outer-content'>
        <slot />
      </div>
    );
  }
}
