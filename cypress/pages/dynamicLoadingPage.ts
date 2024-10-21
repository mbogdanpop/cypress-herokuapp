export class DynamicLoadingPage {
  dynamicLoadingLinkSelector = 'a[href="/dynamic_loading"]'; // Selector for the "Dynamic Loading" link
  startButtonSelector = '#start button'; // The Start button selector on the example pages
  finishSelector = '#finish'; // The selector for the dynamically loaded element after clicking Start
  example1LinkSelector = '[href="/dynamic_loading/1"]'; // Selector for the Example 1 link
  example2LinkSelector = '[href="/dynamic_loading/2"]'; // Selector for the Example 2 link

  navigateToDynamicLoadingPage() {
    // Click on the "Dynamic Loading" link to navigate to the main page for dynamic loading examples
    cy.get(this.dynamicLoadingLinkSelector).click();
  }

  navigateToExample(example: string) {
    // Navigate to Example 1 or Example 2 based on the passed parameter
    if (example === '1') {
      cy.get(this.example1LinkSelector).click();
    } else if (example === '2') {
      cy.get(this.example2LinkSelector).click();
    }
  }

  startLoading() {
    // Click the "Start" button to trigger the dynamic loading of content
    cy.get(this.startButtonSelector).click();
  }

  verifyHiddenText() {
    // Verify that the dynamic content is initially hidden (before loading)
    cy.get(this.finishSelector).should('not.be.visible');
  }

  verifyLoadedText(timeout: number = 10000) {
    // Verify that the dynamically loaded element becomes visible and contains "Hello World" after loading
    // A timeout is set to allow time for the loading process to complete
    cy.get(this.finishSelector, { timeout })
      .should('be.visible')
      .and('contain.text', 'Hello World');
  }
}
