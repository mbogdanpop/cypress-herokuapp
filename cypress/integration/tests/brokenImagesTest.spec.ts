// brokenImagesTest.spec.ts

import { BrokenImagesPage } from '../../pages/brokenImagesPage';

describe('Broken Images Test', () => {
  const brokenImagesPage = new BrokenImagesPage();

  it('should navigate to the Broken Images page and check for broken images', () => {
    // Step 1: Visit the base page where the list of URLs is located
    cy.visit('/');

    // Step 2: Navigate to the Broken Images page via the page object
    brokenImagesPage.navigateToBrokenImages();

    // Step 3: Verify that the URL is correct
    cy.url().should('include', '/broken_images');

    // Step 4: Now that we're on the correct page, check for broken images
    brokenImagesPage.checkBrokenImages();
  });
});
