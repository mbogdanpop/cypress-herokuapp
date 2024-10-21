export class BrokenImagesPage {
  imagesSelector = 'img'; // Selector for images on the page
  brokenImagesLinkSelector = 'a[href="/broken_images"]'; // Selector for the "Broken Images" link

  navigateToBrokenImages() {
    // Click on the "Broken Images" link to navigate to the page
    cy.get(this.brokenImagesLinkSelector).click();
  }

  checkBrokenImages() {
    // Iterate over all images on the page
    cy.get(this.imagesSelector).each(($img) => {
      // Get the source of each image
      const imgSrc = $img.prop('src');

      // Make a request to the image URL to check if it loads properly
      cy.request({
        url: imgSrc,
        failOnStatusCode: false, // Allow request to pass even if the image is broken (non-200 status)
      }).then((resp) => {
        // Log and fail the test if the image is broken (non-200 status)
        if (resp.status !== 200) {
          cy.log(`Broken image found: ${imgSrc}`);
          expect(resp.status, `Image failed to load: ${imgSrc}`).to.eq(200);
        }
      });
    });
  }
}
