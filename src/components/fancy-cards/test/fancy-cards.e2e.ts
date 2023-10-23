import { newE2EPage } from '@stencil/core/testing';

describe('fancy-cards', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fancy-cards></fancy-cards>');

    const element = await page.find('fancy-cards');
    expect(element).toHaveClass('hydrated');
  });
});
