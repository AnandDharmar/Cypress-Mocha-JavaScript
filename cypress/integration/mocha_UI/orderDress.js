/// <reference types='Cypress'/>
describe('my first test', function () {
    it('My Firt test case ', function () {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click();
        cy.get('#email').type("ananddharmar.d@gmail.com")
        cy.get('#passwd').type("Quali@123")
        cy.get('#SubmitLogin > span').click();
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click();
        //Visible is added to make sure it counts only visible elements make it 8 to test the other scenario
        cy.get('div[class="button-container"]:visible').should('have.length', 7)
        //Trying to minimize the scope of finding the element by finding the block rather than finding in the entire page
        //Parent child combination
        cy.get('.product_list.grid.row').find('div[class="button-container"]').should('have.length', 7)
        cy.get('.product_list.grid.row').find('div[class="button-container"]').eq(3).contains('Add to cart').click();
        cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
        cy.get('.button-container > .button-medium > span').click();
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#cgv').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button > span').click()
        cy.get('.page-heading').should('have.text', 'Order confirmation')

    })
})