import { newE2EPage } from '@stencil/core/testing';

describe('my-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-panel></my-panel>');

    const element = await page.find('my-panel');
    expect(element).toHaveClass('hydrated');
  });
});
