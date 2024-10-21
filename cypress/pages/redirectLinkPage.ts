export class RedirectLinkPage {
  // Selector for the "Redirect Link" link on the homepage
  redirectLinkSelector = ':nth-child(36) > a';

  // Selector for the "Status Codes" link on the homepage
  statusCodesLinkSelector = ':nth-child(42) > a';

  // Selector for the "Here" button that triggers the redirect
  hereButtonSelector = '#redirect';

  // Selectors for the individual status code links
  statusCode200LinkSelector = 'a[href="/status_codes/200"]';
  statusCode301LinkSelector = 'a[href="/status_codes/301"]';
  statusCode404LinkSelector = 'a[href="/status_codes/404"]';
  statusCode500LinkSelector = 'a[href="/status_codes/500"]';

  navigateToRedirectLinkPage() {
    // Click on the "Redirect Link" to navigate to the redirect page
    cy.get(this.redirectLinkSelector).click();
  }

  navigateToStatusCodesPage() {
    // Click on the "Status Codes" link to navigate to the page that lists the status codes
    cy.get(this.statusCodesLinkSelector).click();
  }

  clickHereButton() {
    // Click on the "Here" button to trigger the redirection to the status codes page
    cy.get(this.hereButtonSelector).click();
  }

  clickStatusCodeLink(statusCode: string) {
    // Dynamically click the link corresponding to the provided status code
    cy.contains('a', statusCode).click();
  }

  validateStatusCodeRequest(statusCode: string) {
    // Create request options for each status code, allowing 404 and 500 to pass without failing the test
    const requestOptions = {
      url: `/status_codes/${statusCode}`,
      failOnStatusCode:
        statusCode === '404' || statusCode === '500' ? false : true, // Handle 404 and 500 without failing the test
    };

    // Verify that the current URL includes the correct status code, and check the request's response status
    cy.url().should('include', `/status_codes/${statusCode}`);
    cy.request(requestOptions).then((response) => {
      // Ensure the response status matches the expected status code
      expect(response.status).to.eq(parseInt(statusCode));
    });
  }

  navigateBackToStatusCodes() {
    // Navigate back to the Status Codes page after checking a status code link
    cy.visit('/status_codes');
  }
}
