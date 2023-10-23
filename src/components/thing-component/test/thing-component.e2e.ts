import { newE2EPage } from '@stencil/core/testing';

describe('thing-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<thing-component></thing-component>');

    const element = await page.find('thing-component');
    expect(element).toHaveClass('hydrated');
  });
});
