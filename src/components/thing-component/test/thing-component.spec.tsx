import { newSpecPage } from '@stencil/core/testing';
import { ThingComponent } from '../thing-component';

describe('thing-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ThingComponent],
      html: `<thing-component></thing-component>`,
    });
    expect(page.root).toEqualHtml(`
      <thing-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </thing-component>
    `);
  });
});
