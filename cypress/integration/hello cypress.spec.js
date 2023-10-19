/// <reference types="cypress" /.>
Cypress.on('uncaught:expection', () => false);
it('should opem web site', { scrollBehavior: false },  ()=>{
    cy.visit('https://www.cypress.io');
    //cy.get('.footer-form > .border').contains(" Subscribe to our newsletter " ).click({force:true});
    cy.get('[href*="/subscribe"]').click({force:true});
    cy.wait(500);
    cy.get('#subscribe_email').type('madakr@outlook.com', {delay:200});
    //cy.get('form.relative > .gap-\[16px\] > .border').contains("Subscribe today ").click({force:true});
    //cy.get('button[type="Subscribe today "]').as('submitBtn');
    cy.get('button').contains("Subscribe today ").click({force:true});
    cy.get('.w-full > .font-primary').should('have.text', 'Thank you for subscribing!');
});