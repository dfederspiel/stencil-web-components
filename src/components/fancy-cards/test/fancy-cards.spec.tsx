import { newSpecPage } from '@stencil/core/testing';
import { FancyCards } from '../fancy-cards';

describe('fancy-cards', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FancyCards],
      html: `<fancy-cards></fancy-cards>`,
    });
    expect(page.root).toEqualHtml(`
      <fancy-cards>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fancy-cards>
    `);
  });
});
