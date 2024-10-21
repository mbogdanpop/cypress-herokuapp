export class DropdownPage {
  dropdownSelector = '#dropdown'; // Selector for the dropdown element
  dropdownLinkSelector = 'a[href="/dropdown"]'; // Selector for the "Dropdown" link

  navigateToDropdownPage() {
    // Click the link to navigate to the Dropdown page
    cy.get(this.dropdownLinkSelector).click();
  }

  selectOption(value: string) {
    // Select the given value from the dropdown
    cy.get(this.dropdownSelector).select(value);
  }
}
