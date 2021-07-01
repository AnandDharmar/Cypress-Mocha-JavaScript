var Fakerator = require("fakerator");
var fakerator = Fakerator("de-DE");
describe('Account creation', function () {

    it('Register an account', function () {
        cy.visit('https://demo.nopcommerce.com/');
        cy.get('.ico-register').click();
        cy.get('#FirstName').type(fakerator.names.firstName());
        cy.get('#LastName').type(fakerator.names.lastName());
        cy.get('[name="DateOfBirthDay"]').select('26');
        cy.get('[name="DateOfBirthMonth"]').select('April');
        cy.get('[name="DateOfBirthYear"]').select('1990');
        cy.get('#Email').type(fakerator.internet.email());
        const pass = fakerator.internet.password(8);
        cy.get('#Password').type(pass);
        cy.get('#ConfirmPassword').type(pass);
        cy.get('#register-button').click();
        cy.get('.result').should('have.text', 'Your registration completed');
    })
})