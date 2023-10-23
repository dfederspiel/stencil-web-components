import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'thing-component',
  styleUrl: 'thing-component.css',
  shadow: true,
})
export class ThingComponent {
  @Prop() title: string;

  render() {
    return (
      <div class="thing-container">
        <a class="thing">
          <div class="item">
            <div class="overlay"></div>
            <div class="view-more">
              View Thing
              <hr />
            </div>
          </div>
          <div class="title">
            {this.title}
          </div>
        </a>
      </div>
    );
  }

}
