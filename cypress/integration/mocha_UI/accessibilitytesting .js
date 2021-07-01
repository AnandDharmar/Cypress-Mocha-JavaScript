describe('Accessibility Testing', function () {

  before(function () {
    cy.visit("https://demo.nopcommerce.com/");
    cy.get('.ico-register').click();
    cy.injectAxe();
  });


  it('Verify accessibility of the page ', function () {
    cy.checkA11y(null, {
      rules: {
        "landmark-one-main": {
          enabled: false
        },
      },
    });
  })

  it('Verify accessibility excluding a specific violation', function () {
    cy.injectAxe();
    cy.customCheckAlly();
  })

})