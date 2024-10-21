// redirectLinkTest.spec.ts

import { RedirectLinkPage } from '../../pages/redirectLinkPage';

describe('Redirect Link Test', () => {
  const redirectLinkPage = new RedirectLinkPage();

  it('should navigate to the Status Codes page and check redirection', () => {
    // Step 1: Visit the base URL
    cy.visit('/');

    // Step 2: Navigate to the Status Codes page via the page object
    redirectLinkPage.navigateToRedirectLinkPage();

    // Verify that the URL includes "/redirector"
    cy.url().should('include', '/redirector');

    // Step 3: Click the "Here" button to trigger a redirect
    redirectLinkPage.clickHereButton();

    // Verify that the URL includes "/status_codes"
    cy.url().should('include', '/status_codes');
  });

  it('should check each status code link and validate the requests, handling 404 and 500 without failing', () => {
    // Step 1: Visit the base URL and navigate to the Status Codes page
    cy.visit('/');
    redirectLinkPage.navigateToStatusCodesPage();

    // Verify that the URL includes "/status_codes"
    cy.url().should('include', '/status_codes');

    // Step 2: Check each status code link, validate the request, and return to the Status Codes page
    const statusCodes = ['200', '301', '404', '500'];

    statusCodes.forEach((code) => {
      // Click the status code link
      redirectLinkPage.clickStatusCodeLink(code);

      // Validate that the request returned the correct status
      redirectLinkPage.validateStatusCodeRequest(code);

      // Navigate back to the Status Codes page before the next iteration
      redirectLinkPage.navigateBackToStatusCodes();
    });
  });
});
