// dynamicLoadingTest.spec.ts

import { DynamicLoadingPage } from '../../pages/dynamicLoadingPage';

describe('Dynamic Loading Tests (Example 1 & Example 2)', () => {
  const dynamicLoadingPage = new DynamicLoadingPage();

  beforeEach(() => {
    // Start each test by visiting the base URL
    cy.visit('/');

    // Navigate to the Dynamic Loading page via the page object
    dynamicLoadingPage.navigateToDynamicLoadingPage();

    // Verify that we're on the correct Dynamic Loading page
    cy.url().should('include', '/dynamic_loading');
  });

  it('should test Example 1 (hidden element becomes visible)', () => {
    // Navigate to Example 1 via the page object
    dynamicLoadingPage.navigateToExample('1');

    // Verify the URL for Example 1
    cy.url().should('include', '/dynamic_loading/1');

    // Verify that the text is initially hidden
    dynamicLoadingPage.verifyHiddenText();

    // Start loading and verify hidden element becomes visible
    dynamicLoadingPage.startLoading();
    dynamicLoadingPage.verifyLoadedText();
  });

  it('should test Example 2 (element rendered after the fact)', () => {
    // Navigate to Example 2 via the page object
    dynamicLoadingPage.navigateToExample('2');

    // Verify the URL for Example 2
    cy.url().should('include', '/dynamic_loading/2');

    // Start loading and verify the element is rendered after clicking the button
    dynamicLoadingPage.startLoading();
    dynamicLoadingPage.verifyLoadedText();
  });
});
