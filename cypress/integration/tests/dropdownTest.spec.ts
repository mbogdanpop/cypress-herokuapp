// dropdownTest.spec.ts

import { DropdownPage } from '../../pages/dropdownPage';

describe('Dropdown Test', () => {
  const dropdownPage = new DropdownPage();

  it('should select options from the dropdown', () => {
    // Visit the base URL
    cy.visit('/');

    // Navigate to the Dropdown page via the page object
    dropdownPage.navigateToDropdownPage();

    // Verify the URL includes "/dropdown"
    cy.url().should('include', '/dropdown');

    // Test selecting dropdown options
    dropdownPage.selectOption('1');
    cy.get(dropdownPage.dropdownSelector).should('have.value', '1');

    dropdownPage.selectOption('2');
    cy.get(dropdownPage.dropdownSelector).should('have.value', '2');
  });
});
