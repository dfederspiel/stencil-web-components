import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'dropdown-list',
  styleUrl: 'dropdown-list.css',
  shadow: true,
})
export class DropdownList {

  render() {
    return (
      <Host>
        <h1>This is not acutally a dropdown, but it has a slot!!</h1>
        <slot />
      </Host>
    );
  }

}
