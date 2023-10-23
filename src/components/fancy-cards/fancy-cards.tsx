import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'fancy-cards',
  styleUrl: 'fancy-cards.css',
  shadow: true,
})
export class FancyCards {
  @Prop() things: { title: string }[];

  render() {
    return (
      <div class="item-wrapper">
        {this.things.map(thing => (
          <thing-component title={thing.title}></thing-component>
        ))}
      </div>
    );
  }

}
